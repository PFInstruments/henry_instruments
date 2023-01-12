import React, { useState, useEffect } from "react";

export default function ManageBarOrders({
    allOrders,
    localOrders,
    setLocalOrders,
    localOrdenamiento,
    setLocalOrdenamiento,
}) {
    //   const dispatch = useDispatch();
    function handleChange(e) {
        //  setContent(e.target.value);
        if (!e.target.value) {
            setLocalOrders(allOrders);
        } else {
            // eslint-disable-next-line array-callback-return
            let search = allOrders.filter((order) => {
                if (
                    order.user?.email
                        .toLowerCase()
                        .indexOf(e.target.value.toLowerCase()) > -1 ||
                    order.user?.name
                        .toLowerCase()
                        .indexOf(e.target.value.toLowerCase()) > -1 ||
                    order.id.indexOf(e.target.value) > -1
                ) {
                    return order;
                }
            });
            setLocalOrders(search);
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">
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
                            onChange={(e) => handleChange(e)}
                            type="text"
                            id="simple-search"
                            className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg tw-focus:ring-blue-500 tw-focus:border-blue-500 tw-block tw-w-full tw-pl-10 tw-p-2.5  tw-dark:bg-gray-700 tw-dark:border-gray-600 tw-dark:placeholder-gray-400 tw-dark:text-white tw-dark:focus:ring-blue-500 tw-dark:focus:border-blue-500"
                            placeholder="Search"
                        />
                    </div>
                </form>
                <div className="tw-flex tw-mr-10">
                    <label
                        htmlFor="orderCategories"
                        className="tw-block tw-mb-2 tw-text-lg tw-font-medium tw-text-white tw-mx-5 tw-text-center"
                    >
                        Order By:{"  "}
                    </label>
                    <form
                        onChange={(e) => setLocalOrdenamiento(e.target.value)}
                    >
                        <select
                            id="orderCategories"
                            className="form-select d-flex"
                            aria-label="-"
                        >
                            <option key="-" value="-">
                                -
                            </option>
                            <option key="totalDesc" value="totalDesc">
                                Total Amount ↡
                            </option>
                            <option key="totalAsc" value="totalAsc">
                                Total Amount ↟
                            </option>
                            <option key="timeDesc" value="timeDesc">
                                Date ↡
                            </option>
                            <option key="timeAsc" value="timeAsc">
                                Date ↟
                            </option>
                        </select>
                    </form>
                </div>
            </div>
        </nav>
    );
}
