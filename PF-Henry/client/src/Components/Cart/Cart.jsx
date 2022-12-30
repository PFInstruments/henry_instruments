import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteFromCart, ADD_TO_CART } from "../../Redux/actions";
import { Link } from "react-router-dom";

const Cart = ({ history }) => {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleQtyChange = (e, props) => {
    const cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];

    cart.forEach((cartItem) => {
      if (cartItem.id === props.id) {
        cartItem.count = e.target.value;
      }
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    dispatch({
      type: ADD_TO_CART,
      payload: cart,
    });
  };

  return (
    <section className="cart-page m4">
      {cart.length <= 0 ? (
        <div className="jumbotron">
          <h1 className="display-4">Your cart is empty </h1>
        </div>
      ) : (
        <>
          <div className="jumbotron">
            <h1 className="display-4">Cart</h1>
          </div>
          <div className="row">
            <div className="col-md-8">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((props) => (
                    <tr key={props.id}>
                      <td>
                        {" "}
                        <Link to={`/product/${props.id}`}>{props.name}</Link>
                      </td>
                      <td>
                        {/*} {props.price.toLocaleString("en-US", {style:"currency", currency:"USD"})}*/}
                      </td>
                      <td>
                        <input
                          type="number"
                          min="1"
                          max={props.stock}
                          value={props.count}
                          onChange={(e) => handleQtyChange(e, props)}
                        />
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn-btn-danger btn-sm"
                          onClick={() => dispatch(deleteFromCart(props))}
                        >
                          <i className="far fa-trash-alt pr-1">Delete</i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="col-md-4 border-left">
              <h2>Cart Summary</h2>
              <p className="font-weight-light text-muted border-bottom">
                {cart.length === 1 ? "(1) Item" : `{${cart.length}} Items`}
              </p>
              <p className="font-weight-bold">
                Total: $
                {cart
                  .reduce(
                    (currentSum, currentCartItem) =>
                      currentSum +
                      currentCartItem.count * currentCartItem.price,
                    0
                  )
                  .toFixed(2)}
              </p>
              <button className="btn btn-dark btn-large btn-block mb-5 py-2">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;

//Para la nav

//const {cart} = useSelector(state => state.cart)

//<li className="nav-item mr-2" style={{position: "relative"}}>
//    <Link to="/cart" className="nav-link">
//        <i className="fas fa-edit"></i>{" "}
//        Cart{" "}
//        <span
//            className="badge badge-danger"
//            style={{position: "absolute", top: "0px"}}>{cart.length}</span>
//    </Link>
//</li>

//Anterior
