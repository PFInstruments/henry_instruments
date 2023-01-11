import React, { useState, useEffect } from "react";
import CreateProductModal from "./CreateProductModal";
import { orderBy } from "../../../Utils/Filters-Order/orderBy";
export default function ManageBarProducts({
    localCategories,
    localProducts,
    setLocalProducts,
    allProducts,
    allCategories,
    localOrder,
    setLocalOrder,
}) {
    //ESTADO LOCAL///
    const [disabledState, setDisabledState] = useState(false);
    const [content, setContent] = useState("");
    const [localBrand, setLocalBrand] = useState("All");
    const [localCategory, setLocalCategory] = useState("All");

    useEffect(() => {
        if (content.length > 0) {
            setDisabledState(true);
        } else setDisabledState(false);
    }, [content]);

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

    ///////Creo Array  de marcas por nombre unico ///////////
    function getUniqueBrands(array) {
        const uniqueBrands = [];

        for (let i = 0; i < array.length; i++) {
            const product = array[i];

            if (!uniqueBrands.includes(product.brand)) {
                uniqueBrands.push(product.brand);
            }
        }

        return uniqueBrands;
    }
    //// Creo lista de brands unicas //////
    const uniqueBrands = getUniqueBrands(allProducts);
    // console.log(uniqueBrands);

    let brandList = uniqueBrands?.map((t) => {
        return t;
    });
    brandList?.sort();
    let uniqueBrandList = [];
    for (let i = 0; i < brandList?.length; i++) {
        uniqueBrandList.push(
            <option value={brandList[i]} key={i + 50}>
                {brandList[i].charAt(0).toUpperCase() + brandList[i].slice(1)}
            </option>
        );
    }

    ///////////////////////////////

    ///////FUNCIONES SETTERS ONCHANGE EL ESTADO LOCAL///////
    function setterCategory(e) {
        console.log(e.target.value);
        setLocalCategory(e.target.value);
    }

    function setterBrand(e) {
        setLocalBrand(e.target.value);
    }

    //////Funciones Filtro//////////
    function filterCategory(c, array) {
        let productByCategory = array.filter((product) => {
            return product.category.name === c;
        });
        return productByCategory;
    }

    function filterBrand(b, array) {
        let productByBrand = array.filter((product) => {
            return product.brand === b;
        });
        return productByBrand;
    }

    //////Event Handelers//////////////

    function applyFilter(e) {
        e.preventDefault();
        let productByCategory = filterCategory(localCategory, allProducts);
        let productByBrand = filterBrand(localBrand, allProducts);
        let productBothFilters = filterBrand(localBrand, productByCategory);

        if (localCategory === "All" && localBrand === "All") {
            setLocalProducts(orderBy(localOrder, allProducts));
        }
        if (productByCategory.length > 0 && localBrand === "All") {
            setLocalProducts(orderBy(localOrder, productByCategory));
        }
        if (productByBrand.length > 0 && localCategory === "All") {
            setLocalProducts(orderBy(localOrder, productByBrand));
        }
        if (productBothFilters.length > 0) {
            setLocalProducts(orderBy(localOrder, productBothFilters));

            console.log("bothflters");
        }
        if (
            productBothFilters.length === 0 &&
            localCategory !== "All" &&
            productBothFilters.length === 0 &&
            localBrand !== "All"
        ) {
            console.log("No filter match");
            setLocalProducts(["Product Not Found"]);
        }
        if (
            (productByCategory.length === 0 && localCategory !== "All") ||
            (productByBrand.length === 0 && localBrand !== "All")
        ) {
            console.log("No filter match");
            setLocalProducts(["Product Not Found"]);
        }
    }

    const handleInputChange = (e) => {
        console.log(localProducts);
        setContent(e.target.value);
        if (!e.target.value) {
            setLocalProducts(allProducts);
        } else {
            // eslint-disable-next-line array-callback-return
            let search = allProducts.filter((product) => {
                if (
                    product.name
                        .toLowerCase()
                        .indexOf(e.target.value.toLowerCase()) > -1 ||
                    product.brand
                        .toLowerCase()
                        .indexOf(e.target.value.toLowerCase()) > -1 ||
                    product.model
                        .toLowerCase()
                        .indexOf(e.target.value.toLowerCase()) > -1 ||
                    product.id.indexOf(e.target.value) > -1
                ) {
                    console.log(product);
                    return product;
                }
            });
            setLocalProducts(search);
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
                            FILTERS
                        </label>
                        <label
                            htmlFor="filterCat"
                            className="tw-block tw-mb-2 tw-text-md tw-font-small tw-text-white tw-mx-5 tw-text-center"
                        >
                            Categories:
                        </label>
                        <select
                            id="filterCat"
                            name="selectType"
                            className="form-select d-flex tw-rounded-lg tw-w-auto"
                            onChange={(e) => setterCategory(e)}
                            disabled={disabledState}
                        >
                            <option key="keyAllCategories" value="All">
                                All
                            </option>
                            {optionsList}
                        </select>
                        <div className="tw-flex">
                            <label
                                htmlFor="brandSelect"
                                className="tw-block tw-mb-2 tw-text-md tw-font-small tw-text-white tw-mx-5 tw-text-center"
                            >
                                Brand:
                            </label>
                            <select
                                className="form-select d-flex tw-rounded-lg tw-w-auto "
                                id="brandselect"
                                name="selectBrand"
                                disabled={disabledState}
                                onChange={(e) => setterBrand(e)}
                            >
                                <option key="keyAllBrands" value="All">
                                    All
                                </option>
                                {uniqueBrandList}
                            </select>
                        </div>
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
                        className="tw-block tw-mb-2 tw-text-lg tw-font-medium tw-text-white tw-mx-5 tw-text-center"
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
                            <option value="A-Z">A-Z</option>
                            <option value="Z-A">Z-A</option>
                            <option value="priceDesc">Price ↡</option>
                            <option value="priceAsc">Price ↟</option>
                            <option value="stockProdDesc">Stock ↡</option>
                            <option value="stockProdAsc">Stock ↟</option>
                            <option value="salesDesc">Sales ↡</option>
                            <option value="salesAsc">Sales ↟</option>
                            <option value="3">Reviews ↡</option>
                            <option value="3">Reviews ↟</option>
                            <option value="brandDesc">Brand ↡</option>
                            <option value="brandAsc">Brand ↟</option>
                        </select>
                    </form>
                </div>
                <button
                    type="button"
                    className="btn btn-success tw-ml-40"
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
