import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'http://life-calendar.std-1930.ist.mospolytech.ru/api/v1/users';
class UserService {
  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }
}
export default new UserService();