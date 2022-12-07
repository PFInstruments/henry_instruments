import React, { useState, useEffect } from "react";
import Footer from "../Footer/footer.jsx";
import NavBar from "../NavBar/NavBar";

//import ShoppingCart from "../ShoppingCart/ShoppingCart.jsx";
let styleCard = { width: "18rem" };

export default function Home() {
  ///RENDER///
  return (
    <div>
      <NavBar />
      <h1>HOME</h1>
      <button className="btn btn-primary ">Bootstrap</button>

      <button className="tw-bg-blue-500 hover:tw-bg-blue-700 tw-text-white tw-font-bold tw-py-2 tw-px-4 tw-rounded-full tw-border-dashed ">
        Tailwind
      </button>
    </div>
  );
}
