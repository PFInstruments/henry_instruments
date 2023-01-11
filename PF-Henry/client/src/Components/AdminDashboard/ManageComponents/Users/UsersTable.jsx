import React /*useState, useEffect*/ from "react";
import {
    prefixDelete,
    prefixEdit,
    prefixDetail,
    numeral,
} from "../../../Utils/variables";
import EditUserModal from "./EditUserModal";

function decodeHtmlCharCodes(str) {
    return str.replace(/(&#(\d+);.@)/g, function (match, capture, charCode) {
        return String.fromCharCode(charCode);
    });
}

export default function UsersTable({ localUsers }) {
    return (
        <div className="table-responsive">
            <table className="table table-hover  ">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">#id</th>
                        <th scope="col">Username</th>
                        <th scope="col">Name</th>
                        <th scope="col"></th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Created at</th>
                        <th scope="col">Orders</th>
                        <th scope="col">Admin</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody className="table-group-divider ">
                    {localUsers?.map((user) => {
                        return (
                            <tr key={user.id}>
                                <td className="align-middle" scope="row">
                                    <span className="tw-text-xs">
                                        {user.id}
                                    </span>
                                </td>
                                <td className="align-middle">
                                    {" "}
                                    <button
                                        type="button"
                                        className="btn btn-light tw-px-3 tw-py-2 tw-text-sm tw-font-medium"
                                        data-bs-toggle="modal"
                                        data-bs-target={
                                            numeral + prefixDetail + user.id
                                        }
                                    >
                                        {user.nickname}
                                    </button>
                                </td>
                                <td className="align-middle ">{user.name}</td>
                                <td className="align-middle">
                                    <img
                                        src={user.picture}
                                        className="listImg img-thumbnail "
                                    />
                                </td>
                                <td className="align-middle text-sm ">
                                    {user.email}
                                </td>
                                <td className="align-middle ">
                                    {user.created_at}
                                </td>
                                <td className="align-middle ">
                                    {user.orders.length}
                                </td>
                                {user.admin ? (
                                    <td className="align-middle">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            fill="green"
                                            className="bi bi-check-circle-fill listIcon"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                                        </svg>
                                    </td>
                                ) : (
                                    <td className="align-middle">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            fill="red"
                                            className="bi bi-x-circle-fill listIcon"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
                                        </svg>
                                    </td>
                                )}

                                <td className="align-middle text-center">
                                    {user.orders.length}
                                </td>

                                <td className="align-middle">
                                    <button
                                        type="button"
                                        className="btn btn-success listButton"
                                        data-bs-toggle="modal"
                                        data-bs-target={
                                            numeral +
                                            prefixEdit +
                                            user.nickname.split(".").join("")
                                        }
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="bi bi-pencil-square"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path>
                                            <path
                                                fillRule="evenodd"
                                                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                                            ></path>
                                        </svg>
                                        Edit
                                    </button>

                                    <EditUserModal
                                        user={user}
                                        key={user.id + "a"}
                                    />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
