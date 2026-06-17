import { chromium } from 'playwright';

const url = 'http://127.0.0.1:4321/';
const viewports = [
  { name: 'desktop', width: 1440, height: 1100 },
  { name: 'mobile', width: 390, height: 1200 }
];

const browser = await chromium.launch({ headless: true });
for (const viewport of viewports) {
  const page = await browser.newPage({ viewport: { width: viewport.width, height: viewport.height } });
  const errors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
  });
  page.on('pageerror', err => errors.push(err.message));
  const response = await page.goto(url, { waitUntil: 'networkidle' });
  const metrics = await page.evaluate(() => ({
    title: document.title,
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
    bodyText: document.body.innerText.slice(0, 220),
    navMenuDisplay: getComputedStyle(document.querySelector('.nav-links')).display,
    h1: document.querySelector('h1')?.textContent?.trim()
  }));
  await page.screenshot({ path: `qa-${viewport.name}.png`, fullPage: true });
  console.log(JSON.stringify({ viewport: viewport.name, status: response?.status(), errors, metrics }, null, 2));
  await page.close();
}
await browser.close();
