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
  console.log('detail --> ', prDetail);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDetail(id));
    dispatch(getReviews(id));
    return () => dispatch(clearPageProductDetail());
  }, [dispatch, id]);


  const handleAddToCart = () => {
    dispatch(addToCart(id));
  };

  let num = prDetail.rating

  return (
    <div>
      <div className="container">
        <div className="product-content product-wrap clearfix product-deatil">
          <div className="row">
            <div className="col-md-5 col-sm-12 col-xs-12">
              <div >
                <img
                  className="card-img-top "
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                  src={prDetail.image}
                  alt="imagen no encontrada"
                />
                <div class="accordion" id="accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Description
                      </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        {prDetail.description}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-md-offset-1 col-sm-12 col-xs-12">
              <h2 className="name">
                {`${prDetail.name} ${prDetail.Trademark?.name} ${prDetail.model}`}
              </h2>
              <div className="row g-1">
                <div className="col">
                  <ul className="list-inline small float-start">
                    <li className="list-inline-item m-0">
                      <i
                        className={`bi bi-star${num === 0 ? " text-success fs-5" : "-fill text-success fs-5"
                          }`}
                      ></i>
                    </li>
                    <li className="list-inline-item m-0">
                      <i
                        className={`bi bi-star${num <= 1 ? " text-success fs-5" : "-fill text-success fs-5"
                          }`}
                      ></i>
                    </li>
                    <li className="list-inline-item m-0">
                      <i
                        className={`bi bi-star${num <= 2 ? " text-success fs-5" : "-fill text-success fs-5"
                          }`}
                      ></i>
                    </li>
                    <li className="list-inline-item m-0">
                      <i
                        className={`bi bi-star${num <= 3 ? " text-success fs-5" : "-fill text-success fs-5"
                          }`}
                      ></i>
                    </li>
                    <li className="list-inline-item m-0">
                      <i
                        className={`bi bi-star${num <= 4 ? " text-success fs-5" : "-fill text-success fs-5"
                          }`}
                      ></i>
                    </li>
                  </ul>
                </div>
                <h6>({prDetail.reviews?.length}) Reviews </h6>
              </div>
              <hr />
              <h3 >
                {`$ ${prDetail.price}`}
              </h3>
              <hr />
              <ul className="list-group">
                <li className="hoverEffect list-group-item d-flex justify-content-between align-items-center">
                  Trademark
                  <span className="badge bg-primary rounded-pill">{prDetail.Trademark?.name}</span>
                </li>
                <li className="hoverEffect list-group-item d-flex justify-content-between align-items-center">
                  Model
                  <span className="badge bg-primary rounded-pill">{prDetail.model}</span>
                </li>
                <li className="hoverEffect list-group-item d-flex justify-content-between align-items-center">
                  Category
                  <span className="badge bg-primary rounded-pill">{prDetail.categorie?.name}</span>
                </li>
                <li className="hoverEffect list-group-item d-flex justify-content-between align-items-center">
                  Stock
                  <span className="badge bg-primary rounded-pill">{prDetail.stock}</span>
                </li>
              </ul>


              {/* <h3>
                Description:
              </h3>
              <p className="text-start">{prDetail.description}</p> */}
              <hr />
              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <button className="btn btn-success btn-lg" onClick={handleAddToCart}>Add to cart</button>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <div className="btn-group pull-right">
                    <button className="btn btn-white btn-default"><i className="fa fa-star"></i> Add to wishlist</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bg-secondary product-detail">
        <div className="container mt-3 justify-content-center ">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <img
                className="card-img-top "
                style={{ maxWidth: "100%", maxHeight: "100%" }}
                src={prDetail.image}
                alt="imagen no encontrada"
              />
            </div>
            <div className="col-md-6">
              <div className="card-body bg-white p-5">
                <h1 className="card-title my-5">{prDetail.name}</h1>

                <span className="card-text py-3">
                  <small className="text-muted"> Marca:</small>
                  <span className="text-secondary"> {prDetail.Trademark?.name}</span>
                </span>

                <span className="card-text py-3">
                  <small className="text-muted"> Modelo:</small>
                  <span className="text-secondary"> {prDetail.model}</span>
                </span>

                <br />
                <span className="card-text py-3">
                  <small className="text-muted"> Precio:</small>
                  <span className="text-secondary"> AR$ {prDetail.price}</span>
                </span>
                <br />
                <span className="card-text py-3">
                  <small className="text-muted"> Categoría:</small>
                  <span className="text-secondary">
                    {prDetail.categorie?.name}
                  </span>
                </span>
                <br />
                <span className="card-text py-3">
                  <small className="text-muted"> Rating: </small>
                  <span className="text-secondary">
                    {prDetail.rating}
                  </span>
                </span>
                <br />
                <span className="card-text py-3">
                  <small className="text-muted"> Descripcion:</small>
                  <span className="text-secondary"> {prDetail.description}</span>
                </span>
                <br />
                <button
                  className="tw-text-green-700 hover:tw-text-white tw-border tw-border-green-700 hover:tw-bg-green-800 focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-green-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-text-center tw-mr-2 tw-mb-2 dark:tw-border-green-500 dark:tw-text-green-500 dark:hover:tw-text-white dark:hover:tw-bg-green-600 dark:focus:tw-ring-green-800"
                  onClick={handleAddToCart}
                >
                  Añadir al carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <br />
      <hr />
      <br />
      <ReviewForm />
    </div >
  );
};

export default ProductDetail;
