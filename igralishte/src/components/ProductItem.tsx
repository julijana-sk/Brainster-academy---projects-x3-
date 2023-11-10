import React from "react";
import { ProductType } from "../types/types";
import Link from "next/link";

const ProductItem: React.FC<ProductType> = (product) => {
  
  return (
    <Link href={`/products/${product.id}`}> 
    <div className="container">
      <div className="row d-flex flex-column justify-content-between">
        <div className="col-12">
          <img src={require(product.img)} alt="IMG-PRODUCT" />
            <p className="text-left">{product.title}</p>
            <span className="text-left">{product.price} ден.</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
