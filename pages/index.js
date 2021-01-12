import styles from '../styles/landingPage.module.scss';

const Home = () => {
  const classesArray = [
    'Pole dance',
    'Acro Pole',
    'Aerial Hoop',
    'Joga kręgosłupa',
    'Stretching',
    'Trening mobilności',
    'Pilates',
  ];

  const classesSelectionBtns = classesArray.map((item) => {
    return <button className={styles.classes__selectionBtn}>{item}</button>;
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
        <section className={styles.classes}>
          <aside className={styles.classes__selection}>
            {classesSelectionBtns}
            {/* <button className={styles.classes__selectionBtn}>Pole dance</button>
            <button className={styles.classes__selectionBtn}>Acro Pole</button>
            <button className={styles.classes__selectionBtn}>
              Aerial Hoop
            </button>
            <button className={styles.classes__selectionBtn}>
              Joga kręgosłupa
            </button>
            <button className={styles.classes__selectionBtn}>Stretching</button>
            <button className={styles.classes__selectionBtn}>
              Trening mobilności
            </button>
            <button className={styles.classes__selectionBtn}>Pilates</button> */}
          </aside>
          <div className={styles.classes__content}></div>
        </section>
      </div>
      {/* <style jsx>{`
        @import './styles/variables';

        main {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .main {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .lead__text {
          text-align: center;
        }
        .lead__booking-btn {
          text-align: center;
          width: 200px;
          color: #fff;
          font-size: 18px;
          margin-top: 100px;
          padding: 20px;
          border-radius: 20px;
          background-color: #000;
          & > p {
            line-height: 15px;
          }
        }

        .contact {
          width: 100%;
          max-width: 1200px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          margin-top: 50px;

          &-social {
            & > .contact__item--content {
              border-right: 1px solid #000;
              border-left: 1px solid #000;
            }
          }

          &__item--title {
            font-size: 18px;
            line-height: 28px;
            font-weight: 500;
          }
          &__item--content {
            height: 100px;
          }
        }

        .classes {
          margin-top: 50px;
          display: grid;
          grid-template-columns: 1fr 3fr;
          gap: 22px;
          height: 540px;
          &__selection {
            border-radius: 20px;
            padding: 30px;
            background-color: $content-background;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: left;
            text-align: left;

            &-btn {
              line-height: 38px;
              font-size: 24px;
              font-weight: 500;
              text-align: left;
              border-radius: 10px;
              padding: 10px;
              transition: background-color 100ms linear;
              &:hover {
                cursor: pointer;
                background-color: #fff;
              }
            }
          }
          &__content {
            border-radius: 20px;
            background-color: $content-background;
          }
        }
      `}</style> */}
    </>
  );
};

export default Home;
