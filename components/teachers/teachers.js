import { useEffect, useState } from 'react';
import Modal from '../UI/modal/modal';
import teachers from './teachers.json';
import styles from './teachers.module.scss';

const Teachers = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState({});
  const [_document, set_document] = useState(null);

  useEffect(() => {
    set_document(document);
  }, []);

  function openModal(teacher) {
    _document.body.style.overflowY = 'hidden';
    setSelectedTeacher(teacher);
    setModalOpen(true);
  }

  function closeModal() {
    setSelectedTeacher({});
    setModalOpen(false);
  }

  function handleKeyPress(e, teacher) {
    if (e.keyCode === 13) {
      openModal(teacher);
    }
    if (e.keyCode === 27) {
      closeModal();
    }
  }

  const teacherPhotoStyles = {
    objectFit: 'contain',
    border: '1px solid #aaa',
    padding: '6px',
  };

  return (
    <section className={styles.container}>
      {teachers.map((teacher) => (
        <figure
          className={styles.teacher__container}
          key={teacher.name}
          onClick={() => openModal(teacher)}
          onKeyDown={(e) => handleKeyPress(e, teacher)}
          tabIndex="0"
        >
          <img
            src={
              teacher.photoId
                ? `/static/teachers/${teacher.photoId}.webp`
                : `/static/images/backgroundLogo.png`
            }
            loading="lazy"
            alt=""
            height="300"
            width="225"
            className={styles.teacher__thumbnail}
            style={teacher.photoId ? {} : teacherPhotoStyles}
          />
          <figcaption className={styles.teacher__name}>
            {teacher.name}
          </figcaption>
        </figure>
      ))}
      <Modal show={modalOpen} closeModal={closeModal}>
        <div className={styles.modal__container}>
          <img
            src={
              selectedTeacher.photoId
                ? `/static/teachers/${selectedTeacher.photoId}.webp`
                : `/static/images/backgroundLogo.png`
            }
            loading="lazy"
            type="image/webp"
            alt=""
            height="300"
            width="225"
            className={styles.modal__photo}
          />
          <aside className={styles.modal__content}>
            <h4 className={styles.modal__title}>{selectedTeacher.name}</h4>
            <p
              className={styles.modal__desc}
              dangerouslySetInnerHTML={{
                __html: selectedTeacher.desc,
              }}
            ></p>
          </aside>
        </div>
      </Modal>
    </section>
  );
};

export default Teachers;
