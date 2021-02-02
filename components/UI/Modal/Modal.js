import React from 'react';
import Overlay from '../Overlay/Overlay';

import styles from './Modal.module.scss';

const Modal = (props) => {
  return (
    <>
      <Overlay show={props.show} clicked={props.closeModal} />
        <div
          className={`${styles.modal} ${props.show ? styles.modal_show : ''}`}>
          {props.children}
        </div>
    </>
  );
};

export default Modal;
