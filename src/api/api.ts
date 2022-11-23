import axios from 'axios';

const api: any = axios.create({
  baseURL: 'http://localhost:5001',
});

export default api;
