import React, { FC } from 'react';

import styles from './hidden.module.scss';

const HiddenOnMobile: FC = ({ children }) => {
  return <div className={styles.hiddenOnMobile}>{children}</div>;
};

const HiddenOnDesktop: FC = ({ children }) => {
  return <div className={styles.hiddenOnDesktop}>{children}</div>;
};

export { HiddenOnMobile, HiddenOnDesktop };
