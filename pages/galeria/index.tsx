import { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import styles from '../../styles/galeria.module.scss';

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const images = [
    '/static/gallery/1.jpg',
    '/static/gallery/2.jpg',
    '/static/gallery/3.jpg',
    '/static/gallery/4.jpg',
    '/static/gallery/5.jpg',
    '/static/gallery/6.jpg',
    '/static/gallery/7.jpg',
    '/static/gallery/8.jpg',
  ];

  const imageClickHandler = (index) => {
    setIsOpen(true);
    setPhotoIndex(index);
  };

  return (
    <main id="main-content" className={styles.container}>
      {images.map((image, index) => (
        <img
          className={styles.imageThumbnail}
          src={image}
          alt=""
          // width="200"
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
    </main>
  );
};

export default Gallery;
