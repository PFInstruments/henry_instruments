import React from "react";
import { Link } from "react-router-dom";

let scrollHeight = {
    "--bs-scroll-height": "100px",
};
export default function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg ">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        Music Store
                    </a>
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
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Action
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Another action
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Something else here
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Link</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button
                                className="btn btn-outline-success"
                                type="submit"
                            >
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}
