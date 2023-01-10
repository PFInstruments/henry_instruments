import {
  GET_PRODUCT_DETAIL,
  GET_REVIEWS,
  CLEAR_PAGE_PRODUCT_DETAIL,
  GET_PRODUCTS,
  GET_CATEGORIES,
  GET_ORDERS,
  PUT_USER,
  GET_USERS,
  GET_USER,
  POST_REVIEW,
  // MP_CHECKOUT,
  ADD_TO_CART,
  DELETE_FROM_CART,
  ADD_FAV,
  DELETE_REVIEW,
  CHECKOUT_ADD,
  STORE_UPDATE
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
  user: {},
  cart: [],
  postReview: {},
  fav: [],
  globalStore: []
};

if (localStorage.getItem("cart")) {
  initialState.cart = JSON.parse(localStorage.getItem("cart"));
} else {
  initialState.cart = [];
}

if (localStorage.getItem("fav")) {
  initialState.fav = JSON.parse(localStorage.getItem("fav"));
} else {
  initialState.fav = [];
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
        reviews: [],
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
      };
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
      case GET_USER:
        return {
          ...state,
          user: action.payload,
        }
    case PUT_USER:
      return {
        ...state,
      };

    /*case MP_CHECKOUT:
      return {
        ...state,
        cart: [],
      };*/
    case POST_REVIEW:
      return {
        ...state,
        postReview: action.payload,
      };
    case ADD_FAV:
      return {
        ...state,
        fav: [...state.fav, action.payload]
      }
    case DELETE_REVIEW:
      return {
        ...state,
        reviews: state.reviews.filter(r => r.id !== action.payload)
      }
    case CHECKOUT_ADD:
      return {
        ...state,
        cart: [],
      }
    case STORE_UPDATE:
      return {
        ...state,
        globalStore: action.payload
      }

    default:
      return state;
  }
};

export default rootReducer;
