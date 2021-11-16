import 'expect-puppeteer';

describe('default app test', () => {
  beforeEach(async () => {
    await page.goto(testingURL);
  });

  it('contains the home text', async () => {
    await page.waitForSelector('.hom');
    const text = await page.$eval('.home', (e) => e.textContent);
    expect(text).toContain('Home');
  });
});
