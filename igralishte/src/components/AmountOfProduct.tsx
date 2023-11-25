import React from "react";
import { ProductType } from "@/types/types";

interface Props {
  product: ProductType;
  onMinusClick: (product: ProductType) => void;
  onPlusClick: (product: ProductType) => void;
}

const AmountOfProduct: React.FC<Props> = ({product, onMinusClick, onPlusClick}) => {

  return (
    <div className="row flex-row">
      <p >Количина: </p>
      <div className="flex-row justify-content-left ml-3">
      <div className="col-12">
        <img src='../pictures/icons/minus-amount.png' onClick={() => onMinusClick(product)} alt="alt" />
        <span>{product.amount}</span>
        <img src='../pictures/icons/plus-amount.png' onClick={() => onPlusClick(product)} alt="alt" />
        </div>
      </div>
    </div>
  );
};

export default AmountOfProduct;