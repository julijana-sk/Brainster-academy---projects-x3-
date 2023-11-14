import React from "react";
import { ProductType } from "../types/types";
import Link from "next/link";

interface Props {
  product: ProductType
}
const ProductItem: React.FC<Props> = ({product}) => {
  
  return (
    <Link href={`/products/${product.id}`}> 
      <div >
        <img src={product.img} alt="IMG-PRODUCT" className="product-img"/>
        <p className="product-text">{product.title}</p>
        <p className="product-text" style={{fontWeight: '500'}}>{product.price} ден.</p>
      </div>
    </Link>
  );
};

export default ProductItem;
