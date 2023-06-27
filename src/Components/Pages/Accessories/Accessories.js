import './Accessories.css';
import { accessoriesData1 } from './AccessoriesData2';
import { Button } from '@mui/material';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { addToCartAccessories } from '../../../Store/Data';

export function Accessories() {

    const dispatch = useDispatch()

    function addtoCartMen(items) {
        dispatch(addToCartAccessories(items))
    }

    function handleClickAccessories() {
        toast.success('Added to cart')
    }

    return (
        <>
            <div className="main_container_access">
                <p>Shop Accessories</p>
            </div>

            <div className="sub_new_drops_cards_aces">
                {
                    accessoriesData1.map(cardsItemsAccess => (
                        <div className='sub_container_drops_three' key={cardsItemsAccess.id}>
                            <img src={cardsItemsAccess.images} alt="" />
                            <p>{cardsItemsAccess.names}</p>
                            <h3>{cardsItemsAccess.price}</h3>
                            <div className='btn_add'>
                                <Button variant='outlined' onClick={handleClickAccessories}
                                    onClickCapture={() => addtoCartMen(cardsItemsAccess)}
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



        </>
    )
}


