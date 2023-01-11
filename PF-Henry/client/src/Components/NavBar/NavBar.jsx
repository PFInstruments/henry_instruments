/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import Login from "../Login/login";
import Logout from "../Login/Logout";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "../Login/Profile";
import { useSelector } from "react-redux";

let scrollHeight = {
    "--bs-scroll-height": "100px",
};
const { URL_VERCEL } = process.env;
export default function NavBar() {
    const { isAuthenticated } = useAuth0();
    /// ESTADO GLOBAL ////
    const { allcategories } = useSelector((state) => state);
    const cart = useSelector((state) => state.cart);
    const { user } = useSelector((state) => state);

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
                    <Link className="position-absolute  end-45" to="/">
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
                            {/* <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    aria-current="page"
                                    href="#"
                                >
                                    Contacto
                                </a>
                            </li> */}
                            {/* <li className="nav-item dropdown">
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
              </li> */}
                        </ul>
                        <div className="d-flex tw-space-x-4">
                            {user.admin &&
                            document.URL !== `${URL_VERCEL}/admin` ? (
                                <Link to="admin">
                                    <button
                                        type="button"
                                        className="tw-text-purple-700 tw-h-11 tw-hover:text-white tw-border tw-border-purple-700 tw-hover:bg-purple-800 tw-focus:tw-ring-4 tw-focus:tw-outline-none tw-focus:tw-ring-purple-300 tw-font-medium tw-rounded-lg tw-text-md tw-px-5 tw-py-2.5 tw-text-center tw-mr-2 mb-2 tw-dark:tw-border-purple-400 tw-dark:tw-text-purple-400 tw-dark:tw-hover:tw-text-white tw-dark:tw-hover:tw-bg-purple-500 tw-dark:focus:tw-ring-purple-900"
                                    >
                                        Admin Dashboard
                                    </button>
                                </Link>
                            ) : null}
                            <Link to="/cart">
                                <button
                                    type="button"
                                    className=" tw-relative tw-flex
                tw-items-center tw-justify-center tw-w-10 tw-h-10 tw-rounded-full tw-border tw-border-gray-300 tw-text-gray-500 hover:tw-text-gray-700 hover:tw-border-gray-400 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-indigo-500"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-cart tw-fill-current"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                                    </svg>

                                    {cart.length > 0 ? (
                                        <span className="tw-absolute tw-right-0 tw-top-0 tw-rounded-full tw-bg-red-600 tw-w-4 tw-h-4 tw-top tw-right tw-p-0 tw-m-0 tw-text-white tw-font-mono tw-text-sm  tw-leading-tight tw-text-center">
                                            {cart.length}
                                        </span>
                                    ) : null}
                                </button>
                            </Link>
                            {isAuthenticated ? (
                                <>
                                    <Profile />
                                    <Logout />
                                </>
                            ) : (
                                <Login />
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
