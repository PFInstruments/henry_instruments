import axios from "axios";

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCT_DETAIL = "GET_PRODUCT_DETAIL";
export const CLEAR_PAGE_PRODUCT_DETAIL = "CLEAR_PAGE_PRODUCT_DETAIL";
export const GET_CATEGORIES = 'GET_CATEGORIES'


const urlP = 'http://localhost:3001/products/';

export const getProducts=()=>{
  return async function (dispatch){
    try {
        const instruments = await axios.get(urlP);
        return dispatch({ 
            type: GET_PRODUCTS,
            payload: instruments.data
        });
    } catch (error) {
        console.log(error.message);
    }
  }
}

export const getProductDetail=(productoId)=>{
    return async function (dispatch) {
        try {
            const detail = await axios.get(`http://localhost:3001/products/${productoId}`);
            const rating = await axios.get(`http://localhost:3001/review/rating/${productoId}`);
            const coments = await axios.get(`http://localhost:3001/review/${productoId}`)
            return dispatch({
                type: GET_PRODUCT_DETAIL,
                payload: {
                    ...detail.data,
                    rating: rating.data.rating,
                    coments: coments.data
                    /*
                    name: "guitar",
                    rating: "5",
                    descipcion: "detail description",
                    price: "220",
                    stock: "21",
                    */
                },

            });
        } catch (error) {
            console.log(error.message);
        }
    };
}

export const clearPageProductDetail=()=>{
    return {
        type: CLEAR_PAGE_PRODUCT_DETAIL,
    }
}

export const getCategories=()=>{
    return async function(dispatch){
        try {
            const categories = await axios.get(``);
            return dispatch({
                type: GET_CATEGORIES,
                payload: categories.data
            });
        } catch (error) {
            console.log(error.message);
        }
    }
}
