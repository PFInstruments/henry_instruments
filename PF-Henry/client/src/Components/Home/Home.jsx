import React from "react";
import Carousel from "../Carousel/Carousel";
import SearchBar from "../SearchBar/SearchBar.jsx";
import { getProducts, getCategories } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CardGrid from "../CardGrid/CardGrid";
import { orderBy } from "../Utils/Filters-Order/orderBy";
import Loading from "../Loading/Loading";

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

    ////HOOKS////
    useEffect(() => {
        dispatch(getProducts());
        dispatch(getCategories());
    }, [dispatch]);

    useEffect(() => {
        setLocalProducts(allProducts);
    }, [allProducts]);

    useEffect(() => {
        let arr = orderBy(localOrder, [...localProducts]);
        setLocalProducts(arr);
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
