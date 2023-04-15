import React from "react";
import "./Card.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../Redux/actions";
import Swal from "sweetalert2";

const Card = (props) => {
  const dispatch = useDispatch();
  // const cart = useSelector((state) => state.cart);

  const handleAddToCart = () => {
    dispatch(addToCart(props));
    const Toast = Swal.mixin({
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 2000,
      // timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: "Added to Cart",
    });
  };

  let rating = () => {
    let sum = !props.reviews.length
      ? 0
      : props.reviews.map((el) => el.score).reduce((a, b) => a + b, 0) /
        props.reviews?.length;
    return sum;
    // return allRatings.reduce((a, b) => a + b, 0) / props.reviews?.length;
  };

  let total = rating();

  return (
    <div className="container-fluid bg-trasparent my-4 p-3 tw-duration-300 hover:tw--translate-y-1">
      <div className="col">
        <div className="card h-100 shadow p-3 mb-5 bg-body rounded">
          <Link to={`/productdetail/${props?.id}`}>
            <img
              className="card-img-top imageClass"
              src={props?.image}
              alt="..."
              onError={(ev) => {
                ev.target.src =
                  "https://res.cloudinary.com/dcjo8kgee/image/upload/v1673467547/Products/instrumento-musical-de-guitarra_t3kceq.png";
              }}
            />
          </Link>
          <div className="label-top shadow-sm">{props?.category}</div>
          <div className="card-body">
            <div className="clearfix mb-3">
              <span className="float-start badge rounded-pill bg-success">{`$ ${props?.price}`}</span>
              <ul className="list-inline small float-end">
                <li className="list-inline-item m-0">
                  <i
                    className={`bi bi-star${
                      total === 0 ? " text-success" : "-fill text-success"
                    }`}
                  ></i>
                </li>
                <li className="list-inline-item m-0">
                  <i
                    className={`bi bi-star${
                      total <= 1 ? " text-success" : "-fill text-success"
                    }`}
                  ></i>
                </li>
                <li className="list-inline-item m-0">
                  <i
                    className={`bi bi-star${
                      total <= 2 ? " text-success" : "-fill text-success"
                    }`}
                  ></i>
                </li>
                <li className="list-inline-item m-0">
                  <i
                    className={`bi bi-star${
                      total <= 3 ? " text-success" : "-fill text-success"
                    }`}
                  ></i>
                </li>
                <li className="list-inline-item m-0">
                  <i
                    className={`bi bi-star${
                      total <= 4 ? " text-success" : "-fill text-success"
                    }`}
                  ></i>
                </li>
              </ul>
            </div>
            <h5 className="card-title">{`${props?.name} ${props?.brand} ${props?.model}`}</h5>
            <div className="text-center  tw-grid tw-grid-cols-2">
              <button
                type="button"
                className="btn btn-warning btn-sm"
                onClick={handleAddToCart}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
