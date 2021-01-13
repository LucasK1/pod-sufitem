import React from 'react';

import styles from './InfoBox.module.scss';

const InfoBox = ({ id, title, children }) => {
  return (
<<<<<<< HEAD
    <div className={styles.container}>
      <div className={styles.scrollHelper} id={id}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        {children}
      </div>
    </div>
=======
    <>
      <div className={styles.scrollHelper} id={id}></div>
      <div className={styles.main}>
        <h1 className={styles.title}>{title}</h1>
        {children}
      </div>
    </>
>>>>>>> 5bacbf8926f63f36f48e14ae71d45e57baeeb3cf
  );
};

export default InfoBox;
