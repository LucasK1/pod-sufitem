import PriceItem from './price-item/price-item';
import prices from './prices.json';
import styles from './prices.module.scss';

const Prices = () => {
  return (
    <section className={styles.content}>
      <div className={styles.content__section}>
        <h4 className={styles.content__sectionTitle}>Wejścia jednorazowe</h4>
        <ul className={styles.content__priceList} style={{ paddingTop: 0 }}>
          {prices.single.map(({ id, name, price }) => (
            <PriceItem key={id} name={name} price={price} />
          ))}
        </ul>
      </div>
      <div className={styles.content__section}>
        <h4 className={styles.content__sectionTitle}>Karnety fitness</h4>
        <h5>(Obowiązuje na zajęcia z wyłączeniem pole dance i aerial hoop)</h5>
        <ul className={styles.content__priceList}>
          {prices.fitness.map(({ id, name, price }) => (
            <PriceItem key={id} name={name} price={price} />
          ))}
        </ul>
      </div>
      <div className={styles.content__section}>
        <h4 className={styles.content__sectionTitle}>Karnety Mix</h4>
        <h5>(Obowiązuje na wszystkie zajęcia)</h5>
        <ul className={styles.content__priceList}>
          {prices.mix.map(({ id, name, price }) => (
            <PriceItem key={id} name={name} price={price} />
          ))}
        </ul>
      </div>
      <div className={styles.content__section}>
        <h4 className={styles.content__sectionTitle}>Wynajem sali</h4>
        <ul className={styles.content__priceList} style={{ paddingTop: 0 }}>
          {prices.rent.map(({ id, name, price }) => (
            <PriceItem key={id} name={name} price={price} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Prices;
