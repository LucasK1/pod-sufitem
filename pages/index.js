import { useEffect, useState } from 'react';
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
        key={item}>
        {item}
      </a>
    );
  });

  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <article className={styles.lead__text}>
            <h1 className={styles.lead__title}>Hohooo ale szkoła</h1>
            <div className={styles.lead__content}>
              <p>
                Doggo ipsum heckin good boys borking doggo shibe borking doggo
                blop sub woofer, such treat fluffer ruff corgo wow very biscit
                sub woofer, woofer very hand that feed shibe doggorino much ruin
                diet. Noodle horse the neighborhood pupper borking doggo most
                angery pupper I have ever seen, very good spot long doggo. boof
                very taste wow. Boof mlem wow such tempt doggo ur givin me a
                spook, heckin angery woofer wow such tempt mlem big ol pupper,
                extremely cuuuuuute clouds puggo. Such treat doge fluffer most
                angery pupper I have ever seen borkf many pats long woofer, big
                ol much ruin diet what a nice floof noodle horse yapper shoob
                smol borking doggo with a long snoot for pats, super chub
                shoober doggorino wrinkler shooberino. Very hand that feed shibe
                extremely cuuuuuute ruff smol borking doggo with a long snoot
                for pats shoober, pats ruff borkf. Thicc h*ck sub woofer porgo
                big ol, length boy puggo. Yapper wrinkler puggorino puggo much
                ruin diet porgo wow such tempt, shoober h*ck much ruin diet
                super chub thicc.
              </p>
              <p>
                Shibe h*ck he made many woofs doge length boy, porgo floofs
                shoob. length boy adorable doggo. Super chub waggy wags blop
                h*ck length boy long doggo, aqua doggo very jealous pupper
                maximum borkdrive pupper. Pupper borkdrive most angery pupper I
                have ever seen borkdrive, heckin angery woofer boofers. The
                neighborhood pupper porgo most angery pupper I have ever seen
                lotsa pats big ol h*ck, borking doggo wow very biscit doggorino
                I am bekom fat. heck many pats wow very biscit. Borkf super chub
                wow such tempt, ruff. Stop it fren thicc you are doin me a
                concern shibe, blop puggo. Heck length boy extremely cuuuuuute
                boofers tungg, adorable doggo smol clouds stop it fren, I am
                bekom fat borkf boofers. Waggy wags woofer tungg such treat
                h*ck, ur givin me a spook you are doing me the shock woofer wow
                such tempt lotsa pats, heck bork heck.
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
              className={`${styles.contact__column} ${styles.contact__social}`}>
              <span className={styles.contact__column_title}>
                Znajdź nas w sieci
              </span>
              <div className={styles.contact__column_content}>
                <a href="https://www.facebook.com/podsufitem" target="_blank">
                  <i className="fab fa-facebook-square"></i>
                </a>
                <a
                  href="https://www.instagram.com/pod.sufitem/"
                  target="_blank">
                  <i className="fab fa-instagram-square"></i>
                </a>
              </div>
            </div>

            <div
              className={`${styles.contact__column} ${styles.contact__address}`}>
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
        <InfoBox title="Cennik" id="cennik">
          Dupachej
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
