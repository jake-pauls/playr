/**
 * @jest-environment puppeteer
 */
import axios from 'axios';
import { createPlaytests } from './playtestFactory';

jest.mock('axios');

describe('playtest page validation', () => {
  beforeEach(async () => {
    await page.goto(`${testingURL}/playtest`);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('contains the header text', async () => {
    await expect(page).toMatch('Playtests');
  });

  it('validates that a list of playtests is aggregated on the UI', async () => {
    const playtests = createPlaytests(2);

    const mockedPlaytestData = [
      {
        _id: playtests[0]._id,
        username: playtests[0].username,
        gameName: playtests[0].gameName,
        instructions: playtests[0].updatedAt,
        status: playtests[0].status,
      },
      {
        _id: playtests[1]._id,
        username: playtests[1].username,
        gameName: playtests[1].gameName,
        instructions: playtests[1].updatedAt,
        status: playtests[1].status,
      },
    ];

    axios.get.mockImplementation(() =>
      Promise.resolve({
        data: mockedPlaytestData,
      })
    );
  });
});
