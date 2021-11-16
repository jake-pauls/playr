import axios from 'axios';
import { useQuery } from 'react-query';

import { apiBaseUrl } from '../utils';

// Playtests
const fetchPlaytests = async () => {
  let { data: playtests } = await axios.get(`${apiBaseUrl}/playtests`);

  playtests = playtests.sort((a, b) => {
    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
  });

  return playtests;
};

export const QueryPlaytests = (options = {}) => {
  return useQuery('playtests', () => fetchPlaytests(), options);
};

const createPlaytest = async (body) => {
  let { data: response } = await axios.post(`${apiBaseUrl}/playtests`, body);

  return response;
};

export const SendCreatePlaytest = (body, options = {}) => {
  return useQuery('create-playtest', () => createPlaytest(body), {
    retry: 0,
    refetchOnWindowFocus: false,
    enabled: false,
    ...options,
  });
};
