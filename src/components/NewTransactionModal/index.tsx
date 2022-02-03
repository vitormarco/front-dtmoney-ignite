import { FormEvent, useState } from 'react'
import Modal from 'react-modal'
import { useTransactions } from '../../hooks/useTransactions'

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

import { Container, TransactionTypeContainer, Radiobox } from './styles'

type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
}

type Types = 'deposit' | 'withdraw'

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const { createTransaction } = useTransactions();

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState(0)
  const [type, setType] = useState<Types>('deposit');

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
    
    await createTransaction({
      title,
      amount,
      category,
      type
    });

    resetValues()
    onRequestClose();
  }

  function resetValues() {
    setTitle('')
    setCategory('')
    setAmount(0)
    setType('deposit')
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Close modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Create new transaction</h2>

        <input
          type="text"
          name="title"
          id="title"
          placeholder='Title'
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="number"
          name="value"
          id="value"
          placeholder="Value"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer >
          <Radiobox
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Income" />
            <span>Income</span>
          </Radiobox>
          <Radiobox
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Outcome" />
            <span>Outcome</span>
          </Radiobox>
        </TransactionTypeContainer>

        <input
          type="text"
          name="category"
          id="category"
          placeholder="Category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
        <button type="submit">
          Create
        </button>
      </Container>
    </Modal>
  );
}