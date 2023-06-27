import { Fragment } from 'react';
import './MenFashion.css';
import { menData } from './MenFashionData';
import { Button } from '@mui/material';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { addToCartMen } from '../../../Store/Data';

export function MenFashion() {

    const dispatch = useDispatch()

    function addtoCartMen(items) {
        dispatch(addToCartMen(items))
    }

    function handleClickToast() {
        toast.success('Added to cart')
    }

    return (
        <Fragment>
            <div className="main_container_men">
                <p>Shop Men</p>
            </div>

            <div className="sub_new_drops_cards">
                {
                    menData.map(cardsItems => (
                        <div className='sub_container_drops_two' key={cardsItems.id}>
                            <img src={cardsItems.images} alt="" />
                            <p>{cardsItems.names}</p>
                            <h3>{cardsItems.price}</h3>
                            <div className='btn_add'>
                                <Button variant='outlined' onClick={handleClickToast}
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


