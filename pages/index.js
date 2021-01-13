import { useEffect, useState } from 'react';
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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatum deserunt maxime quis consectetur minus architecto!
                Officia voluptatum, autem, fugit, beatae dolorem repellat
                commodi repudiandae libero culpa nisi quasi nam amet magnam?
                Mollitia beatae voluptates, porro impedit ullam ipsum culpa ad
                illo labore cupiditate tempore incidunt, repellendus sapiente,
                laudantium nisi inventore consequuntur ducimus perferendis!
                Mollitia aliquid velit, a dolorum deserunt impedit suscipit nisi
                praesentium sequi. Qui aut pariatur cumque accusamus consequatur
                ratione ullam aliquid, doloribus soluta inventore rem vero,
                tempora saepe asperiores odio adipisci nisi. Beatae sunt
                cupiditate ipsa! Necessitatibus dicta consequuntur nam soluta
                voluptatum pariatur laboriosam. Facilis autem eum recusandae.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
                voluptate deserunt eligendi ab, deleniti atque ex natus
                molestiae eveniet commodi eum quae nam explicabo, numquam illum
                repellat nihil modi unde. Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Iusto ut eaque doloribus fugiat
                reprehenderit quisquam sunt nesciunt voluptatem animi
                accusantium libero hic, eius eum temporibus similique repellat
                expedita. Iste voluptates perspiciatis, voluptas explicabo quas
                labore saepe quis eaque molestias omnis, officia deleniti
                eligendi unde. Aperiam, quia nisi. Eligendi reprehenderit
                quisquam aliquid ipsa autem voluptatum et repellat
                exercitationem officiis consequatur distinctio eius tempore ex
                magni doloribus quaerat aperiam harum maiores, odio
                consequuntur! Officia eum dolorem iure aut, architecto
                voluptatum, hic ratione repellat placeat adipisci quibusdam
                quam, et esse. Temporibus totam cumque expedita quisquam laborum
                perspiciatis libero fugit, praesentium illum. Numquam, minus.
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
                      <a href="tel:+48799079809">+48 799 079 809</a>
                    </li>
                    <li className={styles.contact__tel_listItem}>
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
                Facebook i Instagram
              </div>
            </div>

            <div
              className={`${styles.contact__column} ${styles.contact__address}`}>
              <span className={styles.contact__column_title}>Odwiedź nas</span>
              <div className={styles.contact__column_content}>
                <address>
                  <p>Skoczylasa 10/12 lok. 81</p>
                  <p>03-465 Warszawa</p>
                </address>
              </div>
            </div>
          </section>
        </main>

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
