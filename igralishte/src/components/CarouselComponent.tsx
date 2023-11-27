import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { VintageClothesType } from '@/types/types';
import ProductItem from './ProductItem';


interface Props {
  vintageClothes: VintageClothesType;
}

const CarouselComponent: React.FC<Props> = ({ vintageClothes }) => {

  return (
    <div className="carousel container-fluid">
      <div className="row d-flex flex-row justify-content-center">
        <h2 className="carousel-header mb-3">Trendy парчиња во моментов</h2>
        <div className="col-11  h-100">
          <Carousel showIndicators={false} showStatus={false} showThumbs={false} infiniteLoop={true} className='carousel-container'>
              {vintageClothes.tops.map((product) => {
                return (
                  <ProductItem key={product.id} {...product}/>
                )
              })
              }
            </Carousel>
        </div>
      </div>
    </div>

  );
};

export default CarouselComponent;
