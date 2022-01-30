import Modal from 'react-modal'

import closeImg from '../../assets/close.svg'

import { Container } from './styles'

type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
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