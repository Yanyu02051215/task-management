import axios from 'axios';
import { API_PATH } from './config';

class Task {
  // eslint-disable-next-line class-methods-use-this
  headers() {
    return {
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    };
  }

  async save(department, grade, occupation, priod, task) {
    return axios.post(`${API_PATH}/tasks`, {
      department,
      grade,
      occupation,
      priod,
      task,
    }, this.headers());
  }
}

export default new Task();