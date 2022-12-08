import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clearPageProductDetail, getProductDetail } from "../../Redux/actions";

const ProductDetail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDetail(id));
    return () => dispatch(clearPageProductDetail());
  }, [dispatch, id]);

  const prDetail = useSelector((state) => state.productDetail);

  return (
    <div className="container mt-3 justify-content-center">
      <img className="card-img-top " scr="" alt="imagen no encontrada" />
      <div className="card-body  ">
        <h1 className="card-title">Nombre: {prDetail.name}</h1>

        <span className="card-text">Descripcion: {prDetail.description}</span>
        <br />
        <span className="card-text">Precio: {prDetail.price}</span>
        <br />
        <span className="card-text">Stock: {prDetail.stock}</span>
        <br />
        <a href="#" class="btn btn-primary">
          Añadir al carrito
        </a>
      </div>
    </div>
  );
};

export default ProductDetail;
