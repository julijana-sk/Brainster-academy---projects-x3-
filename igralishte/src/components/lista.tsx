import React, { useContext } from 'react';
import MenuItem from './MenuItem';
import Link from 'next/link';
import { UserContext } from '@/context/UserContext';
import { title } from 'process';
import { type } from 'os';
import { ProductType } from '@/types/types';



// const MenuList: React.FC = () => {
//   const { data } = useContext(UserContext);

  
// //   console.log("MenuList", Object.entries(data))
// console.log(data)

// // const filteredVintageClothes: ProductType[] = Array[0]?.vintageClothes.filter((item: any) => item.product_type === 'Tops');

// return (
//         <div className="container">
//         {data.length > 0 ? (
//         <div>
//            {/* {filteredVintageClothes?.map((product, index) => (
//                <MenuItem key={index} item={product}/> */}
//            {data.map((product, index) => (
//             product.vintageClothes?.map((item, idx) => (
//               <MenuItem key={idx} item={item} />
//             ))
//           ))}
//           </div>
//       ) : <div>Data not found...</div>}
//     </div>
//   );
// }

// export default MenuList;