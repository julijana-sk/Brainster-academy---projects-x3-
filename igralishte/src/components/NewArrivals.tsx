import Link from "next/link";
import React, { useState } from "react";


interface Props {
  bgColor: string;
  title: string;
  description: string;
  children: React.ReactNode
}
const NewArrivals: React.FC<Props> = ({bgColor, title, description, children}) => {

  const [backgroundColor, setBackgroundColor] = useState(`${bgColor}`)
  // const [backgroundColor, setBackgroundColor] = useState(bgColor)


  function handleBackgroundColor() {
    setBackgroundColor("btn-pink-circle-hover")

  }

  return (
        <Link href={"/newArrivals"}>
            <button className={`${backgroundColor} btn-large rounded-circle banner-text-wrapper`} onClick={handleBackgroundColor}>
              <img src="../pictures/icons/sparks-elements-rose.png" alt="spark elements" />
              <h3 className="text-center">{title}</h3>
              <p className="small">{description}</p>
              <img src="../pictures/icons/arrow.png" alt="arrow" />
              {children}
            </button>
        </Link>
  );
};

export default NewArrivals;
