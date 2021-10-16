import { FC } from 'react';
import { InfoBoxProps } from './info-box.interfaces';
import styles from './info-box.module.scss';

const InfoBox: FC<InfoBoxProps> = ({ id, title, isBlack, isBorder, isPricesBox, children }) => {
  return (
    <div
      className={`${styles.container} ${isBlack ? styles.container_black : ''} ${
        isPricesBox ? styles.container__prices : ''
      }`}
    >
      <div aria-hidden="true" className={styles.scrollHelper} id={id}></div>
      <div
        className={`${styles.content} ${isBorder ? styles.content_border : ''}`}
      >
        {title && <h1 className={styles.title}>{title}</h1>}
        {children}
        {isPricesBox && (
          <div className={styles.moreInfo}>
            <div>* - Studenci 10% żniżki</div>{' '}
            <div>** - Wszystkie karnety są ważne 30 dni</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoBox;
