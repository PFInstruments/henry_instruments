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
} from "../../Redux/actions";
import ReviewForm from "../ReviewForm/ReviewForm";
import "./productDetail.css";

const ProductDetail = () => {
    const { id } = useParams();

    const prDetail = useSelector((state) => state.productDetail);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductDetail(id));
        dispatch(getReviews(id));
        return () => dispatch(clearPageProductDetail());
    }, [dispatch, id]);

    const handleAddToCart = () => {
        dispatch(addToCart(id));
    };

    let rating = prDetail.rating;

    return (
        <div>
            <div className="container">
                <div className="product-content product-wrap clearfix product-deatil">
                    <div className="row">
                        <div className="col-md-5 col-sm-12 col-xs-12">
                            <div>
                                <img
                                    className="card-img-top "
                                    style={{
                                        maxWidth: "100%",
                                        maxHeight: "100%",
                                    }}
                                    src={prDetail.image}
                                    alt="imagen no encontrada"
                                />
                                <div
                                    className="accordion"
                                    id="accordionExample"
                                >
                                    <div className="accordion-item">
                                        <h2
                                            className="accordion-header"
                                            id="headingThree"
                                        >
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseThree"
                                                aria-expanded="false"
                                                aria-controls="collapseThree"
                                            >
                                                Description
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseThree"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingThree"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-body">
                                                {prDetail.description}
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                                                className={`bi bi-star${
                                                    rating === 0
                                                        ? " text-success fs-5"
                                                        : "-fill text-success fs-5"
                                                }`}
                                            ></i>
                                        </li>
                                        <li className="list-inline-item m-0">
                                            <i
                                                className={`bi bi-star${
                                                    rating <= 1
                                                        ? " text-success fs-5"
                                                        : "-fill text-success fs-5"
                                                }`}
                                            ></i>
                                        </li>
                                        <li className="list-inline-item m-0">
                                            <i
                                                className={`bi bi-star${
                                                    rating <= 2
                                                        ? " text-success fs-5"
                                                        : "-fill text-success fs-5"
                                                }`}
                                            ></i>
                                        </li>
                                        <li className="list-inline-item m-0">
                                            <i
                                                className={`bi bi-star${
                                                    rating <= 3
                                                        ? " text-success fs-5"
                                                        : "-fill text-success fs-5"
                                                }`}
                                            ></i>
                                        </li>
                                        <li className="list-inline-item m-0">
                                            <i
                                                className={`bi bi-star${
                                                    rating <= 4
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
                            <h3>{`$ ${prDetail.price}`}</h3>
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
                            <hr />
                            <div className="row">
                                <div className="col-sm-12 col-md-6 col-lg-6">
                                    <button
                                        className="btn btn-success btn-lg"
                                        onClick={handleAddToCart}
                                    >
                                        Add to cart
                                    </button>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6">
                                    <div className="btn-group pull-right">
                                        <button className="btn btn-white btn-default">
                                            <i className="fa fa-star"></i> Add
                                            to wishlist
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <hr />
            <br />
            <ReviewForm />
        </div>
    );
};

export default ProductDetail;
