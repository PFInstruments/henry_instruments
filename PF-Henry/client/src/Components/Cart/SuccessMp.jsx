import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../../Redux/actions";
import { Link } from "react-router-dom";

function SuccessMp() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const allProducts = useSelector((state) => state.allProducts);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  console.log("productossssssssssssssssssssssssssssss", allProducts);

  const result = [];
  for (let i = 0; i < cart.length; i++) {
    for (let j = 0; j < allProducts.length; j++) {
      if (cart[i].name === allProducts[j].name) {
        console.log("cart[i].quantity", cart[i].quantity);
        console.log("allProducts[j].stock", allProducts[j].stock);
        allProducts[j].stock = allProducts[j].stock - cart[i].quantity;
        console.log("allProducts[j].stock", allProducts[j].stock);
        result.push(allProducts[j]);
      }
    }
  }
  console.log("result", result);

  return (
    <div className="  container-fluid d-flex flex-column justify-content-center align-items-center  ">
        <Link to={"/"}>
        <button className="">volver al inicio</button>
        </Link>
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
              <div className="card mb-3" style={{ maxWidth: "540px" }}>
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
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">{item.description}</p>
                      <p className="card-text">
                        <small className="text-muted">{item.price}</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SuccessMp;
