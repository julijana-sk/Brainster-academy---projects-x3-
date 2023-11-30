import React from "react";
import { ProductType } from "@/types/types";

interface Props {
  product: ProductType;
  onMinusClick: (product: ProductType) => void;
  onPlusClick: (product: ProductType) => void;
}

const AmountOfProduct: React.FC<Props> = ({product, onMinusClick, onPlusClick}) => {

  return (
    <div className="row flex-row title justify-content-start ml-auto mr-auto align-items-center text-left mb-2">
      <p className='mb-1'>Количина: </p>
      <div className="flex-row justify-content-left ml-3 align-items-center align-self-center">
      <div className="col-12 p-0">
        <img src='../pictures/icons/minus-amount.png' onClick={() => onMinusClick(product)} className='w-25 mb-1 mr-2' alt="alt" />
        <span>{product.amount}</span>
        <img src='../pictures/icons/plus-amount.png' onClick={() => onPlusClick(product)} className='w-25 mb-1 ml-2' alt="alt" />
        </div>
      </div>
    </div>
  );
};

export default AmountOfProduct;