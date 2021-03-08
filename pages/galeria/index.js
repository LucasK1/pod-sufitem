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
      <h1 onClick={() => setIsOpen(true)}>Łoooo ile fotek</h1>
      {images.map((image, index) => (
        <img
          src={image}
          alt=""
          width="200"
          height="300"
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

// const imagesGallery = [
//   {
//     src: 'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg',
//     thumbnail:
//       'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg',
//     thumbnailWidth: 320,
//     thumbnailHeight: 174,
//     caption: 'After Rain (Jeshu John - designerspics.com)',
//   },
//   {
//     src: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg',
//     thumbnail:
//       'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg',
//     thumbnailWidth: 300,
//     thumbnailHeight: 212,
//     tags: [
//       { value: 'Ocean', title: 'Ocean' },
//       { value: 'People', title: 'People' },
//     ],
//     caption: 'Boats (Jeshu John - designerspics.com)',
//   },

//   {
//     src: 'https://picsum.photos/340/540',
//     thumbnail: 'https://picsum.photos/340/540',
//     thumbnailWidth: 340,
//     thumbnailHeight: 540,
//   },
//   {
//     src: 'https://picsum.photos/400/500',
//     thumbnail: 'https://picsum.photos/400/500',
//     thumbnailWidth: 320,
//     thumbnailHeight: 212,
//   },
//   {
//     src: 'https://picsum.photos/600',
//     thumbnail: 'https://picsum.photos/600',
//     thumbnailWidth: 200,
//     thumbnailHeight: 200,
//   },
//   {
//     src: 'https://picsum.photos/700/800',
//     thumbnail: 'https://picsum.photos/700/800',
//     thumbnailWidth: 400,
//     thumbnailHeight: 500,
//   },
//   {
//     src: 'https://picsum.photos/700/300',
//     thumbnail: 'https://picsum.photos/700/300',
//     thumbnailWidth: 700,
//     thumbnailHeight: 300,
//   },
// ];
