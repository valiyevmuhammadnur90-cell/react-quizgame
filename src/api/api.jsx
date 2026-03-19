import axios from "axios";

const api = axios.create({
  baseURL: "https://7a9c744fc462c0b8.mokky.dev",
});

export const question_api = axios.create({
  baseURL: "https://4e5415b59739c1fd.mokky.dev",
});

export const entertainment = axios.create({
  baseURL: "https://284f211619463aa5.mokky.dev/music",
});

export default api;
