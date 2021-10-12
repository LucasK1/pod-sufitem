import levels from 'components/classes/levels.json';
import Modal from 'components/UI/modal/modal';
import { useState } from 'react';
import styles from './classes.module.scss';

const Classes = () => {
  const [isVisible, setIsVisible] = useState(false);

  const openModal = () => {
    setIsVisible(true);
  };
  const closeModal = () => {
    setIsVisible(false);
  };
  const classes = [
    {
      id: 'poleDance',
      name: 'Pole Dance',
      desc: (
        <>
          <p>
            Zajęcia łączące w sobie elementy gimnastyki, akrobatyki i tańca przy
            użyciu drążka pionowego. Połączenie siły, gracji, gibkości i
            dynamiki. Na tych zajęciach nie tylko nauczysz się obrotów,
            wspinaczki i kombinacji figur, ale także wyrzeźbisz sylwetkę,
            zyskasz pewność siebie i poprawisz samopoczucie. Zajęcia odbywają
            się na różnych poziomach zaawansowania oraz w kameralnych grupach, 1
            osoba do rurki.
          </p>
          <p className={styles.poleDance__link} onClick={openModal}>
            Poziomy zaawansowania
          </p>
        </>
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
      id: 'exotic',
      name: 'Exotic',
      desc: (
        <p>
          Zajęcia te oznaczają zmysłowy i kobiecy taniec przy rurce. Prowadzone
          są w butach na obcasie i platformie, tzw. szklankach. Podczas zajęć
          nauczysz się choreografii, nastawionej na sensualność, płynność ruchu,
          grację i flow. Poznasz również triki typowe dla tego stylu oraz
          elementy floorwork. Warto zabrać ze sobą także nakolanniki.
        </p>
      ),
    },
    {
      id: 'conditioning',
      name: 'Conditioning',
      desc: (
        <p>
          Zajęcia wzmacniające, przygotowujące ciało do trików siłowych na rurce
          czy kole. Na zajęciach wykorzystywane są ćwiczenia zaczerpnięte z
          treningów gimnastyki i kalisteniki. Mięśnie będą płonąć! Dzięki temu
          treningowi wypracujesz siłową bazę, która pozwoli Ci w bezpieczny
          sposób trenować akrobatykę powietrzną i osiągać regularne postępy.
        </p>
      ),
    },
  ];

  const classesData = classes.map(({ id, name, desc }) => (
    <section className={styles.classes__singleClass} key={id}>
      <h3>{name}</h3>
      {desc}
    </section>
  ));

  return (
    <>
      <article className={styles.classes}>{classesData}</article>
      <Modal isVisible={isVisible} closeModal={closeModal}>
        <dl className={styles.classes__levelList}>
          {levels.map(({ id, level, desc }) => (
            <div key={id}>
              <dt>{level}</dt>
              <dd>{desc}</dd>
            </div>
          ))}
        </dl>
      </Modal>
    </>
  );
};

export default Classes;
