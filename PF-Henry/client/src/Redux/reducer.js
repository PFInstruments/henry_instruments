const intialState = {
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

export const rootReducer = (state = intialState, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            return {
                ...state,
                allProducts: action.payload,
            };

        default:
            return state;
    }
};

export default rootReducer;
