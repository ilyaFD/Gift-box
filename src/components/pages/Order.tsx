import React from 'react'
import { observer } from 'mobx-react';
import { IMinifig } from "../../models/";


interface ITabListProps {
  form: any
  item: IMinifig
};

export const Order: React.FC<ITabListProps> = observer(({form, item}) => {
  console.log(item)
  const mockedItem = {
    last_modified_dt: "2020-04-30T06:04:42.346838Z",
    name: "Harry Potter, Open Dark Blue Jacket over White Shirt, Dark Bluish Gray Legs",
    num_parts: 4,
    set_img_url:"https://cdn.rebrickable.com/media/sets/fig-000029/60572.jpg",
    set_num: "fig-000029",
    set_url: "https://rebrickable.com/minifigs/fig-000029/harry-potter-open-dark-blue-jacket-over-white-shirt-dark-bluish-gray-legs/"
}
  return (
    <div className="p-4 container mx-auto flex justify-center items-center min-h-screen">
      <form className="bg-gray-500">
        <h1>Order</h1>
        <div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor={form.$('name').id}
              className="block text-sm font-medium text-gray-700"
            >
              First name
            </label>
            <input
              type="text"
              name="first-name"
              id={form.$('name').id}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>
      </form>
      <div></div>
    </div>
  )
})