import React from 'react'

interface Props {
    title: string;
    onClick: () => void;
}

export const ToggleBtn = ({title, onClick}: Props) => {
  return (
    <button className="toggle-about-text w-50 text-center bg-transparent" onClick={onClick}>{title}</button>
  )
}
