// import { getAllCategories, getAllProducts } from "../../../../Redux/actions";
import React, { useState /*, Fragment,  useEffect*/ } from "react";
// import { useDispatch /*useSelector*/ } from "react-redux";
import ManageBarProducts from "./ManageBarProducts";
import ProductTable from "./ProductTable";

export default function AdminManageProducts() {
    ///DISPATCH///
    // const dispatch = useDispatch();

    ///ESTADOS GLOBALES///

    // const { allProducts } = useSelector((state) => state);
    //  const { allCategories } = useSelector((state) => state);

    /// ESTADOS LOCAL ///
    const [localProducts, setLocalProducts] = useState([
        {
            id: 16565464684654,
            name: "Gibson SG",
            brand: "Gibson",
            model: "SG Standard",
            img: "https://http2.mlstatic.com/D_NQ_NP_626544-MLA47691080756_092021-W.jpg",
            category: "Guitarras",
            price: 1200,
            description: "La guitarra de Angus Young",
            stock: 50,
            sales: 15,
            active: true,
        },
    ]);
    const [localCategories] = useState([]);

    /*

    /// HOOKS //
    useEffect(() => {
        dispatch(getAllProducts());
        dispatch(getAllCategories());
    }, []);

    useEffect(() => {
        setLocalProducts(allProducts);
    }, [allProducts]);
    useEffect(() => {
        setLocalCategories(allCategories);
    }, [allCategories]);
*/
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
