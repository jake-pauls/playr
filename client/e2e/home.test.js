/**
 * @jest-environment puppeteer
 */
describe('home page validation', () => {
  beforeEach(async () => {
    await page.goto(testingURL);
  });

  it('should be titled Playr', async () => {
    await expect(page.title()).resolves.toMatch('Playr.');
  });

  it('contains the home text', async () => {
    await expect(page).toMatch('Playr.');
  });

  it('contains the title text', async () => {
    await expect(page).toMatch('Accelerate Your Playtesting Strategy');
  });

  it('contains the subtitle text', async () => {
    await expect(page).toMatch(
      'Spend more time creating what your players want, instead of guessing what they want'
    );
  });

  it('ensures hero button is clickable and navigates to the dashboard', async () => {
    await expect(page).toClick('button', { text: 'Check It Out' });
    await expect(page).toMatch('Dashboard');
  });
});
