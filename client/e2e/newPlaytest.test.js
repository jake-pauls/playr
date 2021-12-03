/**
 * @jest-environment puppeteer
 */
import { testPlaytest } from './playtestFactory';

describe('new playtest validation', () => {
  beforeEach(async () => {
    await page.goto(`${testingURL}/newplaytest`);
  });

  it('contains the header text', async () => {
    await expect(page).toMatch('New Playtest');
  });

  it("should match the 'Game Name' input and fill it with text", async () => {
    await expect(page).toFill('input[name="gameName"]', 'FrostFire');
  });

  it("should match the 'New Playtest' form and then create a single playtest", async () => {
    await expect(page).toFillForm('form[name="newPlaytest"]', {
      gameName: testPlaytest.gameName,
      instructions: testPlaytest.instructions,
      startDate: testPlaytest.startDate,
      endDate: testPlaytest.endDate,
      aesthetics: testPlaytest.aesthetics,
      buildLink: testPlaytest.buildLink,
    });
  });
});
