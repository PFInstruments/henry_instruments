//import style from './Card.module.scss';
import React from "react";
import Card from "../Card/Card";
import { useState } from "react";
import Paginado from "../Paginado/Paginado";

export default function CardGrid({ localProducts }) {
  //dispatch
  //aqui se llama a la accion
  //console.log(localProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = localProducts.slice(indexOfFirst, indexOfLast);

  function paginado(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return (
    <div>
      <div className="tw-grid tw-grid-cols-3 tw-gap-4 tw-m-4">
        {currentProducts &&
          currentProducts.map((el) => {
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
    // <div className="card">
    //     {products&&products.map((el) => (
    //         <div className="card" key={el.id}>
    //             <div className="card-img-top">
    //                 <img src={el.image}
    //                     alt={el.name} />
    //             </div>
    //             <div className="card-body">
    //                 <div className="card-title">
    //                     <h3>{el.name}</h3>
    //                     <p>{el.description}</p>
    //                     <p>{el.price}</p>
    //                 </div>
    //             </div>
    //         </div>
    //     ))}
    // </div>
  );
}
