import React from 'react';

import styles from './InfoBox.module.scss';

const InfoBox = ({ id, title, black, border, prices, children }) => {
  return (
    <div
      className={`${styles.container} ${black ? styles.container_black : ''} ${
        prices ? styles.container__prices : ''
      }`}>
      <div aria-hidden="true" className={styles.scrollHelper} id={id}></div>
      <div
        className={`${styles.content} ${border ? styles.content_border : ''}`}>
        {title && <h1 className={styles.title}>{title}</h1>}
        {children}
        {prices && (
          <div className={styles.moreInfo}>
            <div>* - Studenci 10% żniżki</div>{' '}
            <div>** - Wszystkie karnety są ważne 30 dni</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoBox;
