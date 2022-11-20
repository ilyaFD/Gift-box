import React from 'react'
import { observer } from 'mobx-react';
import { ItemDetails, UITitle, UIInput, UIButton } from "../../components"
import { IMinifig } from "../../types";


interface ITabListProps {
  form: any
  item: IMinifig
};

export const Order: React.FC<ITabListProps> = observer(({form, item}) => {

  return (
    <div className="p-4 container mx-auto flex items-center min-h-screen max-w-6xl flex-col sm:flex-row">
      <form className="w-full sm:w-2/3 sm:pr-12 order-2 sm:order-1">
        <UITitle text="Shiping details"/>
        <div className="grid sm:gap-4 sm:grid-cols-2">
          <UIInput field={form.$('name')}/>
          <UIInput field={form.$('surname')}/>
        </div>
        <UIInput field={form.$('phone')}/>
        <UIInput field={form.$('email')}/>
        <UIInput type="date" field={form.$('dob')}/>
        <UIInput field={form.$('adress')}/>
        <UIInput field={form.$('city')}/>
        <div className="gridsm:gap-4 sm:grid-cols-2">
          <UIInput field={form.$('state')}/>
          <UIInput field={form.$('zip')}/>
        </div>
        <div className="mt-5">
          <UIButton
            label="submit"
            disabled={form.hasError}
            onClick={(e) => form.onSubmit(e)}
          />
        </div>
      </form>
      <div className="w-full sm:w-1/3 rounded-xl mb-8 sm:mb-0 border border-slate-300 order-1 sm:order-2">
        <ItemDetails
          name={item.name}
          numParts={item.num_parts}
          setImgUrl={item.set_img_url}
          setNum={item.set_num}
          setUrl={item.set_url}
          parts={item.parts}
          partsMessage={item.partsMessage}
          column
        />
      </div>
    </div>
  )
})