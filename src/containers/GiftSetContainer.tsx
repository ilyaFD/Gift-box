import React from 'react';
import { observer } from "mobx-react";
import { useStore } from "../stores/";
import { GiftSet, UILoader, Modal, ItemDetails } from "../components/";
import { getMinifigs, getParts, isExistParts, getMultipleRandom } from '../models'

export const GiftSetContainer: React.FC = observer(() => {
    // Page state
    const [open, setOpen] = React.useState(false)
    const [loading, setLoading] = React.useState(true)
    const [message, setMessage] = React.useState('')

    const store = useStore();
    const {
        items,
        setItems,
        setItemsParts,
        selectedItemID,
        setSelectedItemID,
        openedItemID,
        setOpenedItemID,
    } = store;
    const openedItem = items.find(item => item.set_num === openedItemID)
    
    React.useEffect(() => {
        (async () => {
            const res = await getMinifigs()
            if (res.message) {
                setMessage(res.message)
                setLoading(false)
            } else {
                setItems(getMultipleRandom(res.minifigs, 3))
                setLoading(false)
            }
        })()
    }, [setItems]);
    
    React.useEffect(() => {
        if (selectedItemID) {
            if (!isExistParts(items, selectedItemID)) {
                (async () => {
                    setLoading(true)
                    const res = await getParts(selectedItemID)
                    setItemsParts(selectedItemID, res.parts, res.message)
                    setLoading(false)
                })()
            }
        }
    }, [selectedItemID, setItemsParts, items]);

    const openDetails = async (set_num: string) => {
        setOpenedItemID(set_num)
        if (!isExistParts(items, set_num)) {
            setLoading(true)
            const res = await getParts(set_num)
            setItemsParts(set_num, res.parts, res.message)
            setLoading(false)
            setOpen(true)
        } else {
            setOpen(true)
        }
    }

    return (
        <>
            <UILoader open={loading} />
            <GiftSet
                items={items}
                selectedItemID={selectedItemID}
                setSelectedItemID={setSelectedItemID}
                openDetails={openDetails}
                loading={loading}
                message={message}
            />
            <Modal open={open} setOpen={setOpen}>
                {
                    openedItem ? 
                        <ItemDetails
                            name={openedItem.name}
                            numParts={openedItem.num_parts}
                            setImgUrl={openedItem.set_img_url}
                            setNum={openedItem.set_num}
                            setUrl={openedItem.set_url}
                            parts={openedItem.parts}
                            partsMessage={openedItem.partsMessage}
                        />
                    :
                        <></>
                }
            </Modal>
        </>
    );
})