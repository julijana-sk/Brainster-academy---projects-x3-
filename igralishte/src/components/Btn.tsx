import { BtnType } from '@/types/types';
import React from 'react'

const Btn: React.FC<BtnType> = ({title}) => {
  return (
      <button type="submit" className="item button fluid button-big">
        {title}
      </button>
  );
}

export default Btn