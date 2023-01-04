import { useEffect } from "react";
import { useState } from "react";
import { orderBy } from "../Utils/Filters-Order/orderBy";

export default function Filters({
    content,
    setLocalProducts,
    localOrder,
    setLocalOrder,
    allProducts,
    allCategories,
}) {
    const [disabledState, setDisabledState] = useState(false);
    const [localCategory, setLocalCategory] = useState("All");
    const [localBrand, setLocalBrand] = useState("All");

    /////// HOOKS /////////

    useEffect(() => {
        if (content.length > 0) {
            setDisabledState(true);
        } else setDisabledState(false);
    }, [content]);

    console.log(allCategories);
    /////Creo una lista de tipos en orden ascendente y Creo el componente option list/////

    let categoryList = allCategories.categories?.map((t) => {
        return t.name;
    });
    categoryList?.sort();
    let optionsList = [];
    for (let i = 0; i < categoryList?.length; i++) {
        optionsList.push(
            <option value={categoryList[i]} key={i}>
                {categoryList[i].charAt(0).toUpperCase() +
                    categoryList[i].slice(1)}
            </option>
        );
    }

    ///////Creo Array  de marcas por nombre unico ///////////
    function getUniqueBrands(array) {
        const uniqueBrands = [];

        for (let i = 0; i < array.length; i++) {
            const product = array[i];

            if (!uniqueBrands.includes(product.brand)) {
                uniqueBrands.push(product.brand);
            }
        }

        return uniqueBrands;
    }
    //// Creo lista de brands unicas //////
    const uniqueBrands = getUniqueBrands(allProducts);
    console.log(uniqueBrands);

    let brandList = uniqueBrands?.map((t) => {
        return t;
    });
    brandList?.sort();
    let uniqueBrandList = [];
    for (let i = 0; i < brandList?.length; i++) {
        uniqueBrandList.push(
            <option value={brandList[i]} key={i + 50}>
                {brandList[i].charAt(0).toUpperCase() + brandList[i].slice(1)}
            </option>
        );
    }

    ///////////////////////////////

    ///////FUNCIONES SETTERS ONCHANGE EL ESTADO LOCAL///////
    function setterCategory(e) {
        console.log(e.target.value);
        setLocalCategory(e.target.value);
    }

    function setterBrand(e) {
        setLocalBrand(e.target.value);
    }

    //////Funciones Filtro//////////
    function filterCategory(c, array) {
        let productByCategory = array.filter((product) => {
            return product.category.name === c;
        });
        return productByCategory;
    }

    function filterBrand(b, array) {
        let productByBrand = array.filter((product) => {
            return product.brand === b;
        });
        return productByBrand;
    }

    //////Event Handelers//////////////

    function applyFilter(e) {
        e.preventDefault();
        let productByCategory = filterCategory(localCategory, allProducts);
        let productByBrand = filterBrand(localBrand, allProducts);
        let productBothFilters = filterBrand(localBrand, productByCategory);

        if (localCategory === "All" && localBrand === "All") {
            setLocalProducts(orderBy(localOrder, allProducts));
        }
        if (productByCategory.length > 0 && localBrand === "All") {
            setLocalProducts(orderBy(localOrder, productByCategory));
        }
        if (productByBrand.length > 0 && localCategory === "All") {
            setLocalProducts(orderBy(localOrder, productByBrand));
        }
        if (productBothFilters.length > 0) {
            setLocalProducts(orderBy(localOrder, productBothFilters));

            console.log("bothflters");
        }
        if (
            productBothFilters.length === 0 &&
            localCategory !== "All" &&
            productBothFilters.length === 0 &&
            localBrand !== "All"
        ) {
            console.log("No filter match");
            setLocalProducts(["Product Not Found"]);
        }
        if (
            (productByCategory.length === 0 && localCategory !== "All") ||
            (productByBrand.length === 0 && localBrand !== "All")
        ) {
            console.log("No filter match");
            setLocalProducts(["Product Not Found"]);
        }
    }

    //RENDER//
    return (
        <div>
            <form>
                <label>FILTERS:</label>
                <label>Category:</label>
                <select
                    name="selectCategory"
                    disabled={disabledState}
                    onChange={(e) => setterCategory(e)}
                >
                    <option key="keyAllCategory" value="All">
                        All
                    </option>
                    {optionsList}
                </select>
                <label>Brand:</label>
                <select
                    name="selectBrand"
                    disabled={disabledState}
                    onChange={(e) => setterBrand(e)}
                >
                    <option key="keyAllBrands" value="All">
                        All
                    </option>
                    {uniqueBrandList}
                </select>
                <button
                    disabled={disabledState}
                    className="btn btn-success"
                    name="apply"
                    onClick={(e) => {
                        applyFilter(e);
                    }}
                >
                    Apply
                </button>
            </form>
            <span></span>
            <form onChange={(e) => setLocalOrder(e.target.value)}>
                <label>Order by:</label>
                <select name="orderBy">
                    <option key="-" value="-">
                        -
                    </option>
                    <option key="alphaAsc" value="A-Z">
                        A-Z
                    </option>
                    <option key="alphaDesc" value="Z-A">
                        Z-A
                    </option>
                    <option key="priceDesc" value="priceDesc">
                        Price ↡
                    </option>
                    <option key="priceAsc" value="priceAsc">
                        Price ↟
                    </option>
                    <option key="ratingDesc" value="ratingDesc">
                        Rating ↡
                    </option>
                    <option key="ratingAsc" value="ratingAsc">
                        Rating ↟
                    </option>
                </select>
            </form>
        </div>
    );
}
