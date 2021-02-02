import Tippy from '@tippyjs/react/headless';
import React from 'react';

import styles from './PriceItem.module.scss';

const PriceItem = ({ name, price, desc, tippyPlacement }) => {
  const splitDesc = desc.split('. ').map((item, index, array) => {
    if (index < array.length - 1) {
      return `${item}.`;
    } else {
      return item;
    }
  });

  return (
    <>
      <li className={styles.priceItem}>
        <Tippy
          render={(attrs) => (
            <div
              className={`${styles.tooltipBox} ${
                tippyPlacement === 'right'
                  ? styles.tooltipArrowLeft
                  : styles.tooltipArrowRight
              }`}
              {...attrs}>
              <ul className={styles.descList}>
                {splitDesc.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          )}
          placement={tippyPlacement}
          delay={[50, 150]}>
          <a
            href="https://app.fitssey.com/podsufitem/frontoffice/pricing/cards"
            target="_blank"
            tabIndex="0"
            className={styles.priceItem__name}>
            {name}
          </a>
        </Tippy>
        <span>{price}zł</span>
      </li>
    </>
  );
};
export default PriceItem;
