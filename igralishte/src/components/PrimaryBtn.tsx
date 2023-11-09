import React from 'react'

interface Props {
  title: string;
  backgroundColor: string;
  color: string;
  border: string;
  img?: string;
  btnClass: string;
}

const PrimaryBtn: React.FC<Props> = ({title, backgroundColor, color, border, img, btnClass}) => {
  return (
      <button type="submit" className={`${btnClass} button-big my-2 text-center`} style={{backgroundColor: `${backgroundColor}`, color: `${color}`, border: `${border}`}} >
        <img src={`${img}`} alt="" />
        {title}
      </button>
  );
}

export default PrimaryBtn



