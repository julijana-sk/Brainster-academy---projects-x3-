import Link from "next/link";
import React, { useState } from "react";


// interface Props {
//   bgColor: string;
//   title: string;
//   description: string;
//   img: string;
//   children?: React.ReactNode
// }
// const NewArrivals: React.FC<Props> = ({bgColor, title, description, img, children}) => {

//   const [backgroundColor, setBackgroundColor] = useState(`${bgColor}`)
//   // const [backgroundColor, setBackgroundColor] = useState(bgColor)


//   function handleBackgroundColor() {
//     setBackgroundColor("btn-pink-circle-hover")
//   }

//   return (
//         <Link href={"/newArrivals"}>
//             <button className={`${backgroundColor} rounded-circle banner-text-wrapper`} 
//                     onClick={ (event: React.MouseEvent<HTMLElement>) => {
//                       event.preventDefault();
//                       handleBackgroundColor()
//                       }}>
//               <img src={`${img}`} alt="spark elements" />
//               <h3 className="text-center">{title}</h3>
//               <p className="small">{description}</p>
//               <img src="../pictures/icons/arrow.png" alt="arrow" />
//               {children}
//             </button>
//         </Link>
//   );
// };

// export default NewArrivals;
