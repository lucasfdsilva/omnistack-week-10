import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.30.3.161:3333',
});

export default api;