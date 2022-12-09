import React, { useState, useEffect } from "react";

import DropdownsFiltros from "../DropdownsFiltros/DropdownsFiltros.jsx";
import Footer from "../Footer/footer.jsx";
import NavBar from "../NavBar/NavBar";
import Card_Grid from "../Card_Grid/Card_Grid";
import Carousel from "../Carousel/Carousel";

//import ShoppingCart from "../ShoppingCart/ShoppingCart.jsx";
//let styleCard = { width: "18rem" };

export default function Home() {
    ///RENDER///
    return (
        <div>
            <NavBar />

            <Carousel />

            <div className="container  tw-rounded-lg">
                <Card_Grid />
            </div>
        </div>
    );
}
