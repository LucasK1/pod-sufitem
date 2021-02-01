import React, { useState } from 'react';

import Modal from '../UI/Modal/Modal';

import styles from './Teachers.module.scss';
import teachers from './teachers.json';

const Teachers = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState({});

  function openModal(teacher) {
    setSelectedTeacher(teacher);
    setModalOpen(true);
  }

  function closeModal() {
    setSelectedTeacher('');
    setModalOpen(false);
  }

  return (
    <section className={styles.container}>
      {teachers.map((teacher) => (
        <div
          className={styles.teacher__container}
          key={teacher.name}
          onClick={() => openModal(teacher)}>
          <img
            src="/static/images/portrait.jpeg"
            alt="Picture of a doggo"
            className={styles.teacher__photo}
          />
          <span className={styles.teacher__name}>{teacher.name}</span>
        </div>
      ))}
      <Modal show={modalOpen} closeModal={closeModal}>
        <h4 className={styles.modal__title}>{selectedTeacher.name}</h4>
        <p
          className={styles.modal__desc}
          dangerouslySetInnerHTML={{ __html: selectedTeacher.desc }}></p>
      </Modal>
    </section>
  );
};

export default Teachers;
