import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { ProductType, VintageClothesType } from '@/types/types';
import ProductItem from './ProductItem';


interface Props {
  product: ProductType;
}

const Slider: React.FC<Props> = ({ product }) => {

  return (
    <div className="container-fluid h-100">
      <div className="row d-flex flex-row justify-content-center">
        <div className="col-11">
<div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-mdb-ride="carousel">

  <div className="carousel-inner mb-5">
    <div className="carousel-item active">
      <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(88).webp" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(121).webp" className="d-block w-100"
        alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(31).webp" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-mdb-target="#carouselExampleIndicators"
    data-mdb-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-mdb-target="#carouselExampleIndicators"
    data-mdb-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>

  <div className="carousel-indicators" style={{marginBottom: "-20px"}}>
    <button type="button" data-mdb-target="#carouselExampleIndicators" data-mdb-slide-to="0" className="active"
      aria-current="true" aria-label="Slide 1" style={{width: "100px"}}>
      <img className="d-block w-100 img-fluid"
        src="https://mdbcdn.b-cdn.net/img/Photos/Others/Carousel-thumbs/img%20(88).webp"  />
    </button>
    <button type="button" data-mdb-target="#carouselExampleIndicators" data-mdb-slide-to="1"
      aria-label="Slide 2" style={{width: "100px"}}>
      <img className="d-block w-100 img-fluid"
        src="https://mdbcdn.b-cdn.net/img/Photos/Others/Carousel-thumbs/img%20(121).webp"  />
    </button>
    <button type="button" data-mdb-target="#carouselExampleIndicators" data-mdb-slide-to="2"
      aria-label="Slide 3" style={{width: "100px"}}>
      <img className="d-block w-100 img-fluid"
        src="https://mdbcdn.b-cdn.net/img/Photos/Others/Carousel-thumbs/img%20(31).webp"  />
    </button>
  </div>

</div>




        </div>
      </div>
    </div>

  );
};

export default Slider;
