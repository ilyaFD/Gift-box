import React from 'react'
import { IPart } from '../../../types'
import { ItemDetailsParts } from "./"
const Placeholder =  require("../../../assets/placeholder.png")

interface IItemDetails {
  name: string
  numParts: number
  setImgUrl: string
  setNum: string
  setUrl: string
  parts: Array<IPart>
  partsMessage: string
  column?: boolean
};

export const ItemDetails: React.FC<IItemDetails> = ({
    name,
    numParts,
    setImgUrl,
    setNum,
    setUrl,
    parts,
    partsMessage,
    column
}) => {
  
  return (
    <div className={`p-6 md:p-8 lg:p-10 flex flex-col sm:flex-row ${column && "flex-col sm:flex-col"}`}>
        <img
            className={`self-center object-contain max-h-56 w-full ${!setImgUrl ? "opacity-25" : ""} ${column ? "sm:w-full mb-4" : "mb-3 sm:mb-0 sm:w-2/5"}`}
            src={setImgUrl ? setImgUrl : Placeholder}
            alt={name}
        />
        <div className={`flex flex-col w-full ${column ? "sm:w-full" : "sm:w-3/5 sm:pl-4"}`}>
          <p className="text-md lg:text-xl uppercase font-bold mb-3 sm:mb-4 text-gray-700 leading-5">{name}</p>
          <span className="font-bold truncate text-slate-600 mb-1 sm:mb-2">ID: {setNum}</span>
          <span className="font-bold truncate text-slate-600 mb-1 sm:mb-2">URL: 
            <a target="_blank" rel="noopener noreferrer" href={setUrl} className="font-bold text-blue-500"> link</a>
          </span>
          <span className="font-bold truncate text-slate-600 mb-1 sm:mb-2">Inventory: {numParts}</span>
          <span className="font-bold truncate text-slate-600 mb-1 sm:mb-2">Minifig parts:</span>
          <div>
            {
              partsMessage ?
                <p className="truncate text-slate-600">{partsMessage}</p>
              :
                <ItemDetailsParts parts={parts}/>
            }
          </div>
        </div>
    </div>
  )
}