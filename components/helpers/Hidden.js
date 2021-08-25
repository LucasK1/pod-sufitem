import React from 'react';

import styles from './hidden.module.scss';

const HiddenOnMobile = ({ children }) => {
  return <div className={styles.hiddenOnMobile}>{children}</div>;
};

const HiddenOnDesktop = ({ children }) => {
  return <div className={styles.hiddenOnDesktop}>{children}</div>;
};

export { HiddenOnMobile, HiddenOnDesktop };
