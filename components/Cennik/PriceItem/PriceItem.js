import React, { useState } from 'react';

import styles from './PriceItem.module.scss';

const PriceItem = ({ name, price, desc }) => {
  return (
    <>
      <li className={styles.priceItem}>
        <span style={{ borderBottom: '1px dotted #aaa', position: 'relative' }}>
          {name}
        </span>
        <span>{price}zł</span>
      </li>
    </>
  );
};
export default PriceItem;
