import React from 'react'
import { useNavigate } from "react-router-dom";

interface IButtom {
  label: string
  disabled?: boolean
  url?: string
  onClick?: (val: any) => void
};

export const UIButton: React.FC<IButtom> = ({
  label,
  disabled,
  url,
  onClick
}) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={val => url ? navigate(url) : onClick && onClick(val)}
      disabled={disabled}
      className={`text-sm sm:text-base bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded uppercase ${disabled ? " bg-slate-300 hover:bg-slate-300 cursor-default" : ""}`}
    >
      {label}
    </button>
  )
}