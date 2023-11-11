import React from "react";

interface Props {
  children: React.ReactNode;
}

const Banner: React.FC<Props> = ({children}) => {

  
  return (
    <div className="container-fluid">
      <div className="row d-flex flex-column justify-content-center">
        <div className="banner-bcg">
          <img src="../pictures/banner.png"
            alt="banner picture"
            className="banner-picture" />
            {children}
          </div>
        </div>
      </div>
  );
};

export default Banner;
