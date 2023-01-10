import React from "react";
import CreateProductModal from "./CreateProductModal";

export default function ManageBarProducts({
    localCategories,
    localProducts,
    setLocalProducts,
    allProducts,
    allCategories,
    localOrder,
    setLocalOrder,
}) {
    /////Creo una lista de categorias en orden ascendente y Creo el componente option list/////
    let categoryList = localCategories?.map((c) => {
        return c.name;
    });
    categoryList?.sort();
    let optionsList = [];
    for (let i = 0; i < categoryList?.length; i++) {
        optionsList?.push(
            <option value={categoryList[i]} key={i}>
                {categoryList[i].charAt(0).toUpperCase() +
                    categoryList[i].slice(1)}
            </option>
        );
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
                            // onChange={(e) => handleChange(e)}
                            type="text"
                            id="simple-search"
                            className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg tw-focus:ring-blue-500 tw-focus:border-blue-500 tw-block tw-w-full tw-pl-10 tw-p-2.5  tw-dark:bg-gray-700 tw-dark:border-gray-600 tw-dark:placeholder-gray-400 tw-dark:text-white tw-dark:focus:ring-blue-500 tw-dark:focus:border-blue-500"
                            placeholder="Search"
                        />
                    </div>
                </form>
                <div className="tw-flex">
                    <label
                        htmlFor="filterProducts"
                        className="tw-block tw-mb-2 tw-text-lg tw-font-medium tw-text-white tw-mx-5 tw-text-center"
                    >
                        Categories:{"  "}
                    </label>

                    <select
                        id="filterProducts"
                        name="selectType"
                        className="form-select d-flex tw-rounded-lg tw-w-auto"
                    >
                        <option key="keyAllCategories" value="All">
                            All
                        </option>
                        {optionsList}
                    </select>

                    <label
                        htmlFor="orderProducts"
                        className="tw-block tw-mb-2 tw-text-lg tw-font-medium tw-text-white tw-mx-5 tw-text-center"
                    >
                        Order By:{"  "}
                    </label>
                    <form>
                        <select
                            id="orderProducts"
                            className="form-select d-flex"
                            aria-label="-"
                        >
                            <option value="-">-</option>
                            <option value="1">A-Z</option>
                            <option value="2">Z-A</option>
                            <option value="3">Price ↟</option>
                            <option value="3">Price ↡</option>
                            <option value="3">Stock ↟</option>
                            <option value="3">Stock ↡</option>
                            <option value="3">Sales ↟</option>
                            <option value="3">Sales ↡</option>
                            <option value="3">Reviews ↟</option>
                            <option value="3">Reviews ↡</option>
                        </select>
                    </form>
                </div>
                <button
                    type="button"
                    className="btn btn-success"
                    data-bs-toggle="modal"
                    data-bs-target="#createProductModal"
                >
                    Add Product +
                </button>
                <CreateProductModal
                    localCategories={localCategories}
                    setLocalProducts={setLocalProducts}
                />
            </div>
        </nav>
    );
}
