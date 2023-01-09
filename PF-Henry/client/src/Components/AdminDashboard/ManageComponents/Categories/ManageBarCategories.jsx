import React /*useState */ from "react";
import CreateCategoryModal from "./CreateCategoryModal";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function ManageCategoryNavabar({
    setLocalCategories,
    localCategories,
    localOrder,
    setLocalOrder,
    allCategories,
}) {
    ///Dispatch//

    // const dispatch = useDispatch();
    ////ESTADOS LOCALES//////
    //   const [localOrder, setLocalOrder] = useState();

    const [content, setContent] = useState("");

    function handleChange(e) {
        setContent(e.target.value);
        if (!e.target.value) {
            setLocalCategories(allCategories.categories);
        } else {
            // eslint-disable-next-line array-callback-return

            let search = allCategories.categories.filter((cat) => {
                if (
                    cat.name
                        .toLowerCase()
                        .indexOf(e.target.value.toLowerCase()) > -1
                ) {
                    return cat;
                }
            });
            setLocalCategories(search);
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">
                {/* <form className="d-flex" role="search">
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <button className="btn btn-outline-success" type="submit">
                        Search
                    </button>
                </form> */}
                {/* <form className="flex items-center" role="search">
                    <div>
                        <input
                            type="text"
                            id="search"
                            autoComplete="off"
                            value={content}
                            placeholder="Search..."
                            onChange={(e) => handleChange(e)}
                            className="form-control me-2"
                        />
                    </div>
                </form> */}
                <form className="tw-flex tw-items-center">
                    <label for="simple-search" className="tw-sr-only">
                        Search
                    </label>
                    <div className="tw-relative tw-w-full">
                        <div className="tw-absolute tw-inset-y-0 tw-left-0 tw-flex tw-items-center tw-pl-3 tw-pointer-events-none">
                            <svg
                                aria-hidden="true"
                                className="tw-w-5 tw-h-5 tw-text-gray-500 tw-dark:text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </div>
                        <input
                            autoComplete="off"
                            onChange={(e) => handleChange(e)}
                            type="text"
                            id="simple-search"
                            className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg tw-focus:ring-blue-500 tw-focus:border-blue-500 tw-block tw-w-full tw-pl-10 tw-p-2.5  tw-dark:bg-gray-700 tw-dark:border-gray-600 tw-dark:placeholder-gray-400 tw-dark:text-white tw-dark:focus:ring-blue-500 tw-dark:focus:border-blue-500"
                            placeholder="Search"
                        />
                    </div>
                </form>
                <div className="tw-flex">
                    <label
                        for="orderCategories"
                        class="tw-block tw-mb-2 tw-text-lg tw-font-medium tw-text-white tw-mx-5 tw-text-center"
                    >
                        Order By:{"  "}
                    </label>
                    <form onChange={(e) => setLocalOrder(e.target.value)}>
                        <select
                            id="orderCategories"
                            className="form-select d-flex"
                            aria-label="-"
                        >
                            <option key="-" value="-">
                                ID
                            </option>
                            <option key="alphaAsc" value="A-Z">
                                A-Z
                            </option>
                            <option key="alphaDesc" value="Z-A">
                                Z-A
                            </option>
                            s
                            <option key="stockAsc" value="stockCatAsc">
                                Stock ↟
                            </option>
                            <option key="stockDesc" value="stockCatDesc">
                                Stock ↡
                            </option>
                        </select>
                    </form>
                </div>
                <button
                    type="button"
                    className="btn btn-success"
                    data-bs-toggle="modal"
                    data-bs-target="#createCategoryModal"
                >
                    Add Category +
                </button>
                <CreateCategoryModal localCategories={localCategories} />
            </div>
        </nav>
    );
}
