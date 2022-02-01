import { createContext, ReactNode, useEffect, useState } from 'react'
import { fetchAllTransaction } from './service/Transactions';

export const TransactionsContext = createContext<TransactionType[]>([]);


type TransactionType = {
  id: number;
  title: string;
  type: 'deposit' | 'withdraw';
  category: string;
  amount: number;
  createdAt: string;
}

type TransactionProviderPropsType = {
  children: ReactNode
}

export function TransactionsProvider({ children }: TransactionProviderPropsType) {
  const [transactions, setTransactions] = useState<TransactionType[]>([])

  useEffect(() => {
    async function getTransactions() {
      const { transactions: allTransactions } = await fetchAllTransaction()
      setTransactions(allTransactions)
    }

    getTransactions()
  }, [])

  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  )
}