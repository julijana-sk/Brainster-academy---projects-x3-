import { ProductType } from "@/types/types";
import React from "react";

interface Props {
  product: ProductType;
}

const MenuItem: React.FC<Props> = ({product}) => {

return (
    <div >
      <h3>{product.product_type}</h3>
    </div>
  )
};

export default MenuItem;



