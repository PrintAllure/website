// components/product/ProductGallery.jsx
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ProductGallery = ({ images }) => {
  return (
    <div className="w-full md:w-1/2">
      <Carousel
        showThumbs={true}
        infiniteLoop={true}
        showStatus={false}
        emulateTouch={true}
      >
        {images?.map((image, index) => (
          <div key={index} className="h-96">
            <img 
              src={image} 
              alt={`Product view ${index + 1}`} 
              className="object-contain h-full w-full"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductGallery;