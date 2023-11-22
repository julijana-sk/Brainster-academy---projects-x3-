import React from "react";
import { ProductType } from "../types/types";
import ProductItem from "./ProductItem";

interface Props {
  products: ProductType[];
}

const RelatedProducts: React.FC<Props> = ({products}) => {
  return (
      <div className="container-fluid">
        <div className="row flex-column">
          <h3 className="text-center my-4">Related Products</h3>
          <div className="row flex-row ">
                {products?.map((product) => {
                  return (
                    <div className="col-5 p-0 mb-3 mr-2 product-img-small">
                       <ProductItem key={product.id} {...product}/>
                    </div>
                  )
                })}
          </div>
        </div>
      </div>
  );
};

export default RelatedProducts;
