import React, { useState } from "react";

interface Props {
  bgColor: string;
  title: string;
  description: string;
}
const NewArrivals: React.FC<Props> = ({bgColor, title, description}) => {

  const [backgroundColor, setBackgroundColor] = useState(`${bgColor}`)
  // const [backgroundColor, setBackgroundColor] = useState(bgColor)


  function handleBackgroundColor() {

    setBackgroundColor(bgColor)

  }

  return (
      <div className="container">
        <button type="button" className={`${backgroundColor} btn btn-link btn-outline-dark btn-large btn-block rounded-circle`} onClick={handleBackgroundColor}>
                
            <div>
              <img src="../pictures/icons/sparks-elements.png" alt="" />
          <h3 className="text-center">{title}</h3>
          <p className="small">{description}</p>
              <img src="../pictures/icons/arrow.png" alt="" />
            </div>
        </button>
      </div>
  );
};

export default NewArrivals;
