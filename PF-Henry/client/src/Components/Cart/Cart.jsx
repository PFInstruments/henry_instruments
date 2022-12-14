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
                                                    className="btn-btn-danger btn-sm"
                                                    onClick={() =>
                                                        dispatch(
                                                            deleteFromCart(
                                                                props
                                                            )
                                                        )
                                                    }
                                                >
                                                    <i className="far fa-trash-alt pr-1">
                                                        Delete
                                                    </i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <Link to={"/data"} >
                            <button
                                // onClick={() => {
                                //     handleCheckout();
                                // }}
                                className="btn btn-dark btn-large btn-block mb-5 py-2"
                            >
                                Ir datos de envio
                            </button>
                            </Link>
                        </div>
                    </div>
                </>
            )}
        </section>
    );
};

export default Cart;


