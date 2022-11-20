import React from 'react';
import { useStore } from "../stores";
import { postForm } from "../models";
import { Order, UILoader, Modal } from "../components";
import { OrderForm } from "../forms";
import { useNavigate } from "react-router-dom";

export const OrderContainer: React.FC = () => {
    const [loading, setLoading] = React.useState(false)
    const [open, setOpen] = React.useState(false)
    const store = useStore();
    const {items, selectedItemID, setItems, setSelectedItemID, setOpenedItemID} = store;
    const navigate = useNavigate();

    const hooks = {
        async onSuccess(form: any) {
            setLoading(true)
            await postForm(form.values())
            form.clear()
            setOpen(true)
            setLoading(false)
        }
    };

    const form = OrderForm(hooks);

    const item = items.find(item => item.set_num === selectedItemID)

    const clearStore = (): void => {
        setItems([])
        setSelectedItemID('')
        setOpenedItemID('')
    }

    const modalHendler = (): void => {
        setOpen(false)
        navigate('/')
        clearStore()
    }

    return (
        <>
            <UILoader open={loading} />
            {
                item ?
                    <Order
                        form={form}
                        item={item}
                    />
                :
                    null
            }
            <Modal open={open} setOpen={modalHendler}>
                <p className="font-bold text-2xl md:text-3xl p-4 text-blue-300">Success!</p>
            </Modal>
        </>
    );
}