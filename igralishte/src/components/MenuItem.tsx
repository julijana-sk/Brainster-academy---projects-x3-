import { ProductType } from "@/types/types";
import React from "react";

interface Props {
  item: ProductType;
}

const MenuItem: React.FC<Props> = ({item}) => {

return (
    <div >
      <h3>{item.product_type}</h3>
    </div>
  )
};

export default MenuItem;



