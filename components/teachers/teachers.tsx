import { Teacher } from 'components/teachers/teachers.interfaces';
import teachers from 'components/teachers/teachers.json';
import styles from 'components/teachers/teachers.module.scss';
import Modal from 'components/UI/modal/modal';
import { sanitize } from 'isomorphic-dompurify';
import { CSSProperties, KeyboardEvent, useState } from 'react';
import useDocument from 'utils/use-document';

const Teachers = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher>(null);
  const _document = useDocument();

  function openModal(teacher: Teacher) {
    _document.body.style.overflowY = 'hidden';
    setSelectedTeacher(teacher);
    setIsOpen(true);
  }

  function closeModal() {
    setSelectedTeacher(null);
    setIsOpen(false);
  }

  function onKeyDown(
    e: KeyboardEvent<HTMLElement>,
    teacher: typeof teachers[0],
  ) {
    if (e.key === 'Enter') {
      openModal(teacher);
    }
    if (e.key === 'Escape') {
      closeModal();
    }
  }

  const teacherPhotoStyles: CSSProperties = {
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
          onKeyDown={(e) => onKeyDown(e, teacher)}
          tabIndex={0}
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
      <Modal isVisible={isOpen} closeModal={closeModal} includeCloseButton>
        <div className={styles.modal__container}>
          <img
            src={
              selectedTeacher?.photoId
                ? `/static/teachers/${selectedTeacher.photoId}.webp`
                : `/static/images/backgroundLogo.png`
            }
            loading="lazy"
            // type="image/webp"
            alt=""
            height="300"
            width="225"
            className={styles.modal__photo}
          />
          <aside className={styles.modal__content}>
            <h4 className={styles.modal__title}>{selectedTeacher?.name}</h4>
            <p
              className={styles.modal__desc}
              dangerouslySetInnerHTML={{
                __html: sanitize(selectedTeacher?.lead),
              }}
            />
            <p
              className={styles.modal__desc}
              dangerouslySetInnerHTML={{
                __html: sanitize(selectedTeacher?.desc),
              }}
            />
          </aside>
        </div>
      </Modal>
    </section>
  );
};

export default Teachers;
