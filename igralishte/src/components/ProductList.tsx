import { UserContext } from "@/context/UserContext";
import React, { useContext } from "react";
import ProductItem from "./ProductItem";


const ProductsList = () => {
  
 const {products } = useContext(UserContext);


 const renderProductRows = () => {
    const rows = [];
    let index = 0;

    while (index < products.length) {
      if (index === 0) {
        // First row with two cards (col-6)
        rows.push(
          <div className="row">
            <div className="col-6">
              <ProductItem key={products[index].id} {...products[index]} />
            </div>
            <div className="col-6">
              <ProductItem key={products[index + 1].id} {...products[index + 1]} />
            </div>
          </div>
        );
        index += 2;
      } else {
        // Rows with one big card (col-12) and two cards (col-6)
        rows.push(
          <div className="row">
            <div className="col-12">
              <ProductItem key={products[index].id} {...products[index]} />
            </div>
          </div>
        );
        index++;

        rows.push(
          <div className="row">
            <div className="col-6">
              <ProductItem key={products[index].id} {...products[index]} />
            </div>
            <div className="col-6">
              <ProductItem key={products[index + 1].id} {...products[index + 1]} />
            </div>
          </div>
        );
        index += 2;
      }
    }

    return rows;
  };

  return (
    <div className="restaurant-container my-4">
      <div className="d-flex flex-row flex-wrap justify-content-between">
        {renderProductRows()}
      </div>
    </div>
  );
};

export default ProductsList;

