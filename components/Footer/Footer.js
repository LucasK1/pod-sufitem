import React from 'react';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer} id="kontakt">
      <div className={styles.footer__container}>
        <address className={styles.address}>
          <p>
            Studio Pod Sufitem
            <br />
            ul. Skoczylasa 10/12 lok. 81
            <br />
            03-465 Warszawa
          </p>
          <a href="tel:+48799079809" className={styles.telMail}>
            +48 799 079 809
          </a>
          <br />
          <a
            href="mailto:zapisy.podsufitem@gmail.com"
            className={styles.telMail}>
            zapisy.podsufitem@gmail.com
          </a>
        </address>
        <section className={styles.media}>
          <a
            href="mailto:zapisy.podsufitem@gmail.com"
            className={styles.fontAwesome}>
            <i className="fas fa-envelope fa-3x"></i>
          </a>
          <a
            href="https://www.facebook.com/podsufitem"
            target="_blank"
            aria-label="Facebook link"
            className={styles.fontAwesome}>
            <i className="fab fa-facebook-square fa-3x"></i>
          </a>
          <a
            href="https://www.instagram.com/pod.sufitem/"
            target="_blank"
            aria-label="Instagram link"
            className={styles.fontAwesome}>
            <i className="fab fa-instagram-square fa-3x"></i>
          </a>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
