import React from 'react';

import Overlay from '../Overlay/Overlay';

import styles from './Modal.module.scss';

const Modal = ({ show, closeModal, children }) => {
  return (
    <>
      <Overlay show={show} clicked={closeModal} />
      <div
        className={`${styles.modal} ${show ? styles.modal_show : ''}`}
        onClick={closeModal}
      >
        {children}
      </div>
    </>
  );
};

export default Modal;
