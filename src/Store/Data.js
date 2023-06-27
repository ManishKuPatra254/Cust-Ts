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

        addToCartMen: (state, action) => {
            const allData = action.payload;
            const ifCheckDataReceived = state.addTocart.find(newCarts => newCarts.id === allData.id)
            if (ifCheckDataReceived === undefined) {
                state.addTocart.push(action.payload)

            }
            else {
                alert('Not Done')
            }
        },
        addToCartWomen: (state, action) => {
            const allData = action.payload;
            const ifCheckDataReceived = state.addTocart.find(newCarts => newCarts.id === allData.id)
            if (ifCheckDataReceived === undefined) {
                state.addTocart.push(action.payload)

            }
            else {
                alert('Not Done')
            }
        },
        addToCartAccessories: (state, action) => {
            const allData = action.payload;
            const ifCheckDataReceived = state.addTocart.find(newCarts => newCarts.id === allData.id)
            if (ifCheckDataReceived === undefined) {
                state.addTocart.push(action.payload)

            }
            else {
                alert('Not Done')
            }
        },
    },
});

export const { cardsfromMain, addToCartMen, addToCartWomen, addToCartAccessories } = cart.actions
export default cart;