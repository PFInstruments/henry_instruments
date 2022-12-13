import React from "react";
import { useState } from "react";
// import Filters from "../Filters/Filters";

const SearchBar = ({
    localProducts,
    setLocalproducts,
    // localOrder,
    //  setLocalOrder,
    // allCategories,
    allProducts,
}) => {
    const [content, setContent] = useState("");

    const handleInputChange = (ev) => {
        setContent(ev.target.value);
        if (!ev.target.value) {
            setLocalproducts(allProducts);
        } else {
            // eslint-disable-next-line array-callback-return
            let filter = localProducts.filter((product) => {
                if (
                    product.name
                        .toLowerCase()
                        .indexOf(ev.target.value.toLowerCase()) > -1 ||
                    product.trademark
                        .toLowerCase()
                        .indexOf(ev.target.value.toLowerCase()) > -1 ||
                    product.model
                        .toLowerCase()
                        .indexOf(ev.target.value.toLowerCase()) > -1
                ) {
                    return product;
                }
            });
            setLocalproducts(filter);
        }
    };

    return (
        <div>
            <div className="tw-flex tw-justify-center">
                <nav className="navbar bg-light">
                    <div className="container-fluid">
                        <form className="d-flex" role="search">
                            <input
                                className="form-control me-2 .ms-1"
                                type="search"
                                value={content}
                                placeholder="Search product"
                                aria-label="Search"
                                onChange={handleInputChange}
                            />
                        </form>
                    </div>
                </nav>
                {/* 
                <Filters
                    content={content}
                    setLocalProducts={setLocalproducts}
                    localOrder={localOrder}
                    setLocalOrder={setLocalOrder}
                    allProducts={allProducts}
                    allCategories={allCategories}
                /> */}
            </div>
        </div>
    );
};

export default SearchBar;
