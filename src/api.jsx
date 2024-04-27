import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // Usando a variável de ambiente para definir o baseURL,
});

export default api;
