import { useEffect, useState } from 'react';
import styles from '../styles/landingPage.module.scss';

const Home = () => {
  const [activeClassDesc, setActiveClassDesc] = useState('Pole Dance');

  const classesObj = {
    'Pole Dance': <p>Tańcowanie na polu</p>,
    'Acro Pole': 'Duże pole',
    'Aerial Hoop': 'Skaakanie powietrzne',
    'Joga kręgosłupa': 'Wyrównanie ćakramów',
    Stretching: 'Gumkowanie majtek',
    'Trening mobilności': 'Kategoria B',
    Pilates: 'Sokrates',
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
        onClick={(e) => classClickHandler(e, item)}>
        {item}
      </a>
    );
  });

  return (
    <>
      <div className={styles.main}>
        <main className={styles.lead}>
          <article className={styles.lead__text}>
            <h1>Hohooo ale szkoła</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatum deserunt maxime quis consectetur minus architecto!
              Officia voluptatum, autem, fugit, beatae dolorem repellat commodi
              repudiandae libero culpa nisi quasi nam amet magnam? Mollitia
              beatae voluptates, porro impedit ullam ipsum culpa ad illo labore
              cupiditate tempore incidunt, repellendus sapiente, laudantium nisi
              inventore consequuntur ducimus perferendis! Mollitia aliquid
              velit, a dolorum deserunt impedit suscipit nisi praesentium sequi.
              Qui aut pariatur cumque accusamus consequatur ratione ullam
              aliquid, doloribus soluta inventore rem vero, tempora saepe
              asperiores odio adipisci nisi. Beatae sunt cupiditate ipsa!
              Necessitatibus dicta consequuntur nam soluta voluptatum pariatur
              laboriosam. Facilis autem eum recusandae.
            </p>
          </article>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
            <div className={styles.lead__bookingBtn}>
              <p>Zapisy na zajęcia</p>
              <p>-kliknij TU-</p>
            </div>
          </a>
        </main>
        <section className={styles.contact}>
          <div className={`${styles.contact__item} ${styles.contact_phone}`}>
            <span className={styles.contact__item_title}>
              Skontaktuj się z nami
            </span>
            <div className={styles.contact__item_content}></div>
          </div>
          <div className={`${styles.contact__item} ${styles.contact_social}`}>
            <span className={styles.contact__item_title}>
              Znajdź nas w sieci
            </span>
            <div className={styles.contact__item_content}></div>
          </div>
          <div className={`${styles.contact__item} ${styles.contact_address}`}>
            <span className={styles.contact__item_title}>Odwiedź nas</span>
            <div className={styles.contact__item_content}></div>
          </div>
        </section>
        <section className={styles.classes} id="classes">
          <aside className={styles.classes__selection}>
            {classesSelectionBtns}
          </aside>
          <div className={styles.classes__content}>
            {classesObj[activeClassDesc]}
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
