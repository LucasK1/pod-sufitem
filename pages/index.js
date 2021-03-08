import React from 'react';
import Head from 'next/head';

import Prices from '@/components/Prices/Prices';
import InfoBox from '@/components/InfoBox/InfoBox';
import Teachers from '@/components/Teachers/Teachers';
import Classes from '@/components/Classes/Classes';

import styles from '@/styles/landingPage.module.scss';

const Home = () => {
  return (
    <>
      <Head>
        <title>pod sufitem // Szkoła akrobatyki powietrznej</title>
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <article className={styles.lead__text}>
            <h1 className={styles.lead__title}>
              Szkoła akrobatyki powietrznej
            </h1>
            <div className={styles.lead__content_container}>
              <p className={styles.lead__content}>
                Pod Sufitem to studio akrobatyki powietrznej, zlokalizowane w
                Warszawie, w samym centrum Pragi Północ.
                <br />
                Założycielką studia jest Anna Łukasiak - mistrzyni Polski Pole
                Sport Professional POSA 2019, mistrzyni Polski i Świata Aerial
                Hoop Amateur POSA 2019.
                <br />
                Na pierwszym miejscu stawiamy jakość zajęć oraz komfort
                uczestników, dlatego pracujemy w kameralnych grupach i
                gwarantujemy indywidualne podejście do kursanta.
                <br />
                <strong className={styles.bold}>
                  Wiek, rozmiar i płeć nie ma znaczenia - u nas poczujesz się
                  jak w domu!
                </strong>
              </p>
            </div>
          </article>
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
                        <i className="fas fa-phone-alt"></i>
                      </a>
                      <a href="tel:+48799079809">+48 799 079 809</a>
                    </li>
                    <li className={styles.contact__tel_listItem}>
                      <a
                        href="mailto:zapisy.podsufitem@gmail.com"
                        aria-hidden="true">
                        <i className="fas fa-envelope"></i>
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
                  aria-label="Facebook link">
                  <i className="fab fa-facebook-square"></i>
                </a>
                <a
                  href="https://www.instagram.com/pod.sufitem/"
                  target="_blank"
                  aria-label="Instagram link">
                  <i className="fab fa-instagram-square"></i>
                </a>
              </div>
            </div>

            <div
              className={`${styles.contact__column} ${styles.contact__address}`}>
              <span className={styles.contact__column_title}>Odwiedź nas</span>
              <div className={styles.contact__column_content}>
                <a href="https://goo.gl/maps/vRQJRCQE7JP4J6CWA" target="_blank">
                  <i
                    className="fas fa-map-marker-alt"
                    alt="Google Maps Address Link"></i>
                </a>
                <address>
                  <p>Skoczylasa 10/12 lok. 81</p>
                  <p>03-465 Warszawa</p>
                </address>
              </div>
            </div>
          </section>
        </main>
        <div className={styles.equipment__container}>
          <div className={styles.equipment__content}>
            <div className={styles.equipment__item}>
              <i className="fas fa-check"></i>
              <p className={styles.equipment__desc}>
                Specjalizujemy się w zajęciach
                <strong className={styles.bold}>
                  pole dance i aerial hoop,{' '}
                </strong>
                ale w naszej ofercie znajdziesz również szereg zajęć
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
              <i className="fas fa-check"></i>
              <p className={styles.equipment__desc}>
                Posiadamy sprzęt najwyższej jakości:
                <ul>
                  <li>
                    Rurki SunPole o wysokości 4 m: chromowo-niklowe, malowane
                    proszkowo i mosiężne,
                  </li>
                  <li>Koła oraz osprzęt aerial hoop firmy Flying Rose.</li>
                </ul>
              </p>
            </div>
            <div className={styles.equipment__item}>
              <i className="fas fa-check"></i>
              <p className={styles.equipment__desc}>
                Bezpieczeństwo zapewniają certyfikowane materace asekuracyjne o
                wielkości 160cmx160cm i grubości 15 cm.
              </p>
            </div>
          </div>
        </div>
        <InfoBox title="Zajęcia" id="zajecia">
          <Classes />
        </InfoBox>
        <InfoBox title="Instruktorki" id="instruktorki">
          <Teachers />
        </InfoBox>
        <InfoBox title="Cennik" id="cennik" prices>
          <Prices />
        </InfoBox>
      </div>

      <style jsx>{`
        @import './styles/variables';
        @import './styles/mediaQuery';
        /* Styling the fontawesome icons */
        .fas,
        .fab {
          color: $font-secondary;
          transform: scale(2.8);
          &:hover {
            color: $font-secondary-hover;
          }
          &:active {
            color: $font-secondary-active;
          }
        }
        .fa-check {
          transform: scale(5);
        }
        @include for-phone-only {
          .fa-check {
            padding: 0;
          }
        }
      `}</style>
    </>
  );
};

export default Home;
