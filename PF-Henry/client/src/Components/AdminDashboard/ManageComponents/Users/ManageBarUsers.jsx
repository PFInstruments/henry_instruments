import React, { useState, useEffect } from "react";
import { orderBy } from "../../../Utils/Filters-Order/orderBy";

export default function ManageBarUsers({
    allUsers,
    setLocalUsers,
    localOrder,
    setLocalOrder,
}) {
    //ESTADO LOCAL///
    const [disabledState, setDisabledState] = useState(false);
    const [content, setContent] = useState("");
    const [localRole, setLocalRole] = useState("All");

    //HOOKS//
    useEffect(() => {
        if (content.length > 0) {
            setDisabledState(true);
        } else setDisabledState(false);
    }, [content]);

    //////Funciones Filtro//////////
    function filterRole(role, array) {
        let result = [];
        if (role === "admin") {
            result = array.filter((user) => {
                return user.admin === true;
            });
        }
        if (role === "user") {
            result = array.filter((user) => {
                return user.admin === false;
            });
        }
        if (role === "user") {
            result = array.filter((user) => {
                return user.admin === false;
            });
        }
        if (role === "All") {
            result = array;
        }
        return result;
    }

    ///////////////////////////////
    console.log(localRole);
    ///////FUNCIONES SETTERS ONCHANGE EL ESTADO LOCAL///////
    function setterLocalRole(e) {
        console.log(e.target.value);
        setLocalRole(e.target.value);
    }
    //////Event Handelers//////////////

    function applyFilter(e) {
        e.preventDefault();
        let userByRole = filterRole(localRole, allUsers);

        if (localRole === "All") {
            setLocalUsers(orderBy(localOrder, allUsers));
        }
        if (userByRole.length > 0) {
            setLocalUsers(orderBy(localOrder, userByRole));
        }

        if (userByRole.length === 0) {
            setLocalUsers(["User Not Found"]);
        }
    }

    const handleInputChange = (e) => {
        setContent(e.target.value);
        if (!e.target.value) {
            setLocalUsers(allUsers);
        } else {
            // eslint-disable-next-line array-callback-return
            let search = allUsers.filter((user) => {
                if (
                    user.name
                        .toLowerCase()
                        .indexOf(e.target.value.toLowerCase()) > -1 ||
                    user.nickname
                        .toLowerCase()
                        .indexOf(e.target.value.toLowerCase()) > -1 ||
                    user.email
                        .toLowerCase()
                        .indexOf(e.target.value.toLowerCase()) > -1 ||
                    user.id.indexOf(e.target.value) > -1
                ) {
                    return user;
                }
            });
            setLocalUsers(search);
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark flex ">
            <div className=" tw-flex  tw-items-stretch ">
                <form className="tw-flex tw-items-center" role="search">
                    <label htmlFor="simple-search" className="tw-sr-only">
                        Search
                    </label>
                    <div className="tw-relative tw-w-full">
                        <div className="tw-absolute tw-inset-y-0 tw-left-0 tw-flex tw-items-center tw-pl-3 tw-pointer-events-none">
                            <svg
                                aria-hidden="true"
                                className="tw-w-5 tw-h-5 tw-text-gray-500 tw-dark:text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </div>
                        <input
                            autoComplete="off"
                            value={content}
                            type="text"
                            id="simple-search"
                            className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg tw-focus:ring-blue-500 tw-focus:border-blue-500 tw-block tw-w-full tw-pl-10 tw-p-2.5  tw-dark:bg-gray-700 tw-dark:border-gray-600 tw-dark:placeholder-gray-400 tw-dark:text-white tw-dark:focus:ring-blue-500 tw-dark:focus:border-blue-500"
                            placeholder="Search"
                            onChange={(e) => handleInputChange(e)}
                        />
                    </div>
                </form>

                <div className="tw-flex">
                    <form id="filters" className="tw-flex ">
                        <label
                            htmlFor="filterCat"
                            className="tw-block tw-mb-2 tw-text-md tw-font-small tw-text-white tw-mx-5 tw-text-center"
                        >
                            FILTER
                        </label>
                        <label
                            htmlFor="filterCat"
                            className="tw-block tw-mb-2 tw-text-md tw-font-small tw-text-white tw-mx-5 tw-text-center"
                        >
                            Role:
                        </label>
                        <select
                            id="filterCat"
                            name="selectType"
                            className="form-select d-flex tw-rounded-lg tw-w-auto"
                            onChange={(e) => setterLocalRole(e)}
                            disabled={disabledState}
                        >
                            <option key="keyAllCategories" value="All">
                                All
                            </option>
                            <option key="admin" value="admin">
                                Admin
                            </option>
                            <option key="user" value="user">
                                User
                            </option>
                        </select>

                        <button
                            disabled={disabledState}
                            className="btn btn-success tw-ml-10"
                            name="apply"
                            onClick={(e) => {
                                applyFilter(e);
                            }}
                        >
                            Apply
                        </button>
                    </form>

                    <label
                        htmlFor="orderProducts"
                        className="tw-block tw-mb-2 tw-text-lg tw-font-medium tw-text-white tw-mx-5 tw-text-center tw-ml-10"
                    >
                        Order By:{"  "}
                    </label>
                    <form onChange={(e) => setLocalOrder(e.target.value)}>
                        <select
                            id="orderProducts"
                            className="form-select d-flex"
                            aria-label="-"
                        >
                            <option value="-">-</option>
                            <option value="userNameDesc">Username A-Z</option>
                            <option value="userNameAsc">Username Z-A</option>
                            <option value="A-Z">Name A-Z</option>
                            <option value="Z-A">Name Z-A</option>
                            <option value="priceDesc">Email A-Z</option>
                            <option value="priceDesc">Email Z-A</option>
                            <option value="orderDesc">Orders ↡</option>
                            <option value="orderAsc">Orders ↟</option>
                            <option value="priceAsc">Register Date ↡</option>
                            <option value="stockProdDesc">
                                Register Date ↟
                            </option>
                        </select>
                    </form>
                </div>
            </div>
        </nav>
    );
}
