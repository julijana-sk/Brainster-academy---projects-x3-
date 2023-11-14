import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { VintageClothes } from '@/types/types';
import ProductItem from './ProductItem';

interface Props {
  vintageClothes: VintageClothes[]
}

const CarouselWithIndicators: React.FC<Props> = ({ vintageClothes }) => {

  return (
    <div className="carousel container-fluid h-100">
      <div className="row d-flex flex-row justify-content-center">
        <h2 className="carousel-header mb-3">Trendy парчиња во моментов</h2>
        <div className="col-11">
            {vintageClothes.map((clothes, index) => (
                <Carousel showIndicators={false} showStatus={false} showThumbs={true} infiniteLoop={true} key={index} className='carousel-container'>
                {clothes?.tops?.map((top, topIndex: number) => (
                  <ProductItem key={topIndex} product={top} />
                ))}
                </Carousel>
            ))}
        </div>
      </div>
    </div>

  );
};

export default CarouselWithIndicators;
