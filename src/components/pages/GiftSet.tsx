import React from "react"
import { NavLink } from "react-router-dom"
import { IMinifig } from "../../models/"
import { Item } from "../"

interface ITabListProps {
  title: string
  items: Array<IMinifig>
  selectedItemID: string
  setSelectedItemID: (id: string) => void
  setFocusedItemID: (id: string) => void
};
  
export const GiftSet: React.FC<ITabListProps> = ({
  title,
  items,
  selectedItemID,
  setSelectedItemID,
  setFocusedItemID
}) => {
  return (
    <div className="p-4 container mx-auto flex justify-center items-center flex-col min-h-screen">
      <h1 className="text-2xl uppercase font-extrabold mb-16">{title}</h1>
      <div className="gap-10 columns-3 max-w-4xl mb-16 text-center">
        {items.map((item, index) => (
          <Item
            key={index + item.set_num}
            set_num={item.set_num}
            set_img_url={item.set_img_url}
            name={item.name}
            selectedItemID={selectedItemID}
            setSelectedItemID={setSelectedItemID}
            setFocusedItemID={setFocusedItemID}
          />
        ))}
      </div>
      <NavLink
        to="/order"
        onClick={(e) => !selectedItemID && e.preventDefault()}
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded uppercase ${!selectedItemID ? " bg-slate-300 hover:bg-slate-300 cursor-default" : ""}`}
      >
        let's go!
      </NavLink>
    </div>
  )
}