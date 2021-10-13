import { FC } from 'react';
import { GrClose } from 'react-icons/gr';
import Overlay from '../overlay/overlay';
import { ModalProps } from './modal.interfaces';
import styles from './modal.module.scss';

const ModalCloseButton = ({ onClick }) => (
  <button className={styles.modalCloseButton} onClick={onClick}>
    <GrClose style={{ fontSize: '24px' }} />
  </button>
);

const Modal: FC<ModalProps> = ({
  isVisible,
  closeModal,
  children,
  includeCloseButton,
}) => {
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
