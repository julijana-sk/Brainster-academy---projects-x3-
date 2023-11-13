import React, { useState } from "react";
import Link from "next/link";

interface Props {
  imageBanner: string;
  classOfPicture: string;
  bgColor: string;
  title: string;
  description: string;
  img: string;
  children?: React.ReactNode
}

const Banner: React.FC<Props> = ({imageBanner, classOfPicture, bgColor, title, description, img, children}) => {

  
  const [backgroundColor, setBackgroundColor] = useState(`${bgColor}`)
  // const [backgroundColor, setBackgroundColor] = useState(bgColor)


  function handleBackgroundColor() {
    setBackgroundColor("btn-pink-circle-hover")
  }


  
  return (
    <div className="container-fluid banner">
      <div className="row d-flex flex-column justify-content-center">
        <div className="mb-5" style={{position: "relative"}}>
          <img src={imageBanner}
            alt="banner picture"
            className={`${classOfPicture}`} />
             <Link href={"/newArrivals"}>
            <button className={`${backgroundColor} rounded-circle banner-text-wrapper`} 
                    onClick={ (event: React.MouseEvent<HTMLElement>) => {
                      event.preventDefault();
                      handleBackgroundColor()
                      }}>
              <img src={`${img}`} alt="spark elements" />
              <h3 className="text-center">{title}</h3>
              <p className="small">{description}</p>
              <img src="../pictures/icons/arrow.png" alt="arrow" />
              {children}
            </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
