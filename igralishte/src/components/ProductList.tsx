import { UserContext } from "@/context/UserContext";
import React, { useContext } from "react";
import ProductItem from "./ProductItem";
import { ProductType, VintageClothes } from "@/types/types";

interface Props {
    products: ProductType[]
}
const ProductList: React.FC<Props> = ({products}) => {
  return (
    <div>
        {products?.map((product, index) => {
            return (
                <div key={index}>
                    <ProductItem product={product}/>
                </div>
            )
        })}
    </div>
  )
}

export default ProductList