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

//  const router = useRouter();

//  const handleLinkClick = (event: any, href: any) => {
//     const asPath = router.asPath; 
//       if (!asPath.includes('/products')) {
//         router.push(href);
//       }
//  };
  
  return (
      <Link href={`/products/${id}`} as={`/products/${id}`}>
        <div className="mb-3 p-0">
            <img src={img} alt="IMG-PRODUCT" className="product-img"/>
            <p>{title}</p>
            <p style={{fontWeight: '500'}}>{price} ден.</p>
        </div>
      </Link>
  );
};

export default ProductItem;
