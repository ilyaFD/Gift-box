import React from "react"
import { IMinifig } from "../../types/"
import { UITitle, UIButton } from "../../components/"
import { Item } from "../"

interface ITabListProps {
  items: Array<IMinifig>
  selectedItemID: string
  setSelectedItemID: (id: string) => void
  openDetails: (set_num: string) => void
  loading: boolean,
  message: string
};
  
export const GiftSet: React.FC<ITabListProps> = ({
  items,
  selectedItemID,
  setSelectedItemID,
  openDetails,
  loading,
  message
}) => {
  return (
    <div className="p-4 container mx-auto flex justify-center items-center flex-col min-h-screen text-center ">
      <UITitle text={(message && message) || "Choose your minifig"} />
      <div className={`max-w-full mb-4 sm:mb-16 flex flex-col sm:flex-row`}>
        {items.map((item, index) => (
          <div className="w-full sm:w-1/3 px-3 mb-6 max-w-xs self-center" key={index + item.set_num}>
            <Item
              set_num={item.set_num}
              set_img_url={item.set_img_url}
              name={item.name}
              selectedItemID={selectedItemID}
              setSelectedItemID={setSelectedItemID}
              openDetails={openDetails}
              loading={loading}
            />
          </div>
        ))}
      </div>
      <UIButton label="let's go!" url="/order" disabled={!selectedItemID || loading}/>
    </div>
  )
}