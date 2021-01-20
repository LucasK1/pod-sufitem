import { useState } from 'react';
import Image from 'next/image';

import Prices from '../components/Cennik/Prices';
import InfoBox from '../components/InfoBox/InfoBox';

import styles from '../styles/landingPage.module.scss';

const Home = () => {
  const [activeClassDesc, setActiveClassDesc] = useState('Pole Dance');

  const classesObj = {
    'Pole Dance': <p>Tańcowanie na polu</p>,
    'Acro Pole': <p>Duże pole</p>,
    'Aerial Hoop': <p>Skaakanie powietrzne</p>,
    'Joga kręgosłupa': <p>Wyrównanie ćakramów</p>,
    Stretching: <p>Gumkowanie majtek</p>,
    'Trening mobilności': <p>Kategoria B</p>,
    Pilates: <p>Sokrates</p>,
  };

  const classClickHandler = (e, classType) => {
    setActiveClassDesc(classType);
  };

  const classesSelectionBtns = Object.keys(classesObj).map((item) => {
    return (
      <a
        className={`${styles.classes__selectionBtn} ${
          activeClassDesc === item ? styles.classes__selectionBtn_isActive : ''
        }`}
        onClick={(e) => classClickHandler(e, item)}
        key={item}
      >
        {item}
      </a>
    );
  });

  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <article className={styles.lead__text}>
            <h1 className={styles.lead__title}>
              Szkoła akrobatyki powietrznej
            </h1>
            <div className={styles.lead__content}>
              <Image
                src="/static/images/pod-sufitem.jpeg"
                alt="pod sufitem"
                width=""
                height=""
              />
              <p>
                Pod Sufitem to studio akrobatyki powietrznej, zlokalizowane w
                Warszawie, w samym centrum Pragi Północ. Założycielką studia
                jest Anna Łukasiak - mistrzyni Polski Pole Sport Professional
                POSA 2019, mistrzyni Polski i Świata Aerial Hoop Amateur POSA
                2019. Specjalizujemy się w zajęciach pole dance i aerial hoop,
                ale w naszej ofercie znajdziesz również szereg zajęć
                uzupełniających, takich jak: pole choreo, acro pole, spinning
                pole, stretching, kalistenika, joga kręgosłupa. Posiadamy sprzęt
                najwyższej jakości: rurki SunPole o wysokości 4 m:
                chromowo-niklowe, malowane proszkowo i mosiężne, koła oraz
                osprzęt aerial hoop firmy Flying Rose. Bezpieczeństwo zapewniają
                certyfikowane materace asekuracyjne o wielkości 160cmx160cm i
                grubości 15 cm. Zapewniamy wszystkie przybory niezbędne do
                pełnowartościowego treningu: maty, gumy oporowe, ciężarki, rolki
                Blackroll, yoga wheel. Na pierwszym miejscu stawiamy jakość
                zajęć oraz komfort uczestników, dlatego pracujemy w kameralnych
                grupach i gwarantujemy indywidualne podejście do kursanta. Wiek,
                rozmiar i płeć nie ma znaczenia - u nas poczujesz się jak w
                domu!
              </p>
            </div>
          </article>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
            <div className={styles.lead__bookingBtn}>
              <p>Zapisy na zajęcia</p>
              <p>-kliknij TU-</p>
            </div>
          </a>
          <section className={styles.contact}>
            <div className={`${styles.contact__column} ${styles.contact__tel}`}>
              <span className={styles.contact__column_title}>
                Skontaktuj się z nami
              </span>
              <div className={styles.contact__column_content}>
                <address>
                  <ul className={styles.contact__tel_list}>
                    <li className={styles.contact__tel_listItem}>
                      <a href="tel:+48799079809">
                        <i className="fas fa-phone-alt"></i>
                      </a>
                      <a href="tel:+48799079809">+48 799 079 809</a>
                    </li>
                    <li className={styles.contact__tel_listItem}>
                      <a href="mailto:zapisy.podsufitem@gmail.com">
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
              className={`${styles.contact__column} ${styles.contact__social}`}
            >
              <span className={styles.contact__column_title}>
                Znajdź nas w sieci
              </span>
              <div className={styles.contact__column_content}>
                <a href="https://www.facebook.com/podsufitem" target="_blank">
                  <i className="fab fa-facebook-square"></i>
                </a>
                <a
                  href="https://www.instagram.com/pod.sufitem/"
                  target="_blank"
                >
                  <i className="fab fa-instagram-square"></i>
                </a>
              </div>
            </div>

            <div
              className={`${styles.contact__column} ${styles.contact__address}`}
            >
              <span className={styles.contact__column_title}>Odwiedź nas</span>
              <div className={styles.contact__column_content}>
                <a href="https://goo.gl/maps/vRQJRCQE7JP4J6CWA" target="_blank">
                  <i className="fas fa-map-marker-alt"></i>
                </a>
                <address>
                  <p>Skoczylasa 10/12 lok. 81</p>
                  <p>03-465 Warszawa</p>
                </address>
              </div>
            </div>
          </section>
        </main>
        <div className={styles.classes__container}>
          <div className={styles.scrollHelper} id="zajecia"></div>
          <section className={styles.classes}>
            <aside className={styles.classes__selection}>
              {classesSelectionBtns}
            </aside>
            <div className={styles.classes__content}>
              {classesObj[activeClassDesc]}
            </div>
          </section>
        </div>
        <InfoBox title="Instruktorki" id="instruktorki">
          Dupachej
        </InfoBox>
        <InfoBox title="Cennik" id="cennik" black>
          <Prices />
        </InfoBox>
      </div>
      <style jsx>{`
        @import './styles/variables';
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
      `}</style>
    </>
  );
};

export default Home;
