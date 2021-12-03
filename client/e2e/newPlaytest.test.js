/**
 * @jest-environment puppeteer
 */
import { testPlaytest } from './playtestFactory';

describe('new playtest page validation', () => {
  beforeEach(async () => {
    await page.goto(`${testingURL}/newplaytest`);
  });

  it('contains the header text', async () => {
    await expect(page).toMatch('New Playtest');
  });

  it("matches the 'gameName' input and fills it with text", async () => {
    await expect(page).toFill('input[name="gameName"]', 'FrostFire');
  });

  it("matches the 'newPlaytest' form and creates a single playtest using valid data", async () => {
    await expect(page).toFillForm('form[name="newPlaytest"]', {
      gameName: testPlaytest.gameName,
      instructions: testPlaytest.instructions,
      startDate: testPlaytest.startDate,
      endDate: testPlaytest.endDate,
      aesthetics: testPlaytest.aesthetics,
      buildLink: testPlaytest.buildLink,
    });

    await expect(page).toClick('button', { text: 'Save' });
    await expect(page).toMatch('Playtests');

    // Validate success toast message
    await expect(page).toMatch('Successfully created playtest');
    await expect(page).toMatch(
      "Ongoing playtests can be viewed in the 'Playtests' tab"
    );
  });

  it("matches the 'newPlaytest' form and submits a playtest without data", async () => {
    await expect(page).toFillForm('form[name="newPlaytest"]', {
      gameName: '',
      instructions: '',
      startDate: '',
      endDate: '',
      aesthetics: '',
      buildLink: '',
    });

    await expect(page).toClick('button', { text: 'Save' });

    // Validate error toast message
    await expect(page).toMatch('Missing required fields');
    await expect(page).toMatch(
      'Please fill in the required fields and try again'
    );
  });
});
