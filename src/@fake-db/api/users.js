import mock from '../mock';
import { data } from '../db/users';

mock.onGet('/api/users/list/all-data').reply(200, data.users);
