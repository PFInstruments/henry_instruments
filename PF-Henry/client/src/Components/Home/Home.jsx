import React, { useState, useEffect } from "react";
<<<<<<< HEAD
//import DropdownsFiltros from "../DropdownsFiltros/DropdownsFiltros.jsx";
//import Footer from "../Footer/footer.jsx";
//import NavBar from "../NavBar/NavBar";
import Carousel from "../Carousel/Carousel";
=======
import DropdownsFiltros from "../DropdownsFiltros/DropdownsFiltros.jsx";
import Footer from "../Footer/footer.jsx";
import NavBar from "../NavBar/NavBar";
import Card from "../Card/Card";
>>>>>>> dev

//import ShoppingCart from "../ShoppingCart/ShoppingCart.jsx";
//let styleCard = { width: "18rem" };

export default function Home() {
  ///RENDER///
  return (
    <div>
   
      <h1>HOME</h1>

      <Carousel />
      <button className="btn btn-primary ">Bootstrap</button>

      <button className="tw-bg-blue-500 hover:tw-bg-blue-700 tw-text-white tw-font-bold tw-py-2 tw-px-4 tw-rounded-full tw-border-dashed ">
        Tailwind
      </button>
      <div className="tw-flex tw-justify-center">
      
      </div>
      

      <div className="container  tw-rounded-lg">
      {/* <div className="tw-grid tw-grid-cols-3 tw-gap-4 tw-m-4 "> */}
      <Card />
      {/* </div> */}
      </div>
    </div>
  );
}
