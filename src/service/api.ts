import axios from 'axios';

const api = axios.create({
  baseURL: "www.com.br",
});

export default api;