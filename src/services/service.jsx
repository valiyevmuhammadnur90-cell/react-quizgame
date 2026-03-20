import api from "../api/api";

export default async function register(values) {
  const res = await api.post("/register", values);
  return res.data;
}

export async function authorization(values) {
  const res = await api.post("/auth", values);
  return res.data;
}
