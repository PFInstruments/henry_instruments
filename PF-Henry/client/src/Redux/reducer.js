import {
    ADD_TO_CART,
    DELETE_FROM_CART
} from "./constants";


const initialState = {
    allBuyers: [],
    buyerDetail: {},
    allProducts: [],
    productDetail: {},
    allCategories: [],
    allOrders: [],
    orderDetail: {},
    admin: [],
    store: [],
    cart: [],
};

if (localStorage.getItem("cart")) {
    initialState.cart = JSON.parse(localStorage.getItem("cart"));
} else {
    initialState.cart = [];
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            return {
                ...state,
                allProducts: action.payload,
            };
        case ADD_TO_CART:
            return {
                cart: [...action.payload]
            };
        case DELETE_FROM_CART:
            return {
                cart: [...action.payload]
            }

        default:
            return state;
    }

};

export default rootReducer;
