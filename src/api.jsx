import axios from 'axios';

const api = axios.create({
  baseURL: 'https://universofront-end-p84r.vercel.app/', // Defina o endereço base da sua API
});

export default api;
