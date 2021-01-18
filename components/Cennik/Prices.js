import React from 'react';
import Head from 'next/head';

import prices from './prices.json';

import styles from './Prices.module.scss';

const Prices = () => {
  return (
    <>
      <Head>
        <title>Cennik // pod sufitem</title>
      </Head>
      <section className={styles.content}>
        <div className={styles.content__section}>
          <h3>Pole Dance/Aerial Hoop</h3>
          <ul>
            {prices.poleAerial.map((item) => (
              <li>
                {item.name} - {item.price}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.content__section}>
          <h3>Fitness</h3>
          <ul>
            {prices.fitness.map((item) => (
              <li>
                {item.name} - {item.price}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.content__section}>
          <h3>Mix</h3>
          <ul>
            {prices.mix.map((item) => (
              <li>
                {item.name} - {item.price}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.content__section}>
          <h3>Wynajem sali</h3>
          <ul>
            {prices.rent.map((item) => (
              <li>
                {item.name} - {item.price}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Prices;
