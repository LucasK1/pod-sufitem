import Classes from '@/components/classes/classes';
import InfoBox from '@/components/info-box/info-box';
import Prices from '@/components/prices/prices';
import Teachers from '@/components/teachers/teachers';
import styles from '@/styles/landing-page.module.scss';
import { HiddenOnDesktop, HiddenOnMobile } from 'components/helpers/Hidden';
import Head from 'next/head';
import {
  FaCheck,
  FaEnvelope,
  FaFacebookSquare,
  FaInstagramSquare,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from 'react-icons/fa';

const Home = () => {
  return (
    <>
      <Head>
        <title>pod sufitem // Szkoła akrobatyki powietrznej</title>
      </Head>
      <div />
      <main id="main-content">
        <div className={styles.outerWrapper}>
          <HiddenOnDesktop>
            <img
              src="/static/images/bg.png"
              alt=""
              width="1536"
              height="1663"
              className={styles.heroImage}
            />
          </HiddenOnDesktop>
          <HiddenOnMobile>
            <img
              src="/static/gallery/1.jpg"
              alt=""
              width="1536"
              height="1663"
              className={styles.heroImage}
            />
          </HiddenOnMobile>
          <div className={styles.innerWrapper}>
            <article className={styles.lead__text}>
              <p style={{ maxWidth: '1000px', margin: '0 20px' }}>
                Pod Sufitem to studio akrobatyki powietrznej, zlokalizowane w
                Warszawie, w samym centrum Pragi Północ. <br />
                Założycielką studia jest Anna Łukasiak - mistrzyni Polski Pole
                Sport Professional POSA 2019, mistrzyni Polski i Świata Aerial
                Hoop Amateur POSA&nbsp;2019.
              </p>
            </article>
            <a
              href="https://app.fitssey.com/podsufitem/frontoffice"
              className={styles.bookBtn}
            >
              Zapisy na zajęcia
            </a>
          </div>
        </div>

        <div className={styles.container}>
          <section className={styles.equipment__container}>
            <div className={styles.equipment__content}>
              <div className={styles.equipment__item}>
                <span className={styles.fontAwesome}>
                  <FaCheck className={styles.checkIcons} />
                </span>
                <p className={styles.equipment__desc}>
                  Specjalizujemy się w zajęciach
                  <strong className={styles.bold}>
                    {' '}
                    pole dance i aerial hoop
                  </strong>
                  , ale w naszej ofercie znajdziesz również szereg zajęć
                  uzupełniających, takich jak:
                </p>
                <ul className={styles.equipment__list}>
                  <li>Pole Choreo</li>
                  <li>Exotic Pole</li>
                  <li>Aerial Hoop</li>
                  <li>Stretching</li>
                  <li>Conditioning</li>
                  <li>Joga Kręgosłupa</li>
                </ul>
              </div>
              <div className={styles.equipment__item}>
                <span className={styles.fontAwesome}>
                  <FaCheck className={styles.checkIcons} />
                </span>
                <section className={styles.equipment__desc}>
                  Posiadamy sprzęt najwyższej&nbsp;jakości.
                  <p>
                    Rurki SunPole o wysokości 4 m chromowo-niklowe, malowane
                    proszkowo i mosiężne.
                  </p>
                  <p>Koła oraz osprzęt aerial hoop firmy Flying Rose.</p>
                  <p>
                    Bezpieczeństwo zapewniają certyfikowane materace
                    asekuracyjne o wielkości 160cmx160cm i grubości 15 cm.
                  </p>
                </section>
              </div>
              <div className={styles.equipment__item}>
                <span className={styles.fontAwesome}>
                  <FaCheck className={styles.checkIcons} />
                </span>
                <section className={styles.equipment__desc}>
                  Na pierwszym miejscu stawiamy jakość zajęć oraz komfort
                  uczestników, dlatego pracujemy w kameralnych grupach
                  i&nbsp;gwarantujemy indywidualne podejście do kursanta.
                  <p>
                    Wiek, rozmiar i płeć nie ma znaczenia — u&nbsp;nas poczujesz
                    się jak w domu!
                  </p>
                </section>
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
                      <a href="tel:+48799079809" className={styles.fontAwesome}>
                        <FaPhoneAlt className={styles.icons} />
                      </a>
                      <a href="tel:+48799079809">+48 799 079 809</a>
                    </li>
                    <li className={styles.contact__tel_listItem}>
                      <a
                        href="mailto:info@studiopodsufitem.pl"
                        className={styles.fontAwesome}
                      >
                        <FaEnvelope className={styles.icons} />
                      </a>
                      <a href="mailto:info@studiopodsufitem.pl">
                        info@studiopodsufitem.pl
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
                <a
                  href="https://www.facebook.com/podsufitem"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.fontAwesome}
                  aria-label="Facebook link"
                >
                  <FaFacebookSquare className={styles.icons} />
                </a>
                <a
                  href="https://www.instagram.com/pod.sufitem/"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.fontAwesome}
                  aria-label="Instagram link"
                >
                  <FaInstagramSquare className={styles.icons} />
                </a>
              </div>
            </div>

            <div
              className={`${styles.contact__column} ${styles.contact__address}`}
            >
              <span className={styles.contact__column_title}>Odwiedź nas</span>
              <div className={styles.contact__column_content}>
                <a
                  href="https://goo.gl/maps/vRQJRCQE7JP4J6CWA"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.fontAwesome}
                  aria-label="Google Maps Address Link"
                >
                  <FaMapMarkerAlt className={styles.icons} />
                </a>
                <address>
                  <p>Zmiana lokalizacji</p>
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
        </div>
      </main>
    </>
  );
};

export default Home;
