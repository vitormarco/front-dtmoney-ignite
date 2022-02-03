import { api } from "../api";

type createNewTransactionData = {
  title: string;
  amount: number;
  category: string;
  type: 'deposit' | 'withdraw'
}

export async function fetchAllTransaction() {
  return api.get('/transactions')
          .then(response => response.data)
          .catch(err => err)
}

export async function createNewTransaction(data: createNewTransactionData) {
  return api.post('/transactions', data)
          .then(res => res.data)
          .catch(err => err)
}