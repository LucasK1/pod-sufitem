import type { ModalProps } from 'components/UI/modal/modal.interfaces';
import styles from 'components/UI/modal/modal.module.scss';
import ModalCloseButton from 'components/UI/modal/scaffold/modal-close-button';
import Overlay from 'components/UI/overlay/overlay';
import type { FC } from 'react';

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
