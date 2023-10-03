import React, { useState } from 'react';
import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css'; // Import the CSS

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const images = [
    '/img/gallery-1.JPG',
    '/img/gallery-2.JPG',
    '/img/indian-shopping.jpg',
    '/img/gallery-3.JPG',
    '/img/gallery-5.JPG',
    '/img/couples-shopping.jpg',
  ];
  const [photoIndex, setPhotoIndex] = useState(0);

  const handleImageClick = (index) => {
    setIsOpen(true);
    setPhotoIndex(index);
  };

  return (
    <section id="gallery" className="gallery pt-3 light-section" data-aos="fade-up">
      <div className="container">
        <p className="sub-header">Gallery</p>
        <h3 className="header">Our Store Visuals</h3>
        <div className="gallery-photos">
          {images.map((src, index) => (
            <div className="image" key={index}>
              <a title={`Gallery Photo ${index + 1}`} href={src} data-lightbox={`Gallery${index}`}>
                <img src={src} alt={`Gallery Photo ${index + 1}`} onClick={() => handleImageClick(index)} />
              </a>
            </div>
          ))}
        </div>

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
            onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
          />
        )}
      </div>
    </section>
  );
};

export default Gallery;
