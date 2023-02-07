import axios from 'axios';

const api = axios.create({
  baseURL: "http://18.231.60.49:3333",
});

export default api;