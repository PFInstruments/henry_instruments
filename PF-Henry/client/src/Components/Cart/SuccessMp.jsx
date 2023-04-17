import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
    getProducts,
    getOrderByUser,
    putProductStock,
    deleteFromCart,
} from "../../Redux/actions";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

function SuccessMp() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const allProducts = useSelector((state) => state.allProducts);
    const { user } = useAuth0();

    const ordersByUser = useSelector((state) => state.ordersByUser);

    function clearCart() {
      cart.map((prod) => {
       dispatch(deleteFromCart(prod));
      });
    }

    async function sendMail(order) {
        try {
            await axios.post("/mail/neworder", {
                username: order.user.email,
                idOrder: order.id,
                date: order.date,
                products: order.toalPoducts,
                totalAmount: order.totalAmount,
            });
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        dispatch(getProducts());

        cart.map((prod) => {
            dispatch(putProductStock(prod.id, prod.quantity));
        });

        if (user) dispatch(getOrderByUser(user.sub));
    }, [dispatch, cart, user]);

    console.log("productossssssssssssssssssssssssssssss", allProducts);

    return (
        <div className="  container-fluid d-flex flex-column justify-content-center align-items-center  ">
          
            <h1
                className=" 
            text-center first-letter:uppercase  "
            >
                Success
            </h1>
            <p
                className="  
                    text-center first-letter:uppercase      
                                                        "
            >
                Thank you for your purchase!
            </p>
            <p
                className="              
                    "
            >
                You purchased the following items:
            </p>
            <div className="tw-grid tw-grid-cols-3">
                {cart.map((item, index) => {
                    return (
                        <div key={index}>
                            <div
                                className="card mb-3"
                                style={{ maxWidth: "540px" }}
                            >
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img
                                            src={item.image}
                                            className="img-fluid rounded-start"
                                            alt="..."
                                        />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                {item.name}
                                            </h5>
                                            <p className="card-text">
                                                {item.description}
                                            </p>
                                            <p className="card-text">
                                                <small className="text-muted">
                                                    {item.price}
                                                </small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <Link to={"/"}>
                <button
                    onClick={() => {
                        sendMail(ordersByUser);
                        clearCart();
                    }}
                    className=" 
                    btn btn-primary mt-5 mb-5"
                >
                    Back to Home
                </button>
            </Link>
        </div>
    );
}

export default SuccessMp;
