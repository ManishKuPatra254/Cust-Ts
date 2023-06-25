import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import './Checkout.css'
// import { useParams } from 'react-router-dom';


export function Checkout() {

    // const { id } = useParams()

    const cardItemsComeHere = useSelector(state => state.cartsadd.addTocart);


    return (
        <Fragment>
            <div className="main_container_cart">
                <p> Checkout</p>
            </div>
            <div className="main_checkout_me">
                {
                    cardItemsComeHere.map(itemsCard => (
                        <div key={itemsCard.id} className='checkout_me'>
                            <p>{itemsCard.names}</p>
                            <h3>{itemsCard.price}</h3>
                            <button>Pay now</button>
                        </div>
                    ))
                }
            </div>
        </Fragment>
    )
}

