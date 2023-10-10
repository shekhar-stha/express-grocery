import Link from 'next/link';
import React, { useState } from 'react';
import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const images = [
    '/img/gallery-1.JPG',
    '/img/gallery-2.JPG',
    '/img/indian-shopping.jpg',
    '/img/gifting-phone.jpg',
    '/img/gallery-5.JPG',
    '/img/shipping-ready.jpg',
  ];

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
              <Link title={`Gallery Photo ${index + 1}`} href={src} data-lightbox={`Gallery${index}`}>
                <img src={src} loading='lazy' alt={`Gallery Photo ${index + 1}`} onClick={() => handleImageClick(index)} />
              </Link>
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
