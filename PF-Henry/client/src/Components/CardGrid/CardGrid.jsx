import React, { useEffect } from "react";
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

    useEffect(() => {
        setCurrentPage(1);
    }, [localProducts]);

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
            <div className="tw-grid tw-grid-flow-row tw-gap-2 tw-text-neutral-600 sm:tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 xl:tw-grid-cols-3">
                {!localProducts ? (
                    <div></div>
                ) : localProducts[0] === "Product Not Found" ? (
                    <div className="position-relative m-5">
                        <div className="position-absolute top-50 start-50 translate-middle">
                            <h3>This instrument does not exist</h3>
                        </div>
                    </div>
                ) : (
                    localProducts
                        .slice(
                            (currentPage - 1) * productsPerPage,
                            (currentPage - 1) * productsPerPage +
                                productsPerPage
                        )
                        .map((el) => {
                            if (el.active && el.stock > 0)
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
                                        reviews={el.reviews}
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
                    setProductsPerPage={setProductsPerPage}
                />
            </div>
        </div>
    );
}
