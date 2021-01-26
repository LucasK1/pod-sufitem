import React, { useState } from 'react';

import Modal from '../UI/Modal/Modal';

import styles from './Teachers.module.scss';
import teachers from './teachers.json';

const Teachers = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState('');

  function openModal(teacher) {
    setSelectedTeacher(teacher);
    setModalOpen(true);
  }

  function closeModal() {
    setSelectedTeacher('');
    setModalOpen(false);
  }
/*
  const teachers = {
    'Anna Łukasiak': 'Założycielka studia Pod Sufitem, instruktorka pole dance, aerial hoop i stretchingu, absolwentka Akademii Wychowania Fizycznego w Warszawie na kierunkach: fizjoterapia i wychowanie fizyczne.</br>Jako nastolatka tańczyła, grała w siatkówkę i biegała. Na pole dance trafiła dość późno, ale lepiej późno niż wcale ;) W gimnastyce powietrznej najbardziej ceni jej niekończące się możliwości rozwoju. Uwielbia figury gibkościowe, ale nieustannie pracuje nad siłą, dynamiką i nowymi kombinacjami, aby stać się wszechstronnym sportowcem. Jej zajęcia charakteryzują się porządną rozgrzewką, profesjonalnym podejściem i swobodną atmosferą. Jako instruktor dba o to, aby regularnie zdobywać nową wiedzę i uczestniczyć w szkoleniach.</br></br>Osiągnięcia:<ul><li>I miejsce Sensual Championships 2018</li><li>III miejsce II Akademickie zawody pole dance 2018</li><li>III miejsce Vertical fit Championschip 2018</li><li>II miejsce Duende International Contest 2017</li></ul>Ponadto brała udział w wielu treningach, warsztatach, szkoleniach, kursach, sesjach zdjęciowych i pokazach cały czas poszerzając swoją wiedzę oraz propagując piękny sport, którym jest pole dance.',
    Balladyna: '',
    Kalafonia: '',
    Scholastyka: '',
    Anatolia: '',
    Kolendra: '',
    Petrolia: '',
    Eureka: '',
    Antananarywa: '',
    Endywia: '',
  };
*/
  return (
    <section className={styles.container}>
      {Object.keys(teachers).map((teacher) => (
        <div
          className={styles.teacher__container}
          key={teacher}
          onClick={() => openModal(teacher)}>
          <img
            src="/static/images/portrait.jpeg"
            alt="Picture of a doggo"
            className={styles.teacher__photo}
          />
          <span className={styles.teacher__name}>{teacher}</span>
        </div>
      ))}
      <Modal show={modalOpen} closeModal={closeModal}>
        <h4 className={styles.modal__title}>{selectedTeacher}</h4>
        <p className={styles.modal__desc} dangerouslySetInnerHTML={{__html: teachers[selectedTeacher]}}></p>
      </Modal>
    </section>
  );
};

export default Teachers;
