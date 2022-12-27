import React from "react";
import "./Card.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, addFavProduct } from "../../Redux/actions";

const Card = (props) => {
  const dispatch = useDispatch();
  const fav = useSelector((state) => state.ProductFav) 

  const handleAddToCart = () => {
    dispatch(addToCart(props));
  };

  const handleAddProductFav = () => {
    dispatch(addFavProduct(props));
  };

  let num = 5;

  console.log(props)

  return (
    <div className="container-fluid bg-trasparent my-4 p-3">
      <div className="col">
        <div className="card h-100 shadow-sm">
          <Link to={`/productdetail/${props.id}`}>
            <img
              src={props.image}
              width="500"
              className="card-img-top imageClass"
              alt="..."
            />
          </Link>
          <div className="label-top shadow-sm">{props.trademark?.name}</div>
          <div className="card-body">
            <div className="clearfix mb-3">
              <span className="float-start badge rounded-pill bg-success">{`$ ${props.price}`}</span>
              <ul className="list-inline small float-end">
                <li className="list-inline-item m-0">
                  <i
                    className={`bi bi-star${num === 0 ? " text-success" : "-fill text-success"
                      }`}
                  ></i>
                </li>
                <li className="list-inline-item m-0">
                  <i
                    className={`bi bi-star${num <= 1 ? " text-success" : "-fill text-success"
                      }`}
                  ></i>
                </li>
                <li className="list-inline-item m-0">
                  <i
                    className={`bi bi-star${num <= 2 ? " text-success" : "-fill text-success"
                      }`}
                  ></i>
                </li>
                <li className="list-inline-item m-0">
                  <i
                    className={`bi bi-star${num <= 3 ? " text-success" : "-fill text-success"
                      }`}
                  ></i>
                </li>
                <li className="list-inline-item m-0">
                  <i
                    className={`bi bi-star${num <= 4 ? " text-success" : "-fill text-success"
                      }`}
                  ></i>
                </li>
              </ul>
            </div>
            <h5 className="card-title">{`${props.name} ${props.trademark?.name} ${props.model}`}</h5>
            <div className="text-center  tw-grid tw-grid-cols-2">
              <button
                href="#"
                className="btn btn-warning"
                onClick={handleAddToCart}
              >
                Add to cart
              </button>
              <div className="clearfix mb-1">
                <div className="float-end">
                  <button
                    type="button"
                    className="btn btn-outline-danger btn-sm"
                    onClick={handleAddProductFav}
                    disabled={fav.find(({id}) => id === props.id)}
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
