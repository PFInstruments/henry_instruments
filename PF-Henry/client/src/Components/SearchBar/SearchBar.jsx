import React from 'react';
import { useState } from 'react';
import DropdownsFiltros from '../DropdownsFiltros/DropdownsFiltros';

const SearchBar = ({ localProducts, setLocalproducts, allProducts }) => {

    const [name, setName] = useState('');

    const handleInputChange = (ev) => {
        setName(ev.target.value);
        if (name.length === 0) {
            setLocalproducts(allProducts);
        } else {
            let filter = localProducts.filter((p) => p.name.toLowerCase().indexOf(name.toLowerCase()) > -1);
            setLocalproducts(filter);
        };
        // console.log(name);
    };

    // const search = (ev) => {
    //     ev.preventDefault();
    //     console.log(searchProducts);
    // };

    return (
        <div>
            <div className="tw-flex tw-justify-center">
                <DropdownsFiltros localProducts={localProducts} setLocalproducts={setLocalproducts} />
                <nav className="navbar bg-light">
                    <div className="container-fluid">
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" value={name} placeholder="Search product" aria-label="Search" onChange={(ev) => handleInputChange(ev)} />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default SearchBar