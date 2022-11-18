import React from 'react'
const Placeholder =  require("../../../assets/placeholder.png")

interface IItem {
    set_num: string
    set_img_url: string
    name: string
    selectedItemID: string
    setSelectedItemID: (id: string) => void
    setFocusedItemID: (id: string) => void
};

export const Item: React.FC<IItem> = ({
    set_num,
    set_img_url,
    name,
    selectedItemID,
    setSelectedItemID,
    setFocusedItemID
}) => {

    const detailsHendler = (e: React.MouseEvent, set_num: string) => {
        e.stopPropagation()
        setFocusedItemID(set_num)
    }
    
    return (
        <div
            className={`border border-slate-300 cursor-pointer rounded-2xl overflow-hidden h-92 p-5 flex flex-col ${selectedItemID === set_num ? "outline outline-4 outline-blue-300" : ""}`}
            onClick={() => setSelectedItemID(set_num)}
        >
            <img
                className={`h-44 w-full object-contain mb-4 ${!set_img_url ? "opacity-25" : ""}`}
                src={set_img_url ? set_img_url : Placeholder}
                alt={name}
            />
            <p className="font-bold mb-4 truncate text-slate-600">{name}</p>
            <button
                className="font-extrabold text-blue-500 uppercase text-xs"
                onClick={e => detailsHendler(e, set_num)}
            >
                Show details
            </button>
        </div>
    )
}