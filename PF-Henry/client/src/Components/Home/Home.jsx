import React from "react";
import Carousel from "../Carousel/Carousel";
import SearchBar from "../SearchBar/SearchBar.jsx";
import { getProducts, getCategories, getUser } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CardGrid from "../CardGrid/CardGrid";
import { orderBy } from "../Utils/Filters-Order/orderBy";
import Loading from "../Loading/Loading";
import { useAuth0 } from "@auth0/auth0-react";

//import ShoppingCart from "../ShoppingCart/ShoppingCart.jsx";
//let styleCard = { width: "18rem" };

export default function Home() {
    //// DISPATCH ////
    const dispatch = useDispatch();

    //// ESTADOS GLOBALES ////
    const { allProducts, allCategories } = useSelector((state) => state);

    //// ESTADOS LOCALES ////
    const [localProducts, setLocalProducts] = useState([]);
    const [localOrder, setLocalOrder] = useState("-");

    const { user, isAuthenticated } = useAuth0();

    console.log(user?.sub, isAuthenticated);

    ////HOOKS////
    useEffect(() => {
        dispatch(getProducts());
        dispatch(getCategories());
    }, []);

    useEffect(() => {
        if (isAuthenticated) {
            dispatch(getUser(user?.sub));
        }
    }, [isAuthenticated, user]);

    useEffect(() => {
        setLocalProducts(allProducts);
    }, [allProducts]);

    useEffect(() => {
        let arr = orderBy(localOrder, [...localProducts]);
        setLocalProducts(arr);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [localOrder]);

    return (
        <div>
            <Carousel />
            <div className="container  tw-rounded-lg">
                <SearchBar
                    localProducts={localProducts}
                    setLocalProducts={setLocalProducts}
                    localOrder={localOrder}
                    setLocalOrder={setLocalOrder}
                    allProducts={allProducts}
                    allCategories={allCategories}
                />
            </div>
            <div>
                {!allProducts.length ? (
                    <Loading />
                ) : !localProducts.length ? (
                    <div className="position-relative m-5">
                        <div className="position-absolute top-50 start-50 translate-middle">
                            <h3>This instrument does not exist</h3>
                        </div>
                    </div>
                ) : (
                    <CardGrid localProducts={localProducts} />
                )}
            </div>
        </div>
    );
}
