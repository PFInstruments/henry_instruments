import React from "react";

function DropdownsFiltros() {
    return (
        <>
            <div className="dropdown tw-p-2">
                <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Orden
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li>
                        <a
                            className="dropdown-item"
                            value="*******AQUI VALORES DE FILTRADOS******"
                        >
                            Opcion 1
                        </a>
                    </li>
                    <li>
                        <a
                            className="dropdown-item"
                            value="*******AQUI VALORES DE FILTRADOS******"
                        >
                            Opcion 2
                        </a>
                    </li>
                    <li>
                        <a
                            className="dropdown-item"
                            value="*******AQUI VALORES DE FILTRADOS******"
                        >
                            Opcion 3
                        </a>
                    </li>
                </ul>
            </div>
            <div className="dropdown tw-p-2">
                <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Price
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li>
                        <a
                            className="dropdown-item"
                            value="*******AQUI VALORES DE FILTRADOS******"
                        >
                            Opcion 1
                        </a>
                    </li>
                    <li>
                        <a
                            className="dropdown-item"
                            value="*******AQUI VALORES DE FILTRADOS******"
                        >
                            Opcion 2
                        </a>
                    </li>
                    <li>
                        <a
                            className="dropdown-item"
                            value="*******AQUI VALORES DE FILTRADOS******"
                        >
                            Opcion 3
                        </a>
                    </li>
                </ul>
            </div>
            <div className="dropdown tw-p-2">
                <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Category
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li>
                        <a
                            className="dropdown-item"
                            value="*******AQUI VALORES DE FILTRADOS******"
                        >
                            Opcion 1
                        </a>
                    </li>
                    <li>
                        <a
                            className="dropdown-item"
                            value="*******AQUI VALORES DE FILTRADOS******"
                        >
                            Opcion 2
                        </a>
                    </li>
                    <li>
                        <a
                            className="dropdown-item"
                            value="*******AQUI VALORES DE FILTRADOS******"
                        >
                            Opcion 3
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default DropdownsFiltros;
