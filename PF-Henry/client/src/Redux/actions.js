import axios from "axios";
import {
    ADD_TO_CART,
    DELETE_FROM_CART
} from "./constants";
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCT_DETAIL = "GET_PRODUCT_DETAIL";
export const CLEAR_PAGE_PRODUCT_DETAIL = "CLEAR_PAGE_PRODUCT_DETAIL";
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_ORDERS = 'GET_ORDERS';
//export const GET_ORDERS_USER = ' GET_ORDERS_USER';



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

export const getProducts = () => {
    return async function (dispatch) {
        try {
            const instruments = await axios.get('/products/');
            return dispatch({
                type: GET_PRODUCTS,
                payload: instruments.data
            });
        } catch (error) {
            console.log(error.message);
        }
    }
}

export const getProductDetail = (productoId) => {
    return async function (dispatch) {
        try {
            const detail = await axios.get(`/products/${productoId}`);
            // const rating = await axios.get(`/review/rating/${productoId}`);
            const coments = await axios.get(`/review/${productoId}`)
            return dispatch({
                type: GET_PRODUCT_DETAIL,
                payload: {
                    ...detail.data,
                    // rating: rating.data[0].rating,
                    coments: coments.data
                },
            });
        } catch (error) {
            console.log(error.message);
        }
    };
}

export const clearPageProductDetail = () => {
    return {
        type: CLEAR_PAGE_PRODUCT_DETAIL,
    }
}

export const getCategories = () => {
    return async function (dispatch) {
        try {
            const categories = await axios.get(`/category`);
            return dispatch({
                type: GET_CATEGORIES,
                payload: categories.data
            });
        } catch (error) {
            console.log(error.message);
        }
    }
}

export const getAllOrders = () => {
    return async function (dispatch) {
        try {
            const orders = await axios.get(`/orders/`);
            return dispatch({
                type: GET_ORDERS,
                payload: orders.data
            })
        } catch (error) {
            console.log(error.message);
        }
    }
}

/*export const getOrderByUser = (userId) =>{
    return async function(dispatch) {
        try {
            const orders = await axios.get(`/orders/?userId=${userId}`);
            return dispatch({
                type: GET_ORDERS_USER,
                payload: orders.data
            })
        } catch (error) {
            console.log(error.message);
        }
    }
}*/
