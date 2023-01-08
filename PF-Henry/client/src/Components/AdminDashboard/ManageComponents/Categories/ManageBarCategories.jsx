import React /*useState */ from "react";
import CreateCategoryModal from "./CreateCategoryModal";

export default function ManageCategoryNavabar({
    setLocalCategories,
    localCategories,
    localOrder,
    setLocalOrder,
}) {
    ////ESTADOS LOCALES//////
    //   const [localOrder, setLocalOrder] = useState();

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
                <form onChange={(e) => setLocalOrder(e.target.value)}>
                    <select className="form-select d-flex" aria-label="-">
                        <option>Open this select menu</option>
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
