import React from "react";
import { ProductType } from "../types/types";
import Link from "next/link";

interface Props {
  product: ProductType,
}
const ProductItem: React.FC<Props> = ({product}) => {
  
  return (
    <div className="mb-3 p-0">
        <Link href={`/products/${product.id}`}> 
        <img src={product.img} alt="IMG-PRODUCT" className="product-img"/>
        <p>{product.title}</p>
        <p style={{fontWeight: '500'}}>{product.price} ден.</p>
        </Link>
      </div>
  );
};

export default ProductItem;
