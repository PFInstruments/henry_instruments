import { GET_PRODUCT_DETAIL, CLEAR_PAGE_PRODUCT_DETAIL, GET_PRODUCTS } from "./actions";

const intialState = {
  allBuyers: [],   // Administrativos
  buyerDetail: {},  // Administrativos
  allProducts: [],
  productDetail: {},
  allCategories: [],
  allOrders: [],
  orderDetail: {},
};

export const rootReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
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
