import React from 'react';
import styles from './PriceItem.module.scss';

const PriceItem = ({ name, price }) => {
  return (
    <li className={styles.priceItem}>
      <a
        href="https://app.fitssey.com/podsufitem/frontoffice/pricing/cards"
        target="_blank"
        tabIndex="0"
        className={styles.priceItem__name}
      >
        {name}
        <span> - {price}zł</span>
      </a>
    </li>
  );
};
export default PriceItem;
