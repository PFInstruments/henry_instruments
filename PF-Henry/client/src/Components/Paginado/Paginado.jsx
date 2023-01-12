import React from "react";

export default function Paginado({ max, setCurrentPage, currentPage }) {
    ////VARIABLES y FUNCIONES ON CLICK////////

    let index = [];
    for (let i = 1; i <= max; i++) {
        index.push(i);
    }

    const onClickSetPage = (i) => {
        setCurrentPage(i);
    };

    return (
        <div>
            <ul className="pagination">
                {index?.map((i) => (
                    <li key={i} onClick={() => onClickSetPage(i)}>
                        <button
                            href="#"
                            className={
                                currentPage === i
                                    ? "page-link tw-ml-4 tw-bg-slate-400"
                                    : "page-link tw-ml-4"
                            }
                            disabled={currentPage === i ? true : false}
                        >
                            {i}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
