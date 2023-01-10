// import { getAllCategories, getAllProducts } from "../../../../Redux/actions";
import React, { useState, useEffect } from "react";
// import { useDispatch /*,useSelector*/ } from "react-redux";
import ManageBarProducts from "./ManageBarProducts";
import ProductTable from "./ProductTable";
import { orderBy } from "../../../Utils/Filters-Order/orderBy";

export default function AdminManageProducts({ allProducts, allCategories }) {
    ///DISPATCH///
    // const dispatch = useDispatch();

    /// ESTADOS LOCAL ///
    const [localProducts, setLocalProducts] = useState([]);
    const [localCategories, setLocalCategories] = useState([]);
    const [localOrder, setLocalOrder] = useState("-");

    useEffect(() => {
        setLocalCategories(allCategories.categories);
    }, [allCategories]);

    /// HOOKS //
    useEffect(() => {
        setLocalProducts(allProducts);
    }, [allProducts]);

    useEffect(() => {
        let arr = orderBy(localOrder, [...localProducts]);
        setLocalProducts(arr);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [localOrder]);

    /// RENDER ///
    return (
        <div>
            <div>
                <ManageBarProducts
                    localProducts={localProducts}
                    setLocalProducts={setLocalProducts}
                    localCategories={localCategories}
                    allProducts={allProducts}
                    allCategories={allCategories}
                    localOrder={localOrder}
                    setLocalOrder={setLocalOrder}
                />
            </div>
            <div>
                <ProductTable
                    localProducts={localProducts}
                    localCategories={localCategories}
                />
            </div>
        </div>
    );
}
