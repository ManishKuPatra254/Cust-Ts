import './UpcomingGallery.css';
import { useDispatch } from 'react-redux';
import { upcomingData } from './UpcomingGalleryData';
import { cardsfromMain } from '../Store/Data';

export function UpcomingGalleryNew() {
    const dispatch = useDispatch();


    function handleSaveData(item) {
        dispatch(cardsfromMain(item))
    }

    return (
        <>
            <h1 className='heading_tag'>New Drops</h1>
            <div className='sub_new_drops_card'>
                {
                    upcomingData.map(items => (
                        <div className='sub_new_drops_card_one' key={items.id}>
                            <img src={items.images} alt="error" />
                            <p>{items.names}</p>
                            <h3>{items.price}</h3>
                            <button onClick={() => handleSaveData(items)}>Add to cart</button>
                        </div>
                    ))
                }
            </div>


        </>
    )
}

