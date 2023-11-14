import { UserContext } from "@/context/UserContext";
import React, { useContext } from "react";
import ProductItem from "./ProductItem";
import { ProductType, VintageClothes } from "@/types/types";
import ProductList from "./ProductList";

interface Props {
    clothes: VintageClothes[],
}
const ProductType: React.FC<Props> = ({clothes}) => {
  return (
    <div>
        {clothes.map((item, index) => {
            return (
                <div key={index}>
                    <ProductList products={item.tops} />
                </div>
            )
        })}
    </div>
  )
}

export default ProductType