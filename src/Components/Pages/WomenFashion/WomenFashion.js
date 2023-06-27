import { Fragment } from "react";
import './WomenFashion.css';
import { womenData } from "./WomenData";
import { addToCartWomen } from "../../../Store/Data";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import toast, { Toaster } from 'react-hot-toast';

export function WomenFashion() {

    const dispatch = useDispatch()

    function addtoCartMen(items) {
        dispatch(addToCartWomen(items))
    }

    function handleClickEventWomen() {
        toast.success('Added to cart')
    }

    return (
        <Fragment>
            <div className="main_container_women">
                <p>Shop Women</p>
            </div>
            <div className="sub_new_drops_cards">
                {
                    womenData.map(cardsItems => (
                        <div className='sub_container_drops_two' key={cardsItems.id}>
                            <img src={cardsItems.images} alt="" />
                            <p>{cardsItems.names}</p>
                            <h3>{cardsItems.price}</h3>
                            <div className='btn_add'>
                                <Button variant='outlined' onClick={handleClickEventWomen}
                                    onClickCapture={() => addtoCartMen(cardsItems)}
                                    sx={{
                                        color: 'black',
                                        border: '1px solid black',
                                        textTransform: 'unset'
                                    }}>Add to cart</Button>
                                <Toaster />
                            </div>
                        </div>
                    ))}
            </div>
        </Fragment>
    )
}

