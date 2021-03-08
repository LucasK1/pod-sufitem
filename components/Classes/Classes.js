import React from 'react';

import styles from './Classes.module.scss';

const Classes = () => {
  const classes = [
    {
      id: 'poleDance',
      name: 'Pole Dance',
      desc: (
        <p>
          Zajęcia łączące w sobie elementy gimnastyki, akrobatyki i tańca przy
          użyciu drążka pionowego. Połączenie siły, gracji, gibkości i dynamiki.
          Na tych zajęciach nie tylko nauczysz się obrotów, wspinaczki i
          kombinacji figur, ale także wyrzeźbisz sylwetkę, zyskasz pewność
          siebie i poprawisz samopoczucie. Zajęcia odbywają się na różnych
          poziomach zaawansowania oraz w kameralnych grupach, 1 osoba do rurki.
        </p>
      ),
    },
    {
      id: 'poleChoreo',
      name: 'Pole Choreo',
      desc: (
        <p>
          Zajęcia z nauką choreografii przy użyciu pionowego drążka, z
          elementami floorwork oraz tańca współczesnego. Polecane dla wszystkich
          osób trenujących pole dance, które chciałyby ćwiczyć płynność,
          czystość ruchu i pamięć ruchową. Zajęcia przeznaczone dla osób, które
          mają opanowane podstawy pole dance.
        </p>
      ),
    },
    {
      id: 'aerialHoop',
      name: 'Aerial Hoop',
      desc: (
        <p>
          Zajęcia gimnastyczno-akrobatyczne na kole cyrkowym, na których
          nauczysz się wykonywać efektowne triki w powietrzu. Dzięki temu, że
          koło pracuje w różnych płaszczyznach ruchu, zaangażowane jest całę
          ciało, a kombinacje są bardzo widowiskowe.
        </p>
      ),
    },
    {
      id: 'spineYoga',
      name: 'Joga kręgosłupa',
      desc: (
        <p>
          Zajęcia prozdrowotne, zawierające zarówno ćwiczenia wzmacniające, jak
          i elementy mobilności i stabilności. Pomagają poprawić postawę ciała
          oraz wyeliminować nieprawidłowe nawyki ruchowe i dolegliwości bólowe
          narządu ruchu. Niwelują skutki siedzącego trybu życia. Ćwiczenia
          wykonywane są wolno i dokładnie, w połączeniu z oddechem oraz dużym
          naciskiem na poprawną technikę.
        </p>
      ),
    },
    {
      id: 'stretching',
      name: 'Stretching',
      desc: (
        <p>
          Zajęcia wzmacniająco-rozciągające dla wszystkich, nie tylko
          trenujących akrobatykę powietrzną. Na tych zajęciach nauczysz się
          aktywnie pracować nad zwiększeniem ruchomości stawów, przygotujesz się
          do figur gimnastycznych, takich jak szpagat wykroczno-zakroczny,
          szpagat poprzeczny, mostek, cheststand, poprawisz postawę ciała oraz
          świadomość ruchu. Poznasz różnorodne techniki rozciągania, wysmuklisz
          sylwetkę oraz popracujesz nad pięknymi liniami i wykończeniem ruchu.
        </p>
      ),
    },
    {
      id: 'strechingRoll',
      name: 'Stretching z rolowaniem',
      desc: (
        <p>
          Zajęcia służące przede wszystkim rozluźnieniu i regeneracji organizmu.
          Pierwsza część zajęć poświęcona jest rolowaniu, czyli automasażowi z
          wykorzystaniem różnej wielkości rolek i piłeczek. W drugiej części
          pojawia się stretching, głównie pasywny i relaksacyjny. Dzięki takiej
          kombinacji poczujesz ulgę po całym tygodniu pracy i treningów.
        </p>
      ),
    },
    {
      id: 'pilates',
      name: 'Pilates',
      desc: (
        <p>
          Pilates stanowi jedną z najbezpieczniejszych form aktywności, dlatego
          zajęćia przeznaczone są dla wszystkich, Trening oparty jest na
          aktywizacji mięśni głębokich, stabilizujących, w połączeniu z
          ćwiczeniami oddechowymi. W szczególności wzmocnieniu ulegają mięśnie
          pleców i brzucha. Efektem jest szczuplejsza, wyrzeźbiona sylwetka,
          lepsza postawa ciała, eliminacja bólu kręgosłupa, mniejsza podatność
          na kontuzje.
        </p>
      ),
    },
    {
      id: 'acropole',
      name: 'Acro Pole',
      desc: (
        <p>
          Pilates stanowi jedną z najbezpieczniejszych form aktywności, dlatego
          zajęćia przeznaczone są dla wszystkich, Trening oparty jest na
          aktywizacji mięśni głębokich, stabilizujących, w połączeniu z
          ćwiczeniami oddechowymi. W szczególności wzmocnieniu ulegają mięśnie
          pleców i brzucha. Efektem jest szczuplejsza, wyrzeźbiona sylwetka,
          lepsza postawa ciała, eliminacja bólu kręgosłupa, mniejsza podatność
          na kontuzje.
        </p>
      ),
    },
  ];

  const classesData = classes.map(({ name, desc }) => (
    // <tr className={styles.classes__tableRow}>
    //   <td className={styles.classes__tableName}>{name}</td>
    //   <td className={styles.classes__tableDesc}>{desc}</td>
    // </tr>
    <section className={styles.classes__singleClass}>
      <h3>{name}</h3>
      <p>{desc}</p>
    </section>
  ));

  return (
    <div className={styles.classes__content}>
      <article className={styles.classes}>
        {/* <table className={styles.classes__table}>{tableData}</table> */}
        {classesData}
      </article>
    </div>
  );
};

export default Classes;
