const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  const outDir = path.join(process.cwd(), 'test-results', 'responsive');
  fs.mkdirSync(outDir, { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage();

  const viewports = [
    { name: 'mobile-320', width: 320, height: 720 },
    { name: 'tablet-768', width: 768, height: 900 },
    { name: 'desktop-1440', width: 1440, height: 900 },
  ];

  const results = [];

  for (const vp of viewports) {
    await page.setViewportSize({ width: vp.width, height: vp.height });
    await page.goto('http://localhost:8000', { waitUntil: 'networkidle' });
    const overflow = await page.evaluate(() => {
      const doc = document.documentElement;
      return {
        scrollWidth: doc.scrollWidth,
        clientWidth: doc.clientWidth,
        overflowX: doc.scrollWidth > doc.clientWidth,
      };
    });
    const shotPath = path.join(outDir, `${vp.name}.png`);
    await page.screenshot({ path: shotPath, fullPage: true });
    results.push({ viewport: vp, overflow, screenshot: shotPath });
  }

  await browser.close();

  console.log(JSON.stringify(results, null, 2));
})();
