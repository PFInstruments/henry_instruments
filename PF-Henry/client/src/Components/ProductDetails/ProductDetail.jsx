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
                <small className="text-muted"> Descripcion:</small>
                <span className="text-secondary"> {prDetail.description}</span>
              </span>
              <br />
              <span className="card-text py-3">
                <small className="text-muted"> Precio:</small>{" "}
                <span className="text-secondary"> AR$ {prDetail.price}</span>
              </span>
              <br />
              <span className="card-text py-3">
                <small className="text-muted"> Categoría:</small>
                <span className="text-secondary">
                  como ver nombre de categoria?
                </span>
              </span>
              <br />
              <span className="card-text py-3">
                <small className="text-muted"> Rating: </small>
                <span className="text-secondary">
                  {prDetail.rating
                    ? prDetail.rating + "/5"
                    : "aun no hay rating"}
                </span>
              </span>
              <br />

              <button className="tw-text-green-700 hover:tw-text-white tw-border tw-border-green-700 hover:tw-bg-green-800 focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-green-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-text-center tw-mr-2 tw-mb-2 dark:tw-border-green-500 dark:tw-text-green-500 dark:hover:tw-text-white dark:hover:tw-bg-green-600 dark:focus:tw-ring-green-800">
                Añadir al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
