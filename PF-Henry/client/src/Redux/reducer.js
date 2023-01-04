import {
  GET_PRODUCT_DETAIL,
  GET_REVIEWS,
  CLEAR_PAGE_PRODUCT_DETAIL,
  GET_PRODUCTS,
  GET_CATEGORIES,
  GET_ORDERS,
  PUT_USER,
  GET_USERS, POST_REVIEW,
  MP_CHECKOUT,
  ADD_TO_CART,
  DELETE_FROM_CART,
  ADD_FAV,
  DELETE_REVIEW,
} from "./actions";


const initialState = {
  allBuyers: [], // Administrativos
  buyerDetail: {}, // Administrativos
  allProducts: [],
  productDetail: {},
  reviews: [],
  allCategories: [],
  allOrders: [],
  orderDetail: {},
  allUsers: [],
  cart: [],
  postReview: {},
  ProductFav: []
};

if (localStorage.getItem("cart")) {
  initialState.cart = JSON.parse(localStorage.getItem("cart"));
} else {
  initialState.cart = [];
}

export const rootReducer = (state = initialState, action) => {
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

    case GET_REVIEWS:
      return {
        ...state,
        reviews: action.payload.reverse(),

      };

    case CLEAR_PAGE_PRODUCT_DETAIL:
      return {
        ...state,
        productDetail: {},
        reviews: []
      };

    case GET_CATEGORIES:
      return {
        ...state,
        allCategories: action.payload,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case DELETE_FROM_CART:
      return {
        ...state,
        cart: action.payload,
      }
    case GET_ORDERS:
      return {
        ...state,
        allOrders: action.payload,
      };
    case GET_USERS:
      return {
        ...state,
        allUsers: action.payload,
      };
    case PUT_USER:
      return {
        ...state,
      };

    case MP_CHECKOUT:
      return {
        ...state,
        cart: [],
      };
    case POST_REVIEW:
      return {
        ...state,
        postReview: action.payload
      }
    case ADD_FAV:
      return {
        ...state,
        ProductFav: [...state.ProductFav, action.payload]
      }
    case DELETE_REVIEW:
      return {
        ...state,
        reviews: state.reviews.filter(r => r.id !== action.payload)
      }

    default:
      return state;
  }
};

export default rootReducer;
