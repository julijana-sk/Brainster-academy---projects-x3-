import React from "react";
import ProductItem from "./ProductItem";
import { ProductType } from "@/types/types";

interface Props {
    products: ProductType[]
}
const ProductList: React.FC<Props> = ({products}) => {
  return (
    <div>
        {products?.map((product) => {
            return (
                <ProductItem key={product.id} {...product} />
            )
        })}
    </div>
  )
}

export default ProductList