import React from 'react';

import styles from './Overlay.module.scss';

const Overlay = (props) =>
  props.show ? (
    <div className={styles.overlay} onClick={props.clicked}></div>
  ) : null;

export default Overlay;
