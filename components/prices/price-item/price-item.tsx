import { PriceItemProps } from './price-item.interfaces';
import styles from './price-item.module.scss';

const PriceItem = ({ name, price }: PriceItemProps) => {
  return (
    <li className={styles.priceItem}>
      <a
        href="https://app.fitssey.com/podsufitem/frontoffice/pricing/cards"
        target="_blank"
        rel="noreferrer"
        tabIndex={0}
        className={styles.priceItem__name}
      >
        {name}
        <span> - {price}zł</span>
      </a>
    </li>
  );
};
export default PriceItem;
