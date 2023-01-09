import React from "react";
import { useState } from "react";
import Filters from "../Filters/Filters";

const SearchBar = ({
    // localProducts,
    setLocalProducts,
    localOrder,
    setLocalOrder,
    allCategories,
    allProducts,
}) => {
    const [content, setContent] = useState("");

    const handleInputChange = (ev) => {
        setContent(ev.target.value);
        if (!ev.target.value) {
            setLocalProducts(allProducts);
        } else {
            // eslint-disable-next-line array-callback-return
            let search = allProducts.filter((product) => {
                if (
                    product.name
                        .toLowerCase()
                        .indexOf(ev.target.value.toLowerCase()) > -1 ||
                    product.brand
                        .toLowerCase()
                        .indexOf(ev.target.value.toLowerCase()) > -1 ||
                    product.model
                        .toLowerCase()
                        .indexOf(ev.target.value.toLowerCase()) > -1
                ) {
                    return product;
                }
            });
            setLocalProducts(search);
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
                                onChange={(e) => handleInputChange(e)}
                            />
                        </form>
                    </div>
                </nav>
                {
                    <Filters
                        content={content}
                        setLocalProducts={setLocalProducts}
                        localOrder={localOrder}
                        setLocalOrder={setLocalOrder}
                        allProducts={allProducts}
                        allCategories={allCategories}
                    />
                }
            </div>
        </div>
    );
};

export default SearchBar;
