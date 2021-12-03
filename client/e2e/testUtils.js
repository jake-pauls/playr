/**
 * Generates a random date between two dates and formats it to the local date string
 * @param {string} start
 * @param {string} end
 * @returns
 */
export const getRandomFormattedDate = (
  start = new Date('2020-01-01'),
  end = new Date('2030-01-01')
) =>
  new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  ).toLocaleDateString();

/**
 * Rolls for a randomized aesthetic
 * @returns
 */
export const getARandomAesthetic = () => {
  const aesthetics = [
    'Challenge',
    'Discovery',
    'Expression',
    'Fantasy',
    'Fellowship',
    'Narrative',
    'Submission',
    'Sensation',
  ];

  return aesthetics[Math.floor(Math.random() * 8)];
};
