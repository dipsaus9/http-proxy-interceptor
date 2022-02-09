import { baseService } from './services/baseService';

(async () => {
  const user = await baseService.getSession();

  console.log(user);
})();
