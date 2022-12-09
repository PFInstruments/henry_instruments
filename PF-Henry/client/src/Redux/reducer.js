import { GET_PRODUCT_DETAIL, CLEAR_PAGE_PRODUCT_DETAIL } from "./actions";

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

    case GET_PRODUCT_DETAIL:
      return {
        ...state,
        productDetail: action.payload,
      };

    case CLEAR_PAGE_PRODUCT_DETAIL:
      return {
        ...state,
        productDetail: {},
      };

    default:
      return state;
  }
};

export default rootReducer;
