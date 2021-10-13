import { OverlayProps } from './overlay.interfaces';
import styles from './overlay.module.scss';

const Overlay = ({ isVisible, onDismiss }: OverlayProps) =>
  isVisible ? <div className={styles.overlay} onClick={onDismiss}></div> : null;

export default Overlay;
