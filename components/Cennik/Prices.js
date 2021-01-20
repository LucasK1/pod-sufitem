import React from 'react';
import Head from 'next/head';

import prices from './prices.json';

import styles from './Prices.module.scss';
import PriceItem from './PriceItem/PriceItem';

const Prices = () => {
  return (
    <>
      <Head>
        <title>Cennik // pod sufitem</title>
      </Head>
      <section className={styles.content}>
        <div className={styles.content__section}>
          <h3 className={styles.content__sectionTitle}>
            Pole Dance/Aerial Hoop
          </h3>
          <ul className={styles.content__priceList}>
            {prices.poleAerial.map(({ id, name, price, desc }) => (
              <PriceItem key={id} name={name} price={price} desc={desc} />
            ))}
          </ul>
        </div>
        <div className={styles.content__section}>
          <h3 className={styles.content__sectionTitle}>Fitness</h3>
          <ul className={styles.content__priceList}>
            {prices.fitness.map(({ id, name, price, desc }) => (
              <PriceItem key={id} name={name} price={price} desc={desc} />
            ))}
          </ul>
        </div>
        <div className={styles.content__section}>
          <h3 className={styles.content__sectionTitle}>Mix</h3>
          <ul className={styles.content__priceList}>
            {prices.mix.map(({ id, name, price, desc }) => (
              <PriceItem key={id} name={name} price={price} desc={desc} />
            ))}
          </ul>
        </div>
        <div className={styles.content__section}>
          <h3 className={styles.content__sectionTitle}>Wynajem sali</h3>
          <ul className={styles.content__priceList}>
            {prices.rent.map(({ id, name, price, desc }) => (
              <PriceItem key={id} name={name} price={price} desc={desc} />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Prices;
