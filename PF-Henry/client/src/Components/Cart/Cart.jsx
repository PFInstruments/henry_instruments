import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteFromCart, ADD_TO_CART } from "../../Redux/actions";

//import axios from "axios";

const Cart = ({ history }) => {
    const cart = useSelector((state) => state.cart);

    const dispatch = useDispatch();

    const handleQtyChange = (e, props) => {
        const cart = localStorage.getItem("cart")
            ? JSON.parse(localStorage.getItem("cart"))
            : [];

        cart.forEach((cartItem) => {
            if (cartItem.id === props.id) {
                cartItem.quantity = e.target.value;
            }
        });

        localStorage.setItem("cart", JSON.stringify(cart));

        dispatch({
            type: ADD_TO_CART,
            payload: cart,
        });
    };

  
    // console.log("este es el carrito", cart);
    // console.log(props)
    return (
        <section className="cart-page m4">
            {cart.length <= 0 ? (
                <div className="jumbotron bg-secondary text-white text-center py-2">
                    <h4 className="display-4">Your Cart is Empty</h4>
                </div>
            ) : (
                <>
                    <div className="jumbotron bg-secondary text-white text-center py-2">
                        <h4 className="display-4">Cart:</h4>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-10">
                            <table className="table table-striped">
                                <thead className="thead-light">
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
                                            <img
                                                src={props.image}
                                                className="listImg img-thumbnail "
                                                alt="..."
                                            />
                                            <td>{props.name}</td>
                                            <td>$ {props.price}</td>
                                            <td>
                                                <input
                                                    type="number"
                                                    className="form-control-sm"
                                                    min="1"
                                                    max={props.stock}
                                                    value={props.quantity}
                                                    onChange={(e) =>
                                                        handleQtyChange(
                                                            e,
                                                            props
                                                        )
                                                    }
                                                />
                                            </td>
                                            <td>
                                                <button
                                                    type="button"
                                                    className="btn btn-danger btn-sm"
                                                    onClick={() =>
                                                        dispatch(
                                                            deleteFromCart(
                                                                props
                                                            )
                                                        )
                                                    }
                                                >
                                                    <i className="fas fa-trash-alt">
                                                        Delete
                                                    </i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="row">
                                <div className="col-12 d-flex justify-content-center">
                                    <h4>
                                    Total: $
                                    {cart.reduce((currentSum, currentCardItem) =>  
                                    currentSum + currentCardItem.price * currentCardItem.quantity, 0 ) 
                                    .toFixed(2)}
                                    </h4>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 d-flex justify-content-center">
                                    <Link to={"/data"} >
                                        <button
                                        // onClick={() => {
                                            //     handleCheckout();
                                            // }}
                                            className="btn btn-dark btn-large btn-block mx-auto"
                                        >
                                            PROCEED TO CHECKOUT
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </section>
    );
};

export default Cart;


