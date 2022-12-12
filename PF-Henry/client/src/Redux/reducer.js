import { GET_PRODUCT_DETAIL, CLEAR_PAGE_PRODUCT_DETAIL, GET_PRODUCTS, GET_CATEGORIES, GET_ORDERS } from "./actions";

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

    case GET_CATEGORIES:
      return{
        ...state,
        allCategories: action.payload
      };

    case GET_ORDERS:
      return{
        ...state,
        allOrders: action.payload
      }

    default:
      return state;
  }
};

export default rootReducer;
