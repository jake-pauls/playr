import axios from 'axios';
import { useQuery } from 'react-query';

// Playtests
const fetchPlaytests = async () => {
  let { data: playtests } = await axios.get('/api/playtests');

  playtests = playtests.sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  );

  return playtests;
};

export const QueryPlaytests = (options = {}) =>
  useQuery('playtests', () => fetchPlaytests(), options);

const createPlaytest = async (body) => {
  const { data: response } = await axios.post('/api/playtests', body);

  return response;
};

export const SendCreatePlaytest = (body, options = {}) =>
  useQuery('create-playtest', () => createPlaytest(body), {
    retry: 0,
    refetchOnWindowFocus: false,
    enabled: false,
    ...options,
  });
