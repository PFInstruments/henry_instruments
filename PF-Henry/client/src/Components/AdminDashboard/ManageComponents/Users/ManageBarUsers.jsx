import React from "react";

export default function ManageBarUsers({}) {
    ////ESTADOS LOCALES//////
    // const [localOrder, setLocalOrder] = useState();

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

                <label className="text-white">Role:</label>
                <form>
                    <select
                        className="form-select"
                        aria-label="All"
                        defaultValue="All"
                    >
                        <option>All</option>
                        <option value="1">Calzado</option>
                        <option value="2">Remeras</option>
                        <option value="3">Pantalones</option>
                    </select>
                </form>

                <label className="text-white">ORDER BY:</label>
                <form>
                    <select className="form-select d-flex" aria-label="-">
                        <option>Open this select menu</option>
                        <option value="1">A-Z</option>
                        <option value="2">Z-A</option>
                        <option value="3">Price Asc</option>
                        <option value="3">Price Desc</option>
                        <option value="3">Stock Asc</option>
                        <option value="3">Stock Desc</option>
                        <option value="3">Sales Asc</option>
                        <option value="3">Sales Desc</option>
                    </select>
                </form>
                <button
                    type="button"
                    className="btn btn-success"
                    data-bs-toggle="modal"
                    data-bs-target="#createUserModal"
                >
                    Create User
                </button>
                {/*<CreateUserModal localCategories={localCategories} />*/}
            </div>
        </nav>
    );
}
