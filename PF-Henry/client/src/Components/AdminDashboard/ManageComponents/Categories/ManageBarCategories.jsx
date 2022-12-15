import React /*useState */ from "react";
import CreateCategoryModal from "./CreateCategoryModal";

export default function ManageCategoryNavabar() {
    ////ESTADOS LOCALES//////
    //   const [localOrder, setLocalOrder] = useState();
    //   const [localCategories, setLocalCategories] = useState();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">
                <form className="d-flex" role="search">
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <button className="btn btn-outline-success" type="submit">
                        Search
                    </button>
                </form>

                <label className="text-white">ORDER BY:</label>
                <form>
                    <select className="form-select d-flex" aria-label="-">
                        <option>Open this select menu</option>
                        <option value="1">A-Z</option>
                        <option value="2">Z-A</option>s
                        <option value="3">Stock Asc</option>
                        <option value="3">Stock Desc</option>
                    </select>
                </form>
                <button
                    type="button"
                    className="btn btn-success"
                    data-bs-toggle="modal"
                    data-bs-target="#createCategoryModal"
                >
                    Add Category +
                </button>
                <CreateCategoryModal />
            </div>
        </nav>
    );
}
