import React from 'react'
const Placeholder =  require("../../../assets/placeholder.png")

interface IItemDetails {
    name: string
    numParts: number
    setImgUrl: string
    setNum: string
    setUrl: string
};

export const ItemDetails: React.FC<IItemDetails> = ({
    name,
    numParts,
    setImgUrl,
    setNum,
    setUrl
}) => {

  return (
    <div className="columns-2 p-8 gap-10">
        <img
            className={`w-full object-contain ${!setImgUrl ? "opacity-25" : ""}`}
            src={setImgUrl ? setImgUrl : Placeholder}
            alt={name}
        />
        <div className="flex flex-col">
          <p className="text-lg uppercase font-extrabold mb-4 text-gray-700 leading-5">{name}</p>
          <span className="font-bold truncate text-slate-600">Inventory: {numParts}</span>
          <span className="font-bold truncate text-slate-600">ID: {setNum}</span>
          <a target="_blank" href={setUrl} className="font-bold text-blue-500">link</a>
        </div>
    </div>
  )
}