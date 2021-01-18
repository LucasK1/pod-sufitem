import React, { useState } from 'react';

import styles from './PriceItem.module.scss';

const PriceItem = ({ name, price, desc }) => {
  const [hovered, setHovered] = useState(false);

  const descr = desc.split('. ');

  const mouseEnterHandler = () => {
    setTimeout(() => {
      setHovered(true);
    }, 100);
  };
  const mouseLeaveHandler = () => {
    setTimeout(() => {
      setHovered(false);
    }, 100);
  };

  return (
    <>
      <li
        className={styles.priceItem}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}>
        <span style={{ borderBottom: '1px dotted #aaa', position: 'relative' }}>
          {name}
        </span>
        <span>{price}zł</span>
        <ul
          className={`${styles.moreInfo} ${
            hovered ? styles.moreInfo_active : ''
          }`}>
          {descr.map((sent) => (
            <li>{sent}</li>
          ))}
        </ul>
      </li>
    </>
  );
};
export default PriceItem;
