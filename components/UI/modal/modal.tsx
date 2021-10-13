import { FC } from 'react';
import Overlay from '../overlay/overlay';
import { ModalProps } from './modal.interfaces';
import styles from './modal.module.scss';

const Modal: FC<ModalProps> = ({ isVisible, closeModal, children }) => {
  return (
    <>
      <Overlay isVisible={isVisible} onDismiss={closeModal} />
      <div
        className={`${styles.modal} ${isVisible ? styles.modal_show : ''}`}
        onClick={closeModal}
      >
        {children}
      </div>
    </>
  );
};

export default Modal;
