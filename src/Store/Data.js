import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    addTocart: [],
}

const cart = createSlice({
    name: 'cartsadd',
    initialState,
    reducers: {
        cardsfromMain: (state, action) => {
            const dataShift = action.payload;
            // console.log(dataShift)
            const newDataCheck = state.addTocart.find(items => items.id === dataShift.id)
            if (newDataCheck === undefined) {
                state.addTocart.push(action.payload)
                alert('Added to cart ✌️')
            }
            else {
                alert('Already Added 👌');
            }
        },
    },
});

export const { cardsfromMain } = cart.actions
export default cart;