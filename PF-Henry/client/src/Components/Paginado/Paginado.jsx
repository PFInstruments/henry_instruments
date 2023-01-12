import React from "react";

export default function Paginado({ productsPerPage, localProducts, paginado }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(localProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div>
            <ul className="pagination">
                {pageNumbers &&
                    pageNumbers.map((p) => (
                        <li key={p} onClick={() => paginado(p)}>
                            <span href="#" className="page-link tw-ml-4">
                                {p}
                            </span>
                        </li>
                    ))}
            </ul>
        </div>
    );
}
