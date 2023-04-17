import React from "react";
import { prefixDetail } from "../../../Utils/variables";

function productSum(array) {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        result = array[i].quantity + result;
    }
    return result;
}

export default function DetailOrderModal({ order }) {
    //   const dispatch = useDispatch();
    console.log(order.totalProducts[0].quantity);
    return (
        <div
            key={order.id}
            className="modal fade"
            id={prefixDetail + order.id}
            tabIndex="-1"
            aria-labelledby="detailOrderModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="tw-m-5">
                            <h2 class="tw-mb-4 tw-font-bold md:tw-text-xl tw-text-heading ">
                                Order Summary{" "}
                            </h2>
                            <h4>
                                Total Products :{" "}
                                {productSum(order.totalProducts)}
                            </h4>
                            <hr />
                            {order.totalProducts?.map((item) => (
                                <>
                                    <div className="tw-grid tw-grid-cols-3 tw-m-4 ">
                                        <div>
                                            <img
                                                src={item.image}
                                                alt="imagen"
                                                className="tw-w-20 tw-h-20"
                                            />
                                        </div>
                                        <div className="tw-m-2">
                                            <span>
                                                Quantity: {item.quantity}
                                                <h5 className="text-xl font-bold">
                                                    {item.name}
                                                </h5>
                                            </span>
                                        </div>
                                        <div className="tw-m-2">
                                            <span>price</span>
                                            <h6>${item.price}</h6>
                                        </div>
                                    </div>
                                    <hr />
                                </>
                            ))}
                            <h4>Total Price : ${order.totalAmount}</h4>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
