import axios from 'axios';
export const GET_PRODUCTS = 'GET_PRODUCTS';


const urlP = 'http://localhost:3001/products';

export const getProducts = () => async (dispatch) => {
    try {
        const { data } = await axios.get(urlP);
        return dispatch({ 
            type: GET_PRODUCTS, 
            payload: data 
        });
    } catch (error) {
        console.log(error);
    }
}
