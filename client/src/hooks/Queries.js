import axios from 'axios';
import { useQuery } from 'react-query';

// Playtests
const fetchPlaytests = async () => {
  let { data: playtests } = await axios.get(
    'http://localhost:4040/api/playtests'
  );

  playtests = playtests.sort((a, b) => {
    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
  });

  return playtests;
};

export const QueryPlaytests = (options = {}) => {
  return useQuery('playtests', () => fetchPlaytests(), options);
};
