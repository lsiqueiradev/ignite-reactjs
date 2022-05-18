import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import * as S from './styles';
interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void
}

function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" onClick={onRequestClose} className="react-modal-close">
        <img src={closeImg} alt="Fechar Modal" />
      </button>
      <S.Container>

        <h2>Cadastrar transação</h2>

        <input 
          type="text"
          placeholder="Título" 
        />
        <input 
          type="number"
          placeholder="Valor" 
        />
        <input 
          type="text"
          placeholder="Categoria" 
        />
        <button type="submit">
          Cadastrar
        </button>
      </S.Container>
    </Modal>
  );
}

export { NewTransactionModal };