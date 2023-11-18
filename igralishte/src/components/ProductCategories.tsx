import React from "react";
import ProductList from "./ProductList";
import ProductItem from "./ProductItem";
import { ProductType } from "@/types/types";

// interface Props {
//     clothes: VintageClothes[],
// }
// const ProductCategories: React.FC<Props> = ({clothes}) => {
//   return (
//     <div>
//         {clothes.map((item, index) => {
//             return (
//                 <div key={index}>
//                     {/* <ProductList products={item.tops} /> */}
//                     {item.clothes.map((categories) => {
//                         return (
//                             <div>
//                                 <ProductList products={categories.pants}/>
//                             </div>
//                         )
//                     })}

//                 </div>
//             )
//         })}
//     </div>
//   )
// }

// export default ProductCategories;

interface Props {
    clothes: ProductType[],
}
const ProductCategories: React.FC<Props> = ({clothes}) => {
  return (
    <div>
        {clothes.map((categories) => {
            return (
                <div>
                    <ProductItem product={categories}/>
                </div>
            )
        })}


    </div>
  )
}

export default ProductCategories;