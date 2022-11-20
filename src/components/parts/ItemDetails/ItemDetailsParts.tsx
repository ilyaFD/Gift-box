import React from 'react'
import { IPart } from '../../../types'
const Placeholder =  require("../../../assets/placeholder.png")

interface IItemDetailsParts {
    parts: Array<IPart>
};

export const ItemDetailsParts: React.FC<IItemDetailsParts> = ({
    parts,
}) => {
  return (
    <>
        {
            parts?.map((part, index) => {
                return (
                    <div
                        key={`${index}${part.partNum}`}
                        className="flex items-center mb-1 sm:mb-2"
                    >
                        <img
                            className={`w-8 h-8 object-contain ${!part.partImgUrl ? "opacity-25" : ""}`}
                            src={part.partImgUrl ? part.partImgUrl : Placeholder}
                            alt={part.name}
                        />
                        <div className="overflow-hidden pl-4">
                            <p className="font-bold truncate text-slate-600 text-sm">{part.name}</p>
                            <span className="font-bold truncate text-sm text-slate-400">{part.partNum}</span>
                        </div>
                    </div>
                )
            })
        }
    </>
  )
}