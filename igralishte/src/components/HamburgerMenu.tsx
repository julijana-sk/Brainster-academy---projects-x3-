import Link from 'next/link';
import React, { useState } from 'react'
import db from "../../db.json"
import { BrandType, DataType, ProductType } from '@/types/types';
import ProductList from './ProductList';
import BrandsPicker from './BrandsPicker';

// interface Props {
//     brands: BrandType[];
//     products: DataType["products"]
// }

// const HamburgerMenu: React.FC<Props> = ({products, brands}) => {

//  const [menuOpen, setMenuOpen] = useState(false);

//  const handleMenuClick = () => {
//     setMenuOpen(!menuOpen);
//  };

//  return (
//     <div className="hamburger-menu">
//       <button className="hamburger" onClick={handleMenuClick}>
//         &#9776;
//       </button>
//       {menuOpen && (
//         <ul className="menu">
//           {Object.keys(db.products).map((category, index) => (
//             <li key={index}>
//                 <button onClick={handleMenuClick}>{category}</button>
//               <ul className="hamburger-dropdown-items">
//                 { Object.keys(db.products.vintageClothes).map((subcategory, index) => (
//                  <li key={index}>
//                       <button onClick={handleMenuClick}>{subcategory}</button>

//                  </li>
//                 ))}
//               </ul>
//             </li>
//           ))}
//           {brands.map((brand: BrandType, index: any) => {
//             return (
//             <li key={index}>
//                 <button onClick={handleMenuClick}>{brand.name}</button>              
//             </li>
//           )
//           })}
//         </ul>
//       )}
//     </div>
//  );
// };

// export default HamburgerMenu;






const HamburgerMenu: React.FC = () => {
 const [isMenuOpen, setIsMenuOpen] = useState(false);

 const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
 };

 return (
    <>
      <button className='close-menu' onClick={toggleMenu} />
      {isMenuOpen && (
        <div className='menu'>
          <button onClick={toggleMenu} />
          <ul>
            <li className="dropdown">
              <p className="btn btn-secondary dropdown-toggle" role="button" data-toggle="dropdown" aria-expanded="false">
                Vintage Clothes
              </p>
              <div className="dropdown-menu">
                <p className="dropdown-item" >Сите</p>
                <p className="dropdown-item" >Блузи</p>
                <p className="dropdown-item" >Пантолони</p>
              </div>
            </li>
            <li className="dropdown">
              <p className="btn btn-secondary dropdown-toggle" role="button" data-toggle="dropdown" aria-expanded="false">
                Accessories
              </p>
              <div className="dropdown-menu">
                <p className="dropdown-item" >Сите</p>
                <p className="dropdown-item" >Ташни</p>
                <p className="dropdown-item" >Накит</p>
              </div>
            </li>
            <li className="dropdown">
              <p className="btn btn-secondary dropdown-toggle" role="button" data-toggle="dropdown" aria-expanded="false">
                Брендови
              </p>
              <div className="dropdown-menu">
                <p className="dropdown-item" >Сите</p>
                <p className="dropdown-item" >Зш да не</p>
                <p className="dropdown-item" >Нежно</p>
              </div>
            </li>
          </ul>
        </div>
      )}
    </>
 );
};

export default HamburgerMenu;