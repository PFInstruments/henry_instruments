import React from "react";
import { prefixDetail, numeral } from "../../../Utils/variables";
import DetailOrderModal from "./DetailOrderModal";

export default function OrdersTable({ localOrders }) {
    //   const dispatch = useDispatch();

    return (
        <div className="table-responsive">
            <table className="table table-hover ">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">Order Number #</th>
                        <th scope="col">Date</th>
                        <th scope="col">User</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone Num</th>
                        <th scope="col">Total Amount</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody className="table-group-divider ">
                    {localOrders?.map((order) => {
                        return (
                            <tr key={order.id}>
                                <td className="align-middle">{order.id}</td>
                                <td className="align-middle">{order.date}</td>
                                <td className="align-middle ">
                                    {order.user?.name}
                                </td>
                                <td className="align-middle ">
                                    {order.user?.email}
                                </td>
                                <td className="align-middle ">
                                    {order.user?.phone_number}
                                </td>
                                <td className="align-middle ">
                                    ${order.totalAmount}
                                </td>
                                <td className="align-middle">
                                    <button
                                        type="button"
                                        className="btn btn-success listButton"
                                        data-bs-toggle="modal"
                                        data-bs-target={
                                            numeral + prefixDetail + order.id
                                        }
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="bi bi-info-circle"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                        </svg>
                                    </button>

                                    <DetailOrderModal order={order} />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
