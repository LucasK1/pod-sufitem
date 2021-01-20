import React from 'react';
import Image from 'next/image';

import styles from './Teachers.module.scss';

const Teachers = () => {
  const teachers = [
    'Alina',
    'Balladyna',
    'Kalafonia',
    'Scholastyka',
    'Anatolia',
    'Kolendra',
    'Petrolia',
    'Eureka',
    'Antananarywa',
    'Endywia',
  ];

  return (
    <section className={styles.container}>
      {teachers.map((teacher) => (
        <div className={styles.teacher__container}>
          <img
            src="/static/images/portrait.jpeg"
            alt="Picture of a doggo"
            className={styles.teacher__photo}
          />
          <span className={styles.teacher__name}>{teacher}</span>
        </div>
      ))}
    </section>
  );
};

export default Teachers;
