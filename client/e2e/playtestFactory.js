import { getARandomAesthetic, getRandomFormattedDate } from './testUtils';

/**
 * Default test playtest with randomized data
 */
export const testPlaytest = {
  _id: 0,
  username: 'Test User',
  gameName: 'Test Game Name',
  instructions: 'Test Game Instructions',
  startDate: getRandomFormattedDate(),
  endDate: getRandomFormattedDate(),
  aesthetics: getARandomAesthetic(),
  buildLink: 'https://github.com/testGameName/testGameName.git',
  updatedAt: getRandomFormattedDate(),
  status: 'ongoing',
};

/**
 * Factory method to create an array of playtests with randomized data
 * @param {number} quantity
 * @returns {}
 */
export const createPlaytests = (quantity) => {
  const playtests = [];

  for (let i = 0; i < quantity; i++) {
    playtests.push({
      _id: i,
      username: `Test User #${i}`,
      gameName: `Test Game Name #${i}`,
      instructions: `Test Game Instructions #${i}`,
      startDate: getRandomFormattedDate(),
      endDate: getRandomFormattedDate(),
      aesthetics: getARandomAesthetic(),
      buildLink: `https://github.com/testGameName${i}/testGameName${i}.git`,
      updatedAt: getRandomFormattedDate(),
      status: 'ongoing',
    });
  }

  return playtests;
};
