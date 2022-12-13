import React from 'react';
import { useState } from 'react';
import DropdownsFiltros from '../DropdownsFiltros/DropdownsFiltros';

const SearchBar = ({ localProducts, setLocalproducts, allProducts }) => {

    const [name, setName] = useState('');

    // const handleInputChange = (ev) => {
    //     setName(ev.target.value);
    //     if (!ev.target.value) {
    //         setLocalproducts(allProducts);
    //     } else {
    //         let filter = localProducts.filter((p) => p.name.toLowerCase().indexOf(name.toLowerCase()) > -1);
    //         setLocalproducts(filter);
    //     };
    // };

    const handleInputChange = (ev) => {
        setName(ev.target.value);
        if (!ev.target.value) {
            setLocalproducts(allProducts);
        } else {
            // eslint-disable-next-line array-callback-return
            let filter = localProducts.filter((product) => {
                if (product.name.toLowerCase().indexOf(name.toLowerCase()) > -1
                    || product.trademark.toLowerCase().indexOf(name.toLowerCase()) > -1
                    || product.model.toLowerCase().indexOf(name.toLowerCase()) > -1
                ) {
                    return product;
                }
            });
            setLocalproducts(filter);
        };
    };

    return (
        <div>
            <div className="tw-flex tw-justify-center">
                <DropdownsFiltros />
                <nav className="navbar bg-light">
                    <div className="container-fluid">
                        <form className="d-flex" role="search">
                            <input className="form-control me-2 .ms-1"
                                type="search"
                                value={name}
                                placeholder="Search product"
                                aria-label="Search"
                                onChange={handleInputChange}
                            />
                        </form>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default SearchBar