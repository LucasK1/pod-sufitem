export default function Home() {
  return (
    <>
      <div className="main">
        <main>
          <article className="main__text">
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
            <div className="main__booking-btn">
              <p>Zapisy na zajęcia</p>
              <p>-kliknij TU-</p>
            </div>
          </a>
        </main>
        <footer className="main__footer">
          <div className="main__footer-item main__footer-contact">
            <span className="main__footer-item--title">
              Skontaktuj się z nami
            </span>
            <div className="main__footer-item--content"></div>
          </div>
          <div className="main__footer-item main__footer-social">
            <span className="main__footer-item--title">Znajdź nas w sieci</span>
            <div className="main__footer-item--content"></div>
          </div>
          <div className="main__footer-item main__footer-address">
            <span className="main__footer-item--title">Odwiedź nas</span>
            <div className="main__footer-item--content"></div>
          </div>
        </footer>
      </div>
      <style jsx>{`
        main {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .main {
          display: flex;
          flex-direction: column;
          align-items: center;
          &__text {
            text-align: center;
          }
          &__booking-btn {
            text-align: center;
            width: 200px;
            color: #fff;
            font-size: 18px;
            padding: 20px;
            border-radius: 20px;
            background-color: #000;
            & > p {
              line-height: 15px;
            }
          }
        }

        .main__footer {
          width: 100%;
          max-width: 1200px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          position: fixed;
          bottom: 0;

          &-social {
            & > .main__footer-item--content {
              border-right: 1px solid #000;
              border-left: 1px solid #000;
            }
          }

          &-item--title {
            font-size: 18px;
            line-height: 28px;
            font-weight: 500;
          }
          &-item--content {
            height: 100px;
          }
        }
      `}</style>
    </>
  );
}
