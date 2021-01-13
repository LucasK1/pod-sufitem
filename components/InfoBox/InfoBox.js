import React from 'react';

import styles from './InfoBox.module.scss';

const InfoBox = ({ id, title, children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.scrollHelper} id={id}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        {children}
      </div>
    </div>
  );
};

export default InfoBox;
