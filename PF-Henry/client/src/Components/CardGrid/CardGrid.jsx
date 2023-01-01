import React from "react";
import Card from "../Card/Card";
import Paginado from "../Paginado/Paginado";
import { useState } from "react";

export default function CardGrid({ localProducts }) {
    //dispatch
    //aqui se llama a la accion
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(6);
    // const indexOfLast = currentPage * productsPerPage;
    // const indexOfFirst = indexOfLast - productsPerPage;
    //  const currentProducts = localProducts.slice(indexOfFirst, indexOfLast);

    function paginado(pageNumber) {
        setCurrentPage(pageNumber);
    }
    console.log(localProducts);
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
                {!localProducts ? (
                    <div></div>
                ) : localProducts[0] === "Product Not Found" ? (
                    <h1>Poduct Not Found</h1>
                ) : (
                    localProducts
                        .slice(
                            (currentPage - 1) * productsPerPage,
                            (currentPage - 1) * productsPerPage +
                                productsPerPage
                        )
                        .map((el) => {
                            if (el.active)
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
                        })
                )}
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
