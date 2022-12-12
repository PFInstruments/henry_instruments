

import {
    ADD_TO_CART,
    DELETE_FROM_CART
} from "./constants";

export const addToCart = product => async dispatch => {
    const cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart"))
    : []

    const duplicates = cart.filter(cartItem => cartItem.id === product.id)

    if (duplicates.length === 0) {
        const productToAdd = {
            ...product,
            count: 1
        }

        cart.push(productToAdd)
        localStorage.setItem("cart", JSON.stringify(cart))
        dispatch({
            type: ADD_TO_CART,
            payload: cart,
        })
    }
};

export const deleteFromCart = product => async dispatch => {
    const cart = localStorage.getItem("cart") 
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

    const updatedCart = cart.filter(cartItem => cartItem.id !== product.id)

    localStorage.setItem("cart", JSON.stringify(updatedCart))

    dispatch({
        type: DELETE_FROM_CART,
        payload: updatedCart,
    })
}

