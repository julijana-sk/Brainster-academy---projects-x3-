import React from "react";
import { ProductType } from "@/types/types";
import Link from "next/link";

interface Props {
  product: ProductType;
}

const MenuItem: React.FC<Props> = ({ product }) => {

return (
   <Link href={`/products/${product.id}`}> 
      <div className="container">
        <p className="text-left">{product.product_type}</p>
      </div>
    </Link>
  );
};

export default MenuItem;
