import Tippy from '@tippyjs/react/headless';
import React, { useEffect, useState } from 'react';

import styles from './PriceItem.module.scss';

const PriceItem = ({ name, price, desc, tippyPlacement }) => {

  const splitDesc = desc
    .split('. ')
    .map((item, index, array) =>
      index < array.length - 1 ? `${item}.` : item
    );

  const priceLink = (
    <a
      href="https://app.fitssey.com/podsufitem/frontoffice/pricing/cards"
      target="_blank"
      tabIndex="0"
      className={styles.priceItem__name}>
      {name}
    </a>
  );

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
          {priceLink}
        </Tippy>
        <span>{price}zł</span>
      </li>
    </>
  );
};
export default PriceItem;
