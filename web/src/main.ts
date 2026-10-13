import { createChimes } from './audio';
import { runDemo } from './chain';
import { hex, preview } from './crypto';
import { blankFile, type StepKey } from './state';

const chimes = createChimes();
const file = blankFile();
const $ = <T extends HTMLElement>(id: string) => document.getElementById(id) as T;
const usd = (n: bigint) => '$' + n.toLocaleString('en-US');

const secrets = {
  buyer: crypto.getRandomValues(new Uint8Array(32)),
  seller: crypto.getRandomValues(new Uint8Array(32)),
  agent: crypto.getRandomValues(new Uint8Array(32)),
};

const view = {
  stage: $('sStage'),
  price: $('sPrice'),
  earnest: $('sEarnest'),
  seal: $('sSeal'),
  deed: $('sDeed'),
  mark: $('sMark'),
  ticker: $('ticker'),
};

function paint(): void {
  view.stage.textContent = file.stage;
  view.stage.dataset.stage = file.stage.toLowerCase();
  view.price.textContent = usd(file.price);
  view.earnest.textContent = usd(file.earnest);
  view.seal.textContent = file.fundsSeal ?? 'pending';
  view.deed.textContent = file.deedToken ?? 'pending';
  view.mark.textContent = file.settlementMark ?? 'pending';
  document.querySelectorAll<HTMLLIElement>('.lot').forEach((li) => {
    li.classList.toggle('is-done', file.done.has(li.dataset.step as StepKey));
  });
}

function stamp(line: string): void {
  const chip = document.createElement('span');
  chip.textContent = line;
  view.ticker.append(chip, chip.cloneNode(true));
  while (view.ticker.childElementCount > 16) view.ticker.firstElementChild?.remove();
}

function openLot(li: HTMLLIElement): void {
  document.querySelectorAll<HTMLLIElement>('.lot').forEach((other) => {
    const on = other === li;
    other.classList.toggle('is-open', on);
    other.querySelector('.lot__head')?.setAttribute('aria-expanded', String(on));
  });
}

type Handler = (data: FormData) => Promise<string>;

const steps: Record<StepKey, Handler> = {
  async funds(d) {
    file.funds = BigInt(String(d.get('funds') || '0'));
    if (file.funds < file.price) throw new Error('balance does not cover the purchase price');
    const buyer = await preview.partyKey('buyer', secrets.buyer);
    file.fundsSeal = hex(await preview.fundsSeal(buyer, file.funds, file.salt), 10);
    return 'funds sealed ' + file.fundsSeal;
  },
  async earnest(d) {
    if (!file.done.has('funds')) throw new Error('seal proof of funds first');
    file.price = BigInt(String(d.get('price') || '0'));
    file.earnest = BigInt(String(d.get('earnest') || '0'));
    file.stage = 'FUNDED';
    return 'earnest lodged ' + usd(file.earnest);
  },
  async title() {
    if (file.stage !== 'FUNDED') throw new Error('no funded escrow to inspect');
    const agent = await preview.partyKey('agent', secrets.agent);
    file.deedToken = hex(await preview.deedToken(file.escrowId, file.price, agent, file.salt), 10);
    file.stage = 'INSPECTED';
    return 'title certified';
  },
  async closing() {
    if (file.stage !== 'INSPECTED') throw new Error('title must be certified before closing');
    const seller = await preview.partyKey('seller', secrets.seller);
    file.settlementMark = hex(await preview.settlementMark(file.escrowId, seller, file.salt), 10);
    file.stage = 'CLOSED';
    return 'deal closed, deed released';
  },
  async refund(d) {
    if (file.stage !== 'FUNDED') throw new Error('refund only applies to a funded, uninspected escrow');
    if (Number(d.get('now')) <= 30_000) throw new Error('closing deadline has not passed');
    file.stage = 'REFUNDED';
    return 'earnest returned to buyer';
  },
};

const list = $('checklist');
list.addEventListener('click', (e) => {
  const head = (e.target as HTMLElement).closest('.lot__head');
  if (!head) return;
  chimes.tick();
  openLot(head.parentElement as HTMLLIElement);
});

list.addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target as HTMLFormElement;
  const li = form.closest<HTMLLIElement>('.lot')!;
  const key = li.dataset.step as StepKey;
  li.classList.remove('is-refused');
  try {
    const msg = await steps[key](new FormData(form));
    file.done.add(key);
    key === 'closing' ? chimes.keyTurn() : chimes.bell(key === 'refund' ? 440 : 660);
    stamp(msg);
    paint();
    const next = li.nextElementSibling as HTMLLIElement | null;
    if (next && key !== 'closing') openLot(next);
  } catch (err) {
    chimes.refusal();
    li.classList.add('is-refused');
    stamp('refused: ' + (err as Error).message);
  }
});

const mute = $<HTMLButtonElement>('mute');
mute.addEventListener('click', () => {
  chimes.setMuted(!chimes.muted());
  mute.setAttribute('aria-pressed', String(chimes.muted()));
  mute.textContent = chimes.muted() ? 'Sound off' : 'Sound on';
  chimes.tick();
});

// Contract execution: streams real circuit output into the vault log.
const execBtn = $<HTMLButtonElement>('execute');
const execLog = $('execLog');
const execStatus = $('execStatus');

async function execute(): Promise<void> {
  execBtn.disabled = true;
  execLog.textContent = '';
  execStatus.textContent = 'Running circuits';
  execStatus.dataset.tone = 'busy';
  chimes.tick();
  const started = performance.now();
  try {
    await runDemo((...parts) => {
      execLog.append(parts.map(String).join(' ') + '\n');
      execLog.scrollTop = execLog.scrollHeight;
    });
    const ms = Math.round(performance.now() - started);
    execStatus.textContent = `Completed in ${ms} ms`;
    execStatus.dataset.tone = 'ok';
    document.body.dataset.state = 'completed';
    chimes.keyTurn();
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    execLog.append('\nRejected: ' + message + '\n');
    execStatus.textContent = 'Rejected';
    execStatus.dataset.tone = 'bad';
    document.body.dataset.state = 'rejected: ' + message;
    chimes.refusal();
  } finally {
    execBtn.disabled = false;
  }
}

execBtn.addEventListener('click', () => void execute());

openLot(list.querySelector<HTMLLIElement>('.lot')!);
stamp('parcel 44109 opened');
paint();

if (location.hash === '#exec') void execute();
