import './AddToCart.css'
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast'


export function AddtoCart() {

    const navigateToPricePage = useNavigate();

    function handleNavigateCheckout() {
        navigateToPricePage(`/checkout/${uuidv4()}`)
    }


    function handleClick() {
        toast.success('Redirecting to payments');
    }



    const dataHere = useSelector(state => state.cartsadd.addTocart);
    console.log(dataHere);

    // const addToCartMen = useSelector(state => state.cartsadd.addTocart)

    return (
        <>
            <div className="main_container_cart">
                <p>Add To Cart</p>
            </div>

            <div className="main_add_to_cart">
                {
                    dataHere.map(itemsData => (
                        <div key={itemsData.id} className="sub_add_to_cart_real">
                            <p>{itemsData.names}</p>
                            <h3>{itemsData.price}</h3>
                            <div>
                                <button onClick={() => handleNavigateCheckout(itemsData)} onClickCapture={handleClick}>Checkout</button>
                                <Toaster />
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}


