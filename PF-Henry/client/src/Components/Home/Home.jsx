import NavBar from "../NavBar/NavBar";
import Carousel from "../Carousel/Carousel";
import SearchBar from "../SearchBar/SearchBar.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProducts } from "../../Redux/actions";
import CardGrid from "../CardGrid/CardGrid";

//import ShoppingCart from "../ShoppingCart/ShoppingCart.jsx";
//let styleCard = { width: "18rem" };

export default function Home() {
    ///RENDER///

    const dispatch = useDispatch();

    let allProducts = useSelector((state) => state.allProducts);

    let [localProducts, setLocalproducts] = useState([]);

    useEffect(() => {
        dispatch(getProducts());
    }, []);

    useEffect(() => {
        setLocalproducts(allProducts);
    }, [allProducts]);

    return (
        <div>
            <Carousel />

            <div className="container  tw-rounded-lg">
                <SearchBar
                    localProducts={localProducts}
                    setLocalproducts={setLocalproducts}
                    allProducts={allProducts}
                />
            </div>
            <div>
                <CardGrid localProducts={localProducts} />
            </div>
        </div>
    );
}
