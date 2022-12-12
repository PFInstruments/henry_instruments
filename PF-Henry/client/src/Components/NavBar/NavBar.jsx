import { Link } from "react-router-dom";
import React, { useState, useReducer, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

let scrollHeight = {
    "--bs-scroll-height": "100px",
};
export default function NavBar() {
    /// ESTADO GLOBAL ////
    const { allcategories } = useSelector((state) => state);

    /// LISTA DE CATEGORIAS POR ORDEN ALPHABETICO///
    let categoryList = allcategories?.map((c) => {
        return c.name;
    });
    categoryList?.sort();
    let optionsList = [];
    for (let i = 0; i < categoryList?.length; i++) {
        optionsList?.push(
            <li key={i}>
                {categoryList[i].charAt(0).toUpperCase() +
                    categoryList[i].slice(1)}
            </li>
        );
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg  ">
                <div className="container">
                    <Link to="/">
                        <div>
                            <h1>
                                <img
                                    src="https://see.fontimg.com/api/renderfont4/ZjpJ/eyJyIjoiZnMiLCJoIjo0OCwidyI6MTAwMCwiZnMiOjQ4LCJmZ2MiOiIjNkMzMkM3IiwiYmdjIjoiIzIzMTJDMSIsInQiOjF9/SGVucnkgTXVzaWM/music-magic-personal-use-regular.png"
                                    alt="Henry Music"
                                />
                            </h1>
                        </div>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarScroll"
                        aria-controls="navbarScroll"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul
                            className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
                            style={scrollHeight}
                        >
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    aria-current="page"
                                    href="#"
                                >
                                    Contacto
                                </a>
                            </li>

                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Categorias
                                </a>
                                <ul className="dropdown-menu">
                                    <li key="keyAllCategories" value="-">
                                        -
                                    </li>
                                    {optionsList}
                                </ul>
                            </li>
                        </ul>
                        <div className="d-flex tw-space-x-4 ">
                            <button
                                type="button"
                                class="btn btn-outline-secondary"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    class="bi bi-cart"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                                </svg>
                            </button>
                            <button
                                type="button"
                                class="btn btn-outline-success"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    class="bi bi-person"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"></path>
                                </svg>{" "}
                                Log in
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
