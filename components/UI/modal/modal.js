import Overlay from '../overlay/overlay';
import styles from './modal.module.scss';

const Modal = ({ isVisible, closeModal, children }) => {
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
