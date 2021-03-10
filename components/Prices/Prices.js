import React from 'react';

import prices from './prices.json';

import styles from './Prices.module.scss';
import PriceItem from './PriceItem/PriceItem';

const Prices = () => {
  return (
    <section className={styles.content}>
      <div className={styles.content__section}>
        <h3 className={styles.content__sectionTitle}>Pole Dance/Aerial Hoop</h3>
        <h4>(Obowiązuje na zajęcia pole dance, acro pole, aerial)</h4>
        <ul className={styles.content__priceList}>
          {prices.poleAerial.map(({ id, name, price, desc }) => (
            <PriceItem
              key={id}
              name={name}
              price={price}
              desc={desc}
              tippyPlacement="right"
            />
          ))}
        </ul>
      </div>
      <div className={styles.content__section}>
        <h3 className={styles.content__sectionTitle}>Fitness</h3>
        <h4>(Obowiązuje na zajęcia z wyłączeniem pole dance i aerial hoop)</h4>
        <ul className={styles.content__priceList}>
          {prices.fitness.map(({ id, name, price, desc }) => (
            <PriceItem
              key={id}
              name={name}
              price={price}
              desc={desc}
              tippyPlacement="left"
            />
          ))}
        </ul>
      </div>
      <div className={styles.content__section}>
        <h3 className={styles.content__sectionTitle}>Mix</h3>
        <h4>(Obowiązuje na wszystkie zajęcia)</h4>
        <ul className={styles.content__priceList}>
          {prices.mix.map(({ id, name, price, desc }) => (
            <PriceItem
              key={id}
              name={name}
              price={price}
              desc={desc}
              tippyPlacement="right"
            />
          ))}
        </ul>
      </div>
      <div className={styles.content__section}>
        <h3 className={styles.content__sectionTitle}>Wynajem sali</h3>
        <ul className={styles.content__priceList}>
          {prices.rent.map(({ id, name, price, desc }) => (
            <PriceItem
              key={id}
              name={name}
              price={price}
              desc={desc}
              tippyPlacement="left"
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Prices;
