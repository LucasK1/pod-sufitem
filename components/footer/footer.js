import {
  FaEnvelope,
  FaFacebookSquare,
  FaInstagramSquare,
} from 'react-icons/fa';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer} id="kontakt">
      <div className={styles.footer__container}>
        <address className={styles.address}>
          <p>
            Studio Pod Sufitem
            <br />
            zmiana lokalizacji
          </p>
          <a href="tel:+48799079809" className={styles.telMail}>
            +48 799 079 809
          </a>
          <br />
          <a href="mailto:info@studiopodsufitem.pl" className={styles.telMail}>
            info@studiopodsufitem.pl
          </a>
        </address>
        <section className={styles.media}>
          <a
            href="mailto:info@studiopodsufitem.pl"
            className={styles.fontAwesome}
            aria-label="Mail link"
          >
            <FaEnvelope className={styles.icons} />
          </a>
          <a
            href="https://www.facebook.com/podsufitem"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook link"
            className={styles.fontAwesome}
          >
            <FaFacebookSquare className={styles.icons} />
          </a>
          <a
            href="https://www.instagram.com/pod.sufitem/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram link"
            className={styles.fontAwesome}
          >
            <FaInstagramSquare className={styles.icons} />
          </a>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
