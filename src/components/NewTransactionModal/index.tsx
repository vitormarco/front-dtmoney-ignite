import { useState } from 'react'
import Modal from 'react-modal'

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

import { Container, TransactionTypeContainer, Radiobox } from './styles'

type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [type, setType] = useState('deposit');

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
      <Container>
        <h2>Create new transaction</h2>

        <input 
          type="text"
          name="title"
          id="title"
          placeholder='Title'
        />
        <input
          type="number"
          name="value"
          id="value"
          placeholder="Value"
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
        />
        <button type="submit">
          Create
        </button>
      </Container>
    </Modal>
  );
}