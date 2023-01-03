// import { getAllCategories, getAllProducts } from "../../../../Redux/actions";
import React, { useState, useEffect } from "react";
// import { useDispatch /*,useSelector*/ } from "react-redux";
import ManageBarProducts from "./ManageBarProducts";
import ProductTable from "./ProductTable";

export default function AdminManageProducts({ allProducts, allCategories }) {
    ///DISPATCH///
    // const dispatch = useDispatch();

    /// ESTADOS LOCAL ///
    const [localProducts, setLocalProducts] = useState([]);
    const [localCategories, setLocalCategories] = useState([]);

    useEffect(() => {
        setLocalCategories(allCategories);
    }, [allCategories]);

    /// HOOKS //
    useEffect(() => {
        setLocalProducts(allProducts);
    }, [allProducts]);

    /// RENDER ///
    return (
        <div>
            <div>
                <ManageBarProducts
                    localProducts={localProducts}
                    setLocalProducts={setLocalProducts}
                    localCategories={localCategories}
                />
            </div>
            <div>
                <ProductTable localProducts={localProducts} />
            </div>
        </div>
    );
}
