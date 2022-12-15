// import { getAllCategories } from "../../../../Redux/actions";
import React, { /*Fragment,, useEffect  */ useState } from "react";
import { useDispatch /* useSelector*/ } from "react-redux";
import ManageBarCategories from "./ManageBarCategories";
import CategoryTable from "./CategoryTable";

export default function SellerManageCategories() {
    ///DISPATCH///
    const dispatch = useDispatch();

    ///ESTADOS GLOBALES///

    //   const { allCategories } = useSelector((state) => state);

    /// ESTADOS LOCALES ///
    const [localCategories, setLocalCategories] = useState([]);

    /// HOOKS //
    /*
    useEffect(() => {
        dispatch(getAllCategories());
    }, []);

    useEffect(() => {
        setLocalCategories(allCategories);
    }, [allCategories]);
*/
    /// RENDER ///
    return (
        <div>
            <div>
                <ManageBarCategories
                    localCategories={localCategories}
                    setLocalCategories={setLocalCategories}
                />
            </div>
            <div>
                <CategoryTable localCategories={localCategories} />
            </div>
        </div>
    );
}
