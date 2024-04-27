import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Usando a variável de ambiente para definir o baseURL,
});

export default api;
