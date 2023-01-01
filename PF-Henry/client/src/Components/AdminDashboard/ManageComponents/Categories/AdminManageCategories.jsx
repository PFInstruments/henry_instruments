// import { getAllCategories } from "../../../../Redux/actions";
import React, { useEffect, useState } from "react";
// import { useDispatch /* useSelector*/ } from "react-redux";
import ManageBarCategories from "./ManageBarCategories";
import CategoryTable from "./CategoryTable";

export default function SellerManageCategories({ allCategories, allProducts }) {
    ///DISPATCH///
    // const dispatch = useDispatch();

    /// ESTADOS LOCALES ///
    const [localCategories, setLocalCategories] = useState([]);

    /// HOOKS //
    console.log(allCategories);
    useEffect(() => {
        setLocalCategories(allCategories);
    }, [allCategories]);

    /// RENDER ///
    return (
        <div>
            <div>
                <ManageBarCategories
                    localCategories={localCategories}
                    setLocalCategories={setLocalCategories}
                    allProducts={allProducts}
                    allCategories={allCategories}
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
