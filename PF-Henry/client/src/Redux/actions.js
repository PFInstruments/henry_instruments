import axios from "axios";

export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCT_DETAIL = "GET_PRODUCT_DETAIL";
export const GET_REVIEWS = "GET_REVIEWS";
export const CLEAR_PAGE_PRODUCT_DETAIL = "CLEAR_PAGE_PRODUCT_DETAIL";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_ORDERS = "GET_ORDERS";
export const GET_USERS = "GET_USERS";
export const PUT_USER = "PUT_USER";
export const MP_CHECKOUT = "MP_CHECKOUT";
export const POST_REVIEW = "POST_REVIEW";
export const ADD_TO_CART = "ADD_TO_CART";
export const DELETE_FROM_CART = "DELETE_FROM_CART";
export const POST_CATEGORY = "POST_CATEGORY";
export const DELETE_CATEGORY = "DELETE_CATEGORY";
//export const GET_ORDERS_USER = ' GET_ORDERS_USER';
export const ADD_FAV = "ADD_FAV";
export const DELETE_REVIEW = "DELETE_REVIEW";
export const POST_PRODUCT = "POST_PRODUCT";
export const PUT_PRODUCT = "PUT_PRODUCT";
export const PUT_CATEGORY = "PUT_CATEGORY";

export const addToCart = (product) => async (dispatch) => {
  const cart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

  const duplicates = cart.filter((cartItem) => cartItem.id === product.id);

  if (duplicates.length === 0) {
    const productToAdd = {
      ...product,
      count: 1,
    };

    cart.push(productToAdd);
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({
      type: ADD_TO_CART,
      payload: cart,
    });
  }
};

export const deleteFromCart = (product) => async (dispatch) => {
  const cart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

  const updatedCart = cart.filter((cartItem) => cartItem.id !== product.id);

  localStorage.setItem("cart", JSON.stringify(updatedCart));

  dispatch({
    type: DELETE_FROM_CART,
    payload: updatedCart,
  });
};

export const getProducts = () => {
  return async function (dispatch) {
    try {
      const instruments = await axios.get("/products/");
      return dispatch({
        type: GET_PRODUCTS,
        payload: instruments.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getProductDetail = (productoId) => {
  return async function (dispatch) {
    try {
      const detail = await axios.get(`/products/${productoId}`);
      const rating = await axios.get(`/review/rating/${productoId}`);
      // const coments = await axios.get(`/review/${productoId}`);
      return dispatch({
        type: GET_PRODUCT_DETAIL,
        payload: {
          ...detail.data,
          rating: rating.data[0] ? Math.round(rating.data[0].rating) : "0",
          // coments: coments.data
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const clearPageProductDetail = () => {
  return {
    type: CLEAR_PAGE_PRODUCT_DETAIL,
  };
};

export const getCategories = () => {
  return async function (dispatch) {
    try {
      const categories = await axios.get(`/category`);
      return dispatch({
        type: GET_CATEGORIES,
        payload: categories.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const postCategory = (category) => {
  return async (dispatch) => {
    return await axios
      .post("/category", category)
      .then((res) => {
        dispatch({ type: POST_CATEGORY, payload: res.data });
      })
      .catch((error) => console.log(error));
  };
};

export const deleteCategory = (id) => {

  return async (dispatch) => {
    return await axios
      .delete(`/category/${id}`)
      .then((res) => {
        dispatch({ type: DELETE_CATEGORY, payload: res.data });
      })
      .catch((error) => console.log(error));
  };

};

export const getAllOrders = () => {
  return async function (dispatch) {
    try {
      const orders = await axios.get(`/orders/`);
      return dispatch({
        type: GET_ORDERS,
        payload: orders.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

/*export const getOrderByUser = (userId) =>{
    return async function(dispatch) {
        try {
            const orders = await axios.get(`/orders/?userId=${userId}`);
            return dispatch({
                type: GET_ORDERS_USER,
                payload: orders.data
            })
        } catch (error) {
            console.log(error.message);
        }
    }
}*/

export const getAllUsers = () => {
  return async function (dispatch) {
    try {
      const users = await axios.get("/users/");
      return dispatch({
        type: GET_USERS,
        payload: users.data.results,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const deleteUser = (id) => {
  return async function () {
    try {
      return axios.delete(`/users/${id}`);
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getReviews = (productoId) => {
  return async function (dispatch) {
    try {
      const detail = await axios.get(`/products/${productoId}`);
      // const rating = await axios.get(`/review/rating/${productoId}`);
      // const coments = await axios.get(`/review/${productoId}`);
      return dispatch({
        type: GET_REVIEWS,
        payload: [
          ...detail.data.reviews,
          // rating: rating.data[0].rating,
          // coments: coments.data
        ],
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const postReview = (review) => {
  return async (dispatch) => {
    return await axios
      .post("/review", review)
      .then((res) => {
        dispatch({ type: POST_REVIEW, payload: res.data });
      })
      .catch((error) => console.log(error));
  };
};

/* 
export function deleteActivity(idCountry, id) {
    return axios.delete(`http://localhost:3001/activities/${idCountry}/${id}`)
        .then((response) => {
            if (response.data) { alert("Activity delete succelifully") }
            else { alert("an error occurred while deleting") }
        })
}
*/

/*export const mpCheckout = (cart) => {
  console.log(1);
  return async function (dispatch) {
    console.log(2);
    try {
      const payment = await axios
        .post("/checkout", cart)
        .then(
          (res) =>
            (window.location.href = response.data.response.body.init_point)
        );
      console.log(payment);
      return dispatch({
        type: MP_CHECKOUT,
        payload: payment.data,
      });
    } catch (e) {
      console.log(e.message);
    }
  };
};*/

export const addFavProduct = (product) => {
  return {
    type: ADD_FAV,
    payload: product,
  };
};

export const deleteReview = (id) => {
  return async (dispatch) => {
    try {
      axios.delete(`/review/${id}`);
      return dispatch({
        type: DELETE_REVIEW,
        payload: id,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const postProduct = (product) => {
  return async (dispatch) => {
    return await axios
      .post("/products", product)
      .then((res) => {
        dispatch({
          type: POST_PRODUCT,
          payload: res.data
        });
      })
      .catch((error) => console.log(error));
  };
};

export const putProduct = (id, info) => {
  return async (dispatch) => {
    return await axios
      .put(`/products/${id}`, info)
      .then((res) => {
        dispatch({
          type: PUT_PRODUCT,
          payload: res.data
        });
      })
      .catch((error) => console.log(error));
  };
};

export const putCategory = (id, info) => {
  return async (dispatch) => {
    return await axios
      .put(`/category/${id}`, info)
      .then((res) => {
        dispatch({
          type: PUT_CATEGORY,
          payload: res.data
        });
      })
      .catch((error) => console.log(error));
  };
};



