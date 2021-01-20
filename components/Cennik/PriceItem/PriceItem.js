import Tippy from '@tippyjs/react/headless';
import React from 'react';

import styles from './PriceItem.module.scss';

const PriceItem = ({ name, price, desc }) => {
  return (
    <>
      <li className={styles.priceItem}>
        <Tippy
          render={(attrs) => (
            <div className={styles.tooltipBox} {...attrs}>
              {desc}
            </div>
          )}
          placement="bottom-start"
          delay={[50, 200]}>
          <span
            tabIndex="0"
            style={{ borderBottom: '1px dotted #aaa', position: 'relative' }}>
            {name}
          </span>
        </Tippy>
        <span>{price}zł</span>
      </li>
    </>
  );
};
export default PriceItem;
