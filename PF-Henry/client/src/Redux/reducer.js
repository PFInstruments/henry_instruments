import { GET_PRODUCT_DETAIL, CLEAR_PAGE_PRODUCT_DETAIL, GET_PRODUCTS, GET_CATEGORIES, GET_ORDERS, PUT_USER, GET_USERS } from "./actions";
import { ADD_TO_CART,DELETE_FROM_CART } from "./constants";

const intialState = {
  allBuyers: [],   // Administrativos
  buyerDetail: {},  // Administrativos
  allProducts: [],
  productDetail: {},
  allCategories: [],
  allOrders: [],
  orderDetail: {},
  allUsers: [],
  cart: [],
};

if(localStorage.getItem("cart")) {
    intialState.cart = JSON.parse(localStorage.getItem("cart"));
} else {
    intialState.cart = [];
}

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
    case ADD_TO_CART:
        return {
            cart: [...action.payload]
        };
    case DELETE_FROM_CART:
        return {
            cart: [...action.payload]
        }
    case GET_ORDERS:
      return{
        ...state,
        allOrders: action.payload
      }
    case GET_USERS:
      return{
        ...state,
        allUsers: action.payload
      }
    case PUT_USER:
      return{
        ...state
      }

    default:
      return state;
  }
};

export default rootReducer;
