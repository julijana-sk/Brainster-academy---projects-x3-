import React from "react";

interface Props {
  type: string;
}

const TypeItem: React.FC<Props> = ({type}) => {

return (
    <div >
      <h3>{type}</h3>
    </div>
  )
};

export default TypeItem



