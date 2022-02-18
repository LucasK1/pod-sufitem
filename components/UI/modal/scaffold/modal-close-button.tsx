import { ModalCloseButtonProps } from 'components/UI/modal/modal.interfaces';
import styles from 'components/UI/modal/modal.module.scss';
import { GrClose } from 'react-icons/gr';

const ModalCloseButton = ({ onClick }: ModalCloseButtonProps) => (
  <button className={styles.modalCloseButton} onClick={onClick}>
    <GrClose style={{ fontSize: '24px' }} />
  </button>
);

export default ModalCloseButton;
