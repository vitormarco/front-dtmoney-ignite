import { api } from "../api";

export async function fetchAllTransaction() {
  return api.get('/transactions')
      .then(response => response.data)
      .catch(err => err)
}