//import style from './Card.module.scss';
import React from "react";
import Card from "../Card/Card";
import { useState } from "react";
import Paginado from "../Paginado/Paginado";

export default function CardGrid({ localProducts }) {
  //dispatch
  //aqui se llama a la accion
  //console.log(localProducts);

  //PAGINADO//
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const Products = localProducts.slice(indexOfFirst, indexOfLast);

  function paginado(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return (
    <div>
      <div className="tw-grid tw-grid-cols-3 tw-gap-4 tw-m-4">
        {Products &&
          Products.map((el) => {
            return (
              <Card
                key={el.id}
                id={el.id}
                name={el.name}
                image={el.image}
                category={el.category}
                price={el.price}
              />
            );
          })}
      </div>
      <div className="tw-flex tw-justify-center">
      <Paginado
        productsPerPage={productsPerPage}
        paginado={paginado}
        localProducts={localProducts.length}
      />
    </div>
    </div>
  );
}
