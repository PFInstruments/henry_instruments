import React, { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

//import ShoppingCart from "../ShoppingCart/ShoppingCart.jsx";

export default function Home() {
    ///RENDER///
    return (
        <div>
            <NavBar />
            <h1>HOME</h1>
            <Footer />
        </div>
    );
}
