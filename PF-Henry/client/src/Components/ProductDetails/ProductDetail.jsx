/* eslint-disable react/style-prop-object */
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
    clearPageProductDetail,
    getProductDetail,
    addToCart,
    getReviews,
    addFavProduct,
} from "../../Redux/actions";
import ReviewForm from "../ReviewForm/ReviewForm";
import "./productDetail.css";
import Loading from "../Loading/Loading";
import Swal from "sweetalert2";

const ProductDetail = () => {
    const { id } = useParams();

    const prDetail = useSelector((state) => state.productDetail);
    const cart = useSelector((state) => state.cart);
    const fav = useSelector((state) => state.fav);
    


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductDetail(id));
        dispatch(getReviews(id));
        return () => dispatch(clearPageProductDetail());
    }, [dispatch, id]);

    const handleAddToCart = () => {
        dispatch(addToCart(prDetail));
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
        dispatch(addFavProduct(prDetail));
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

    let rating = prDetail.rating;

    return (
        <div>
            <div className="container">
                {!Object.keys(prDetail).length ?
                    <Loading />
                    :
                    <div className="product-content product-wrap clearfix product-deatil">
                        <div className="row">
                            <div className="col-md-5 col-sm-12 col-xs-12">
                                <div>
                                    <img
                                        className="tw-inset-x-2"
                                        style={{
                                            maxWidth: "100%",
                                            maxHeight: "100%",
                                        }}
                                        src={prDetail.image}
                                        alt="imagen no encontrada"
                                    />
                                </div>
                            </div>
                            <div className="col-md-6 col-md-offset-1 col-sm-12 col-xs-12">
                                <h2 className="name">
                                    {`${prDetail.name} ${prDetail.brand} ${prDetail.model}`}
                                </h2>
                                <div className="row g-1">
                                    <div className="col">
                                        <ul className="list-inline small float-start">
                                            <li className="list-inline-item m-0">
                                                <i
                                                    className={`bi bi-star${rating === 0
                                                        ? " text-success fs-5"
                                                        : "-fill text-success fs-5"
                                                        }`}
                                                ></i>
                                            </li>
                                            <li className="list-inline-item m-0">
                                                <i
                                                    className={`bi bi-star${rating <= 1
                                                        ? " text-success fs-5"
                                                        : "-fill text-success fs-5"
                                                        }`}
                                                ></i>
                                            </li>
                                            <li className="list-inline-item m-0">
                                                <i
                                                    className={`bi bi-star${rating <= 2
                                                        ? " text-success fs-5"
                                                        : "-fill text-success fs-5"
                                                        }`}
                                                ></i>
                                            </li>
                                            <li className="list-inline-item m-0">
                                                <i
                                                    className={`bi bi-star${rating <= 3
                                                        ? " text-success fs-5"
                                                        : "-fill text-success fs-5"
                                                        }`}
                                                ></i>
                                            </li>
                                            <li className="list-inline-item m-0">
                                                <i
                                                    className={`bi bi-star${rating <= 4
                                                        ? " text-success fs-5"
                                                        : "-fill text-success fs-5"
                                                        }`}
                                                ></i>
                                            </li>
                                        </ul>
                                    </div>
                                    <h6>({prDetail.reviews?.length}) Reviews </h6>
                                </div>
                                <hr />
                                <div className="tw-grid tw-grid-cols-3">
                                         <h3>{`$ ${prDetail.price}`}</h3>
                                        <button
                                            className="btn btn-success "
                                            onClick={handleAddToCart}
                                            disabled={cart.find((p) => p.id === prDetail.id)}
                                        >
                                            Add to cart
                                        </button>
                                        <div className="btn-group pull-right">
                                            <button className="btn btn-white btn-default" 
                                            onClick={handleAddProductFav}
                                            disabled={fav.find((p) => p.id === prDetail.id)}
                                            >
                                                <i className="fa fa-star"></i> Add
                                                to wishlist
                                            </button>
                                    </div>
                                </div>
                                <hr />
                                <ul className="list-group">
                                    <li className="hoverEffect list-group-item d-flex justify-content-between align-items-center">
                                        Brand
                                        <span className="badge bg-primary rounded-pill">
                                            {prDetail.brand}
                                        </span>
                                    </li>
                                    <li className="hoverEffect list-group-item d-flex justify-content-between align-items-center">
                                        Model
                                        <span className="badge bg-primary rounded-pill">
                                            {prDetail.model}
                                        </span>
                                    </li>
                                    <li className="hoverEffect list-group-item d-flex justify-content-between align-items-center">
                                        Category
                                        <span className="badge bg-primary rounded-pill">
                                            {prDetail.category?.name}
                                        </span>
                                    </li>
                                    <li className="hoverEffect list-group-item d-flex justify-content-between align-items-center">
                                        Stock
                                        <span className="badge bg-primary rounded-pill">
                                            {prDetail.stock}
                                        </span>
                                    </li>
                                </ul>
                                <br />
                            </div>
                            <h4 className="tw-flex tw-items-center tw-justify-center">Descriptions</h4>
                            <p> {prDetail.description}</p>
                        </div>
                    </div>
                }
            </div>
            <br />
            <hr />
            <ReviewForm />
        </div>
    );
};

export default ProductDetail;
