import React from "react";
import Carousel from "../Carousel/Carousel";
import SearchBar from "../SearchBar/SearchBar.jsx";
import { getProducts, getCategories } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CardGrid from "../CardGrid/CardGrid";
import { orderBy } from "../Utils/Filters-Order/orderBy";
import Loading from "../Loading/Loading";
import { getUser } from "../../../../api/src/routes/controllers/User";
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

    ////HOOKS////
    useEffect(() => {
        dispatch(getProducts());
        dispatch(getCategories());
    }, [dispatch]);

    useEffect(() => {
        if(isAuthenticated) {
        dispatch(getUser(user.sub))
        }        
    }, [isAuthenticated, dispatch, user])

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
                {!localProducts.length ? (
                    <Loading />
                ) : (
                    <CardGrid localProducts={localProducts} />
                )}
            </div>
        </div>
    );
}
