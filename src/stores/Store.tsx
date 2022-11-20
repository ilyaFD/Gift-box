import React from "react";
import { makeAutoObservable } from "mobx";
import { IMinifig, IPart } from "../types";

export interface IItem {
  id: string;
}

export interface IStore {
  items: Array<IMinifig> 
  selectedItemID: string
  openedItemID: string
  setItems: (items: Array<IMinifig>) => void
  setItemsParts: (setNum: string, parts?: Array<IPart>, partsMessage?: string) => void
  setSelectedItemID: (id: string) => void
  setOpenedItemID: (id: string) => void
}

export class Store implements IStore {
  items = [] as Array<IMinifig>;
  selectedItemID = '';
  openedItemID = '';

  constructor() {
    this.setItems = this.setItems.bind(this)
    this.setItemsParts = this.setItemsParts.bind(this)
    this.setSelectedItemID = this.setSelectedItemID.bind(this)
    this.setOpenedItemID = this.setOpenedItemID.bind(this)
    makeAutoObservable(this);
  }

  setItems(items: Array<IMinifig>) {
    this.items = items
  }

  setItemsParts(setNum: string, parts?: Array<IPart>, partsMessage?: string) {
    if (partsMessage) {
      this.items = this.items.map(item => {
        return item.set_num === setNum && partsMessage ?
          {
            ...item,
            partsMessage: partsMessage
          }
        :
          item
      })
    } else {
      this.items = this.items.map(item => {
          return item.set_num === setNum && parts ?
            {
              ...item,
              parts: parts
            }
          :
            item
      })
    }
  }

  setSelectedItemID(id: string) {
    this.selectedItemID = id
  }

  setOpenedItemID(id: string) {
    this.openedItemID = id
  }
}

/* Store provider */
const StoreContext = React.createContext({} as IStore); 

type StoreComponent = React.FC<{
  store: IStore;
  children: React.ReactNode;
}>;

export const StoreProvider: StoreComponent = ({children, store}): React.ReactElement => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  )
}

/* Hook to use store in any functional component */
export const useStore = (): IStore => React.useContext(StoreContext);

