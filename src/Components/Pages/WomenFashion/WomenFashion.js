import { Fragment } from "react";
import './WomenFashion.css';
import { womenData } from "./WomenData";

export function WomenFashion() {
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
                        </div>
                    ))}
            </div>
        </Fragment>
    )
}

