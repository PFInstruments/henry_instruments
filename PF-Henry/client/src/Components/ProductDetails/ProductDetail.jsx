import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clearPageProductDetail, getProductDetail } from "../../Redux/actions";
import "./productDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDetail(id));
    return () => dispatch(clearPageProductDetail());
  }, [dispatch, id]);

  const prDetail = useSelector((state) => state.productDetail);
  console.log(prDetail);

  return (
    <div className="bg-secondary product-detail">
      <div className="container mt-3 justify-content-center ">
        <div class="row">
          <div class="col-md-6 d-flex align-items-center justify-content-center">
            <img
              className="card-img-top "
              style={{ maxWidth: "100%", maxHeight: "100%" }}
              src={prDetail.image}
              alt="imagen no encontrada"
            />
          </div>
          <div class="col-md-6">
            <div className="card-body bg-white p-5">
              <h1 className="card-title my-5">{prDetail.name}</h1>

              <span className="card-text py-3">
                <small className="text-muted"> Descripcion:</small>
                <span className="text-muted"> {prDetail.description}</span>
              </span>
              <br />
              <span className="card-text py-3">
                <small className="text-muted"> Precio:</small>{" "}
                <span className="text-muted">
                  <strong>{prDetail.price}</strong>
                </span>
              </span>
              <br />
              <span className="card-text py-3">
                <small className="text-muted"> Stock:</small>{" "}
                <span className="value">{prDetail.stock}</span>
              </span>
              <br />
              <span className="card-text py-3">
                <small className="text-muted"> Rating: </small>
                <span className="text-muted">{prDetail.rating}</span>
              </span>
              <br />
              <a /*href="#"*/ class="btn btn-success py-2 my-4">
                Añadir al carrito
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
