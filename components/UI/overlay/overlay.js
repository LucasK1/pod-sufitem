import styles from './overlay.module.scss';

const Overlay = ({ isVisible, onDismiss }) =>
  isVisible ? <div className={styles.overlay} onClick={onDismiss}></div> : null;

export default Overlay;
