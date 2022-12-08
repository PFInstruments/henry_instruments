import axios from "axios";

export const GET_PRODUCT_DETAIL = "GET_PRODUCT_DETAIL";
export const CLEAR_PAGE_PRODUCT_DETAIL = "CLEAR_PAGE_PRODUCT_DETAIL";

export function getProductDetail(id) {
  return async function (dispatch) {
    try {
      // const detail = await.get (`http://localhost:3001/productdetail/${id}`)
      return dispatch({
        type: GET_PRODUCT_DETAIL,
        payload: {
          name: "guitar",
          rating: "5",
          descipcion: "detail description",
          price: "220",
          stock: "21",
        },
      });
    } catch (e) {
      console.log(e);
    }
  };
}

export function clearPageProductDetail() {
  return {
    type: CLEAR_PAGE_PRODUCT_DETAIL,
  };
}
