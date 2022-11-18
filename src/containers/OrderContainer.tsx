import React from 'react';
import { useStore } from "../stores";
import { Order } from "../components";
import { OrderForm } from "../forms";

export const OrderContainer: React.FC = () => {
    const store = useStore();
    const {items, selectedItemID} = store;
    const form = OrderForm();

    const item = items.find(item => item.set_num === selectedItemID)

    console.log(form)


    return (
        <>
            {
                item ?
                    <Order
                        form={form}
                        item={item}
                    />
                :
                    null
            }
        </>
    );
}