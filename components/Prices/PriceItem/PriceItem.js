import Tippy from '@tippyjs/react/headless';
import React from 'react';

import styles from './PriceItem.module.scss';

const PriceItem = ({ name, price, desc, tippyPlacement }) => {
  let splitDesc = desc.split('. ');
  splitDesc = splitDesc.map((item, index) => {
    if (index < splitDesc.length - 1) {
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
          <span tabIndex="0" className={styles.priceItem__name}>
            {name}
          </span>
        </Tippy>
        <span>{price}zł</span>
      </li>
    </>
  );
};
export default PriceItem;
