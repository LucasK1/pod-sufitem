import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';

import 'react-image-lightbox/style.css';
import styles from '../../styles/galeria.module.scss';

const index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const images = [
    'https://picsum.photos/340/540',
    'https://picsum.photos/600/540',
    'https://picsum.photos/600/560',
    'https://picsum.photos/900/1200',
    'https://picsum.photos/1920/1080',
    'https://picsum.photos/200/350',
  ];

  const imageClickHandler = (index) => {
    setIsOpen(true);
    setPhotoIndex(index);
  };

  return (
    <section className={styles.container}>
      {images.map((image, index) => (
        <img
          className={styles.imageThumbnail}
          src={image}
          alt=""
          width="200"
          height="300"
          key={image}
          onClick={() => imageClickHandler(index)}
        />
      ))}
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </section>
  );
};

export default index;
