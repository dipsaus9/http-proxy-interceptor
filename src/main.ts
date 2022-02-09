import { baseService } from './services/baseService';

(async () => {
  const users = await baseService.getUsers();

  console.log(users);
})();
