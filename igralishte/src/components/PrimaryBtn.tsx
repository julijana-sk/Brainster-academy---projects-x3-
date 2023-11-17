import React, { useState } from 'react'

interface Props {
  title: string;
  backgroundColor: string;
  color: string;
  border: string;
  img?: string;
  btnClass: string;
  height: string;
  onClick?: () => void 
}

const PrimaryBtn: React.FC<Props> = ({title, backgroundColor, color, border, img, height, btnClass, onClick}) => {

  const [view, setView] = useState("");

  return (
      <button type="submit" onClick={() => setView(view)} className={`${btnClass} button-big my-2 text-center`} style={{backgroundColor: `${backgroundColor}`, color: `${color}`, height: `${height}`, border: `${border}`}} >
        <img src={`${img}`} alt="" />
        {title}
      </button>
  );
}

export default PrimaryBtn



