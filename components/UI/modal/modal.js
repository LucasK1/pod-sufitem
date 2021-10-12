import Overlay from '../overlay/overlay';
import styles from './modal.module.scss';
import { GrClose } from 'react-icons/gr';

const ModalCloseButton = ({ onClick }) => (
  <button className={styles.modalCloseButton} onClick={onClick}>
    <GrClose style={{ fontSize: '24px' }} />
  </button>
);

const Modal = ({ isVisible, closeModal, children, includeCloseButton }) => {
  return (
    <>
      <Overlay isVisible={isVisible} onDismiss={closeModal} />
      <div
        className={`${styles.modal} ${isVisible ? styles.modal_show : ''}`}
        onClick={closeModal}
      >
        {includeCloseButton && <ModalCloseButton onClick={closeModal} />}
        {children}
      </div>
    </>
  );
};

export default Modal;
