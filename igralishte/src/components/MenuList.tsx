import React, { useContext, useState } from "react";
import { UserContext } from "@/context/UserContext";
import { ProductType } from "@/types/types";
import MenuItem from "./MenuItem";
import ProductItem from "./ProductItem";
{/* <p><img src="../pictures/icons/sparks-elements-and-symbols-isolated-on-white-background-free-vector 5.png" alt="small stars" />Види ги сите</p> */}

interface Props {
  products: ProductType[];
}

const VintageDropdown: React.FC<Props> = ({ products }) => {
const [selectedType, setSelectedType] = useState('');

const handleTypeChange = (event: any) => {
setSelectedType(event.target.value);
};

const productTypes = ((products.filter((product) => product.type)));
const productItemTypes = ((products.filter((product) => product.product_type)));

console.log(productTypes)
console.log(productItemTypes)

// return (
//     <div>
//       {productTypes.map((product) => (
//           <>
//     <label htmlFor="product-type">{product.type}</label>
//       <select id="product-type" value={selectedType} onChange={handleTypeChange}>
//         {/* <option value=""></option> */}
//         {/* {productItemTypes.map((product) => ( */}
     
//         <span><img src="../pictures/icons/sparks-elements.png" alt="small stars" />Види ги сите</span>
//         <option key={product.id} value={product.type}><MenuItem product={product} /></option>

//         {/* ))} */}
//       </select>
//       </>
//         ))}

//     </div>
//   );


   return (
    <>
    {productTypes.map((prod) => {
    <div key={prod.id} className="my-5">
      <h2 className="text-uppercase text-center">{prod.type}</h2>
      <div className="restaurant-container my-4 ">
        <div className="d-flex flex-row flex-wrap justify-content-between">
        {productItemTypes.map((product) => (
          <MenuItem
          key={product.id}
          product={product}
          />
        ))}
        </div>
      </div>
    </div>
    })}
    </>
 );
};

export default VintageDropdown;
