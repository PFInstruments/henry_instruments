import React from "react";
import Card from "../Card/Card";
import Paginado from "../Paginado/Paginado";
import { useState } from "react";

export default function CardGrid({ localProducts }) {
    //dispatch
    //aqui se llama a la accion
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
            <br />

            <div className="tw-flex tw-justify-center">
                <Paginado
                    productsPerPage={productsPerPage}
                    paginado={paginado}
                    localProducts={localProducts.length}
                />
            </div>
            <div className="tw-grid tw-grid-cols-3 tw-gap-4 tw-m-4">
                {currentProducts &&
                    currentProducts.map((el) => {
                        return (
                            <Card
                                key={el.id}
                                id={el.id}
                                name={el.name}
                                ratin={el.rating}
                                image={el.image}
                                category={el.category}
                                price={el.price}
                                brand={el.brand}
                                model={el.model}
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
