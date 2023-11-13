import { UserContext } from '@/context/UserContext';
import React, { useContext, useRef, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ProductItem from './ProductItem';

const CarouselWithIndicators = () => {

  const {data} = useContext(UserContext);

  const carousel = useRef(undefined);
  const images = [
      "../pictures/images/product-01-1.jpg",
      "../pictures/images/product-01-2.jpg",
      "../pictures/images/product-01-5.jpg"
  ];

  const [current, setCurrent] = useState(0);

 const handlePrev = () => {
    setCurrent(current === 0 ? 2 : current - 1);
 };

 const handleNext = () => {
    setCurrent(current === 2 ? 0 : current + 1);
 };

 

 return (
    <div className='carousel container-fluid my-5 h-100'>
      <div className='row d-flex flex-row justify-content-center'>
        <div className='col-11'>
          <h2 className='carousel-text'>Trendy парчиња во моментов</h2>
      <Carousel showIndicators={false} showStatus={false}>
        {data?.categories?.map((image, index) => {
          return (
            <>
          {image.subs.map((pictures) => {
            return (
              <div>
                {pictures.products.map((image) => {
                return (
                  <div key={image.id}>
                  <ProductItem id={image.id} title={image.title} price={image.price} img={image.img}/>
                  </div>
                )
              })}
              </div>
            )
          })}
          </>
          )
        })}
      </Carousel>
      <div className="carousel">

      <div className='indicators'>
      <button className="indicator" onClick={handlePrev}>
        &#10094;
      </button>
      <img src={`/images/${current + 1}.jpg`} alt="slider image" width={300} height={300} />
      <button className="indicator" onClick={handleNext}>
        &#10095;
      </button>
      </div>
    </div>

    {/* fake carousel koku da se prikaze na homepage */}
        <Carousel showThumbs={false} infiniteLoop={true}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Carousel image ${index}`} className='carousel-img' />
        </div>
      ))}
    </Carousel>
    
    </div>
    </div>
  </div>
 );
};

export default CarouselWithIndicators;