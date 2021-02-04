import React from 'react';

import styles from './InfoBox.module.scss';

const InfoBox = ({ id, title, black, border, children }) => {
  return (
    <div
      className={`${styles.container} ${black ? styles.container_black : ''}`}>
      <div aria-hidden="true" className={styles.scrollHelper} id={id}></div>
      <div
        className={`${styles.content} ${border ? styles.content_border : ''}`}>
        {title ? <h1 className={styles.title}>{title}</h1> : ''}
        {children}
      </div>
    </div>
  );
};

export default InfoBox;
