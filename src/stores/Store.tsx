import React from "react";
import { makeAutoObservable } from "mobx";
import { IMinifig } from "../models/";

export interface IItem {
  id: string;
}

export interface IStore {
  items: Array<IMinifig> 
  selectedItemID: string
  focusedItemID: string
  setItems: (items: Array<IMinifig>) => void
  setSelectedItemID: (id: string) => void
  setFocusedItemID: (id: string) => void
}

export class Store implements IStore {
  items = [] as Array<IMinifig>;
  selectedItemID = '';
  focusedItemID = '';

  constructor() {
    this.setItems = this.setItems.bind(this)
    this.setSelectedItemID = this.setSelectedItemID.bind(this)
    this.setFocusedItemID = this.setFocusedItemID.bind(this)
    makeAutoObservable(this);
  }

  setItems(items: Array<IMinifig>) {
    this.items = items
  }

  setSelectedItemID(id: string) {
    this.selectedItemID = id
  }

  setFocusedItemID(id: string) {
    this.focusedItemID = id
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

