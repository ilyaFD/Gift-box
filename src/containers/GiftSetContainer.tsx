import React from 'react';
import { observer } from "mobx-react";
import { useStore } from "../stores/";
import { GiftSet } from "../components/";
import { getMinifigs } from '../models'
import { Modal, ItemDetails } from "../components"

export const GiftSetContainer: React.FC = observer(() => {
    const [open, setOpen] = React.useState(false)
    const [title, setTitle] = React.useState('Loading ...')
    const store = useStore();
    const {items, setItems, selectedItemID, setSelectedItemID, focusedItemID, setFocusedItemID} = store;
    const focusedItem = items.find(item => item.set_num === focusedItemID)

    React.useEffect(() => {
        (async () => {
            const res = await getMinifigs()
            if (res.message) {
                setTitle(res.message)
            } else {
                setTitle('Choose your minifig')
                setItems(res.minifigs)
            }
        })()
    }, [setItems]);

    const setFocusHendler = (val: string) => {
        setFocusedItemID(val)
        setOpen(true)
    }


    return (
        <>
            <GiftSet
                title={title}
                items={items}
                selectedItemID={selectedItemID}
                setSelectedItemID={setSelectedItemID}
                setFocusedItemID={setFocusHendler}
            />
            <Modal open={open} setOpen={setOpen}>
                {
                    focusedItem ? 
                        <ItemDetails
                            name={focusedItem.name}
                            numParts={focusedItem.num_parts}
                            setImgUrl={focusedItem.set_img_url}
                            setNum={focusedItem.set_num}
                            setUrl={focusedItem.set_url}
                        />
                    :
                        <></>
                }
            </Modal>
        </>
    );
})