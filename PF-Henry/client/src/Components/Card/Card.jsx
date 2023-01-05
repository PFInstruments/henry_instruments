import React from "react";
import "./Card.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, addFavProduct } from "../../Redux/actions";
import Swal from 'sweetalert2'

const Card = (props) => {
    const dispatch = useDispatch();
    const fav = useSelector((state) => state.fav);
    const cart = useSelector((state) => state.cart);

    const handleAddToCart = () => {
        dispatch(addToCart(props));
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Added to Cart'
          })
    };

    const handleAddProductFav = () => {
        dispatch(addFavProduct(props));
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Added to Favorites'
          })
    };

    return (
        <div className="container-fluid bg-trasparent my-4 p-3">
            <div className="col">
                <div className="card h-100 shadow p-3 mb-5 bg-body rounded">
                    <Link to={`/productdetail/${props.id}`}>
                        <img
                            src={props.image}
                            width="500"
                            className="card-img-top imageClass"
                            alt="..."
                        />
                    </Link>
                    <div className="label-top shadow-sm">
                        {props.category.name}
                    </div>
                    <div className="card-body">
                        <div className="clearfix mb-3">
                            <span className="float-start badge rounded-pill bg-success">{`$ ${props.price}`}</span>
                        </div>
                        <h5 className="card-title">{`${props.name} ${props.brand} ${props.model}`}</h5>
                        <div className="text-center  tw-grid tw-grid-cols-2">
                            <button
                                type="button"
                                className="btn btn-warning btn-sm"
                                onClick={handleAddToCart}
                                disabled={cart.find(({ id }) => id === props.id)}
                            >
                                <i className="bi bi-cart-plus-fill"></i>

                            </button>
                            <div className="clearfix mb-1">
                                <div className="float-end">
                                    <button
                                        type="button"
                                        className="btn btn-outline-danger btn-sm"
                                        onClick={handleAddProductFav}
                                        disabled={fav.find(
                                            ({ id }) => id === props.id
                                        )}
                                    >
                                        <i className="bi bi-heart-fill"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
