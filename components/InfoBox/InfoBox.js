import React from 'react';

import styles from './InfoBox.module.scss';

const InfoBox = ({ id, title, children }) => {
  return (
    <div className={styles.main} id={id}>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </div>
  );
};

export default InfoBox;
