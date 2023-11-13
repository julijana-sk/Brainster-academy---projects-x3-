import React from "react";
import { ProductType } from "../types/types";
import Link from "next/link";

// import "../pictures/images/product-01-1.jpg"
interface Props {
  id: string;
  title: string;
  price: number;
  img: string
}
const ProductItem: React.FC<Props> = ({id, title, price, img}) => {
  
  return (
    <Link href={`/products/${id}`}> 
    <div className="container">
      <div className="row d-flex flex-column justify-content-between">
        <div className="col-12">
          <img src={img} alt="IMG-PRODUCT" />
            <p className="text-left">{title}</p>
            <span className="text-left">{price} ден.</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
