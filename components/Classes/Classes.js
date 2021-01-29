import React, { useState } from 'react';

import styles from './Classes.module.scss';

const Classes = () => {
  const [activeClass, setActiveClass] = useState({
    id: 'poleDance',
    name: 'Pole Dance',
    desc: <p>Tańcowanie na polu</p>,
  });

  const classes = [
    {
      id: 'poleDance',
      name: 'Pole Dance',
      desc: <p>Tańcowanie na polu</p>,
    },
    {
      id: 'acroPole',
      name: 'Acro Pole',
      desc: <p>Duże pole</p>,
    },
    {
      id: 'aerialHoop',
      name: 'Aerial Hoop',
      desc: <p>Skakanie powietrzne</p>,
    },
    {
      id: 'spineYoga',
      name: 'Joga kręgosłupa',
      desc: <p>Wyrównanie Ćakramów</p>,
    },
    {
      id: 'stretching',
      name: 'Stretching',
      desc: <p>Gumkowanie majtek</p>,
    },
    {
      id: 'mobility',
      name: 'Trening mobilności',
      desc: <p>Kategoria B</p>,
    },
    {
      id: 'pilates',
      name: 'Pilates',
      desc: <p>Sokrates</p>,
    },
  ];

  const classClickHandler = (classItem) => {
    setActiveClass(classItem);
  };

  const classesSelectionBtns = classes.map((classItem) => {
    return (
      <a
        className={`${styles.classes__selectionBtn} ${
          activeClass.id === classItem.id
            ? styles.classes__selectionBtn_isActive
            : ''
        }`}
        onClick={() => classClickHandler(classItem)}
        key={classItem.id}>
        {classItem.name}
      </a>
    );
  });

  return (
    <div className={styles.classes__content}>
      <section className={styles.classes}>
        <aside className={styles.classes__selection}>
          {classesSelectionBtns}
        </aside>
        <div className={styles.classes__desc}>
          {activeClass ? activeClass.desc : ''}
        </div>
      </section>
    </div>
  );
};

export default Classes;
