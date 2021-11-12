import 'expect-puppeteer';

describe('default app test', () => {
  beforeEach(async () => {
    await page.goto(testingURL);
  });

  it('contains the welcome text', async () => {
    await page.waitForSelector('.App-welcome-text');
    const text = await page.$eval('.App-welcome-text', (e) => e.textContent);
    expect(text).toContain('Edit src/App.js and save to reload.');
  });
});
