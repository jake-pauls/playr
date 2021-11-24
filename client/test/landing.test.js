describe('landing page test', () => {
  beforeEach(async () => {
    await page.goto(testingURL);
  });

  it('should be titled Playr', async () => {
    await expect(page.title()).resolves.toMatch('Playr.');
  });

  it('contains the home text', async () => {
    await expect(page).toMatch('Home');
  });
});
