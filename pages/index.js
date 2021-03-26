import React from 'react';
import Head from 'next/head';

import InfoBox from '@/components/InfoBox/InfoBox';
import Classes from '@/components/Classes/Classes';
import Teachers from '@/components/Teachers/Teachers';
import Prices from '@/components/Prices/Prices';
import Footer from '@/components/Footer/Footer';

import styles from '@/styles/landingPage.module.scss';

const Home = () => {
  return (
    <>
      <Head>
        <title>pod sufitem // Szkoła akrobatyki powietrznej</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.landing}>
          <article className={styles.lead__text}>
            <p>
              Pod Sufitem to studio akrobatyki powietrznej, zlokalizowane w
              Warszawie, w samym centrum Pragi Północ.
              <br />
              Założycielką studia jest Anna Łukasiak - mistrzyni Polski Pole
              Sport Professional POSA 2019, mistrzyni Polski i Świata Aerial
              Hoop Amateur POSA 2019.
            </p>
            <p>
              Na pierwszym miejscu stawiamy jakość zajęć oraz komfort
              uczestników, dlatego pracujemy w kameralnych grupach i
              gwarantujemy indywidualne podejście do kursanta.
            </p>
            <p>
              Wiek, rozmiar i płeć nie ma znaczenia - u nas poczujesz się jak w
              domu!
            </p>
          </article>
          <a
            href="https://app.fitssey.com/podsufitem/frontoffice"
            className={styles.bookBtn}>
            Zapisy na zajęcia
          </a>
        </div>
        <section className={styles.equipment__container}>
          <div className={styles.equipment__content}>
            <div className={styles.equipment__item}>
              <span className={styles.fontAwesome}>
                <i className="fas fa-check fa-7x"></i>
              </span>
              <p className={styles.equipment__desc}>
                Specjalizujemy się w zajęciach
                <strong className={styles.bold}>
                  {' '}
                  pole dance i aerial hoop
                </strong>
                , ale w naszej ofercie znajdziesz również szereg zajęć
                uzupełniających, takich jak:
                <ul className={styles.equipment__list}>
                  <li>Pole Choreo</li>
                  <li>Acro Pole</li>
                  <li>Spinning Pole</li>
                  <li>Stretching</li>
                  <li> Kalistenika</li>
                  <li>Joga Kręgosłupa</li>
                </ul>
              </p>
            </div>
            <div className={styles.equipment__item}>
              <span className={styles.fontAwesome}>
                <i className="fas fa-check fa-7x"></i>
              </span>
              <p className={styles.equipment__desc}>
                Posiadamy sprzęt najwyższej&nbsp;jakości:
                <p>
                  Rurki SunPole o wysokości 4 m: chromowo-niklowe, malowane
                  proszkowo i mosiężne,
                </p>
                <p>Koła oraz osprzęt aerial hoop firmy Flying Rose.</p>
              </p>
            </div>
            <div className={styles.equipment__item}>
              <span className={styles.fontAwesome}>
                <i className="fas fa-check fa-7x"></i>
              </span>
              <p className={styles.equipment__desc}>
                Bezpieczeństwo zapewniają certyfikowane materace asekuracyjne o
                wielkości 160cmx160cm i grubości 15 cm.
              </p>
            </div>
          </div>
        </section>
        <section className={styles.contact}>
          <div className={`${styles.contact__column} ${styles.contact__tel}`}>
            <span className={styles.contact__column_title}>
              Skontaktuj się z nami
            </span>
            <div className={styles.contact__column_content}>
              <address>
                <ul className={styles.contact__tel_list}>
                  <li className={styles.contact__tel_listItem}>
                    <a href="tel:+48799079809" aria-hidden="true">
                      <span className={styles.fontAwesome}>
                        <i className="fas fa-phone-alt fa-3x"></i>
                      </span>
                    </a>
                    <a href="tel:+48799079809">+48 799 079 809</a>
                  </li>
                  <li className={styles.contact__tel_listItem}>
                    <a
                      href="mailto:zapisy.podsufitem@gmail.com"
                      aria-hidden="true">
                      <span className={styles.fontAwesome}>
                        <i className="fas fa-envelope fa-3x"></i>
                      </span>
                    </a>
                    <a href="mailto:zapisy.podsufitem@gmail.com">
                      zapisy.podsufitem@gmail.com
                    </a>
                  </li>
                </ul>
              </address>
            </div>
          </div>

          <div
            className={`${styles.contact__column} ${styles.contact__social}`}>
            <span className={styles.contact__column_title}>
              Znajdź nas w sieci
            </span>
            <div className={styles.contact__column_content}>
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
            </div>
          </div>

          <div
            className={`${styles.contact__column} ${styles.contact__address}`}>
            <span className={styles.contact__column_title}>Odwiedź nas</span>
            <div className={styles.contact__column_content}>
              <a
                href="https://goo.gl/maps/vRQJRCQE7JP4J6CWA"
                target="_blank"
                className={styles.fontAwesome}>
                <i
                  className="fas fa-map-marker-alt fa-3x"
                  alt="Google Maps Address Link"></i>
              </a>
              <address>
                <p>Skoczylasa 10/12 lok. 81</p>
                <p>03-465 Warszawa</p>
              </address>
            </div>
          </div>
        </section>
        <InfoBox title="Zajęcia" id="zajecia">
          <Classes />
        </InfoBox>
        <InfoBox title="Instruktorki" id="instruktorki">
          <Teachers />
        </InfoBox>
        <InfoBox title="Cennik" id="cennik" prices>
          <Prices />
        </InfoBox>
      </main>
      <Footer />
    </>
  );
};

export default Home;
