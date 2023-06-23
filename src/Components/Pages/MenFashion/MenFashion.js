import { Fragment } from 'react';
import './MenFashion.css';
import { menData } from './MenFashionData';

export function MenFashion() {
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
                        </div>
                    ))}
            </div>

        </Fragment>
    )
}


