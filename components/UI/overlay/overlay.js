import styles from './overlay.module.scss';

const Overlay = (props) =>
  props.show ? (
    <div className={styles.overlay} onClick={props.clicked}></div>
  ) : null;

export default Overlay;
