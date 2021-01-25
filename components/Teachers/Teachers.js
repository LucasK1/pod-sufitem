import React, { useState } from 'react';

import Modal from '../UI/Modal/Modal';

import styles from './Teachers.module.scss';

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

  const teachers = {
    Alina: 'Baaardzo dlugi opis',
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
        <h1>{selectedTeacher}</h1>
        <p>{teachers[selectedTeacher]}</p>
      </Modal>
    </section>
  );
};

export default Teachers;
