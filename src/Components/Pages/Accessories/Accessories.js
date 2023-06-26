import './Accessories.css';
import { accessoriesData1 } from './AccessoriesData2';
export function Accessories() {
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
                        </div>
                    ))}
            </div>



        </>
    )
}


