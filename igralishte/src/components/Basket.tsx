import { ProductType } from "@/types/types";
import React, { useEffect, useState } from "react";
import AmountOfProduct from "./AmountOfProduct";


// interface Props {
//   selectedProducts: ProductType[];
//   placeOrder: any;
//   history: any;
//   onAddItem: (prod: ProductType) => void;
//   onRemoveItem: (prod: ProductType) => void;
// }

// const Basket: React.FC<Props> = ({ placeOrder,history, selectedProducts, onAddItem, onRemoveItem }) => {

//   const [totalPrice, setTotalPrice] = useState<number>(0);

//   const calcPrice = () => {
//     let price = 0;
//     selectedProducts.forEach((p) => {
//       price += p.price * p.amount;
//     });

//     setTotalPrice(price);
//   };

//   useEffect(() => {
//     calcPrice();
//   }, [selectedProducts]);

//   const goBack = () => {
//     history.push("/");
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <button className="btn btn-outline-primary" onClick={goBack}>
//         Go To Product List
//       </button>
//       <div style={{ textAlign: "center" }}>
//         <div className="basket">
//           {selectedProducts?.map((prod, i) => (
//             <AmountOfProduct
//               key={i}
//               product={prod}
//               onMinusClick={onRemoveItem}
//               onPlusClick={onAddItem}
//             />
//           ))}
//           {selectedProducts.length === 0 && (
//             <p style={{ marginTop: "50px" }}>EMPTY BASKET</p>
//           )}
//         </div>
//         <p>Total amount: {totalPrice} den</p>
//         <button className="btn btn-primary" onClick={placeOrder}>
//           PlaceOrder
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Basket;