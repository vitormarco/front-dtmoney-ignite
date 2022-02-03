import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { createNewTransaction, fetchAllTransaction } from '../service/Transactions';

type TransactionType = {
  id: number;
  title: string;
  type: 'deposit' | 'withdraw';
  category: string;
  amount: number;
  createdAt: string;
}

type TransactionInputType = Omit<TransactionType, 'id' | 'createdAt'>;

type TransactionProviderPropsType = {
  children: ReactNode;
}

type TransactionsContextDataType = {
  transactions: TransactionType[];
  createTransaction: (transaction: TransactionInputType) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextDataType>(
  {} as TransactionsContextDataType
);

export function TransactionsProvider({ children }: TransactionProviderPropsType) {
  const [transactions, setTransactions] = useState<TransactionType[]>([])

  useEffect(() => {
    async function getTransactions() {
      const { transactions: allTransactions } = await fetchAllTransaction()
      setTransactions(allTransactions)
    }

    getTransactions()
  }, []);

  async function createTransaction(transaction: TransactionInputType) {
    const { transaction: newTransaction } = await createNewTransaction(transaction);
    setTransactions((oldTransactions) => [...oldTransactions, newTransaction])
  }

  return (
    <TransactionsContext.Provider value={{transactions, createTransaction}}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionsContext)

  return context
}