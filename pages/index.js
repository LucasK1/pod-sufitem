export default function Home() {
  return (
    <>
      <article className="main__text">
        <h1>Hohooo ale szkoła</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
          deserunt maxime quis consectetur minus architecto! Officia voluptatum,
          autem, fugit, beatae dolorem repellat commodi repudiandae libero culpa
          nisi quasi nam amet magnam? Mollitia beatae voluptates, porro impedit
          ullam ipsum culpa ad illo labore cupiditate tempore incidunt,
          repellendus sapiente, laudantium nisi inventore consequuntur ducimus
          perferendis! Mollitia aliquid velit, a dolorum deserunt impedit
          suscipit nisi praesentium sequi. Qui aut pariatur cumque accusamus
          consequatur ratione ullam aliquid, doloribus soluta inventore rem
          vero, tempora saepe asperiores odio adipisci nisi. Beatae sunt
          cupiditate ipsa! Necessitatibus dicta consequuntur nam soluta
          voluptatum pariatur laboriosam. Facilis autem eum recusandae.
        </p>
      </article>
      <a href="#">
        <div className="main__booking-btn">
          <p>Zapisy na zajęcia</p>
          <p>-kliknij TU-</p>
        </div>
      </a>
      <style jsx>{`
        .main__text {
          text-align: center;
        }
        .main__booking-btn {
          align-text: center;
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
      `}</style>
    </>
  );
}
