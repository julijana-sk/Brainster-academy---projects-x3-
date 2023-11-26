import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  id: string;
  img: string;
  title: string;
  price: number;
}
const ProductItem: React.FC<Props> = ({id, img, title, price}) => {

  // const router = useRouter();
  // const { productId } = router.query;
  
  return (
    <div className="mb-3 p-0">
        <Link href={`products/${id}`}> 
        <img src={img} alt="IMG-PRODUCT" className="product-img"/>
        <p>{title}</p>
        <p style={{fontWeight: '500'}}>{price} ден.</p>
        </Link>
      </div>
  );
};

export default ProductItem;
