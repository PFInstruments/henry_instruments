// import { getAllCategories } from "../../../../Redux/actions";
import React, { useEffect, useState } from "react";
// import { useDispatch /* useSelector*/ } from "react-redux";
import ManageBarCategories from "./ManageBarCategories";
import CategoryTable from "./CategoryTable";
import { orderBy } from "../../../Utils/Filters-Order/orderBy";

export default function SellerManageCategories({ allCategories, allProducts }) {
    ///DISPATCH///
    // const dispatch = useDispatch();

    /// ESTADOS LOCALES ///
    const [localCategories, setLocalCategories] = useState([]);
    const [localOrder, setLocalOrder] = useState("-");

    /// HOOKS //
    useEffect(() => {
        setLocalCategories(allCategories.categories);
    }, [allCategories]);

    useEffect(() => {
        let arr = orderBy(localOrder, [...localCategories]);
        setLocalCategories(arr);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [localOrder]);
    /// RENDER ///
    return (
        <div>
            <div>
                <ManageBarCategories
                    localCategories={localCategories}
                    setLocalCategories={setLocalCategories}
                    allProducts={allProducts}
                    allCategories={allCategories}
                    localOrder={localOrder}
                    setLocalOrder={setLocalOrder}
                />
            </div>
            <div>
                <CategoryTable
                    allCategories={allCategories}
                    localCategories={localCategories}
                    allProducts={allProducts}
                    setLocalCategories={setLocalCategories}
                />
            </div>
        </div>
    );
}
