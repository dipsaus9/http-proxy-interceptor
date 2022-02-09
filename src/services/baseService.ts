import { createHttpClient } from '~/clients/httpClient';
import { User } from './types/User';

const httpClient = createHttpClient(
  'https://6203c14e4d21c200170b9fdc.mockapi.io/api',
);

export const baseService = {
  getSession() {
    return httpClient
      .get<User[]>('/session')
      .then((response) => response.json())
      .then((users) => users[0]);
  },
};
