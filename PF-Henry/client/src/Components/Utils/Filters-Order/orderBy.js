////Orden por ID////

export function orderID(array) {
    let result = array?.sort((a, b) => {
        if (parseInt(a.id) > parseInt(b.id)) {
            return 1;
        }
        if (parseInt(a.id) < parseInt(b.id)) {
            return -1;
        }

        return 0;
    });
    return result;
}

////ORDEN POR ALPHA////

export function orderAlphaAZ(array) {
    let result = array?.sort((a, b) => {
        if (a.name > b.name) {
            return 1;
        }
        if (a.name < b.name) {
            return -1;
        }

        return 0;
    });
    return result;
}

export function orderAlphaZA(array) {
    let result = array
        .sort((a, b) => {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }

            return 0;
        })
        .reverse();
    return result;
}

/////ORDER PRICE ////

export function orderPriceAsc(array) {
    let result = array.sort((a, b) => {
        if (parseFloat(a.price) > parseFloat(b.price)) {
            return 1;
        }
        if (parseFloat(a.price) < parseFloat(b.price)) {
            return -1;
        }

        return 0;
    });
    return result;
}

export function orderPriceDesc(array) {
    let result = array.sort((a, b) => {
        if (parseFloat(a.price) < parseFloat(b.price)) {
            return 1;
        }
        if (parseFloat(a.price) > parseFloat(b.price)) {
            return -1;
        }

        return 0;
    });
    return result;
}
////ORDER RATING////
export function orderRatingAsc(array) {
    let result = array.sort((a, b) => {
        if (parseFloat(a.rating) > parseFloat(b.rating)) {
            return 1;
        }
        if (parseFloat(a.rating) < parseFloat(b.rating)) {
            return -1;
        }

        return 0;
    });
    return result;
}

export function orderRatingDesc(array) {
    let result = array.sort((a, b) => {
        if (parseFloat(a.rating) < parseFloat(b.rating)) {
            return 1;
        }
        if (parseFloat(a.rating) > parseFloat(b.rating)) {
            return -1;
        }

        return 0;
    });
    return result;
}

////ORDER STOCK CATEGORIAS////
export function orderStockCatAsc(array) {
    let result = array.sort((a, b) => {
        if (parseFloat(a.products.length) > parseFloat(b.products.length)) {
            return 1;
        }
        if (parseFloat(a.products.length) < parseFloat(b.products.length)) {
            return -1;
        }

        return 0;
    });
    return result;
}

export function orderStockCatDesc(array) {
    let result = array.sort((a, b) => {
        if (parseFloat(a.products.length) < parseFloat(b.products.length)) {
            return 1;
        }
        if (parseFloat(a.products.length) > parseFloat(b.products.length)) {
            return -1;
        }

        return 0;
    });
    return result;
}

////ORDER STOCK CATEGORIAS////
export function orderStockProdAsc(array) {
    let result = array.sort((a, b) => {
        if (parseFloat(a.stock) > parseFloat(b.stock)) {
            return 1;
        }
        if (parseFloat(a.stock) < parseFloat(b.stock)) {
            return -1;
        }

        return 0;
    });
    return result;
}

export function orderStockProdDesc(array) {
    let result = array.sort((a, b) => {
        if (parseFloat(a.stock) < parseFloat(b.stock)) {
            return 1;
        }
        if (parseFloat(a.stock) > parseFloat(b.stock)) {
            return -1;
        }

        return 0;
    });
    return result;
}

export function orderBrandAZ(array) {
    let result = array?.sort((a, b) => {
        if (a.brand > b.brand) {
            return 1;
        }
        if (a.brand < b.brand) {
            return -1;
        }

        return 0;
    });
    return result;
}

export function orderBrandZA(array) {
    let result = array
        .sort((a, b) => {
            if (a.brand > b.brand) {
                return 1;
            }
            if (a.brand < b.brand) {
                return -1;
            }

            return 0;
        })
        .reverse();
    return result;
}

//// FUNCION ORDER BY ////

export function orderBy(e, array) {
    let sorted = [];
    if (array === undefined) {
        sorted = [];
    }
    if (array[0] === "Product Not Found") {
        sorted = array;
    }
    if (e === "-") {
        sorted = orderID(array);
    }
    if (e === "A-Z") {
        sorted = orderAlphaAZ(array);
    }
    if (e === "Z-A") {
        sorted = orderAlphaZA(array);
    }
    if (e === "priceAsc") {
        sorted = orderPriceAsc(array);
    }
    if (e === "priceDesc") {
        sorted = orderPriceDesc(array);
    }
    if (e === "ratingAsc") {
        sorted = orderRatingAsc(array);
    }
    if (e === "ratingDesc") {
        sorted = orderRatingDesc(array);
    }
    if (e === "stockCatAsc") {
        sorted = orderStockCatAsc(array);
    }
    if (e === "stockCatDesc") {
        sorted = orderStockCatDesc(array);
    }
    if (e === "stockProdAsc") {
        sorted = orderStockProdAsc(array);
    }
    if (e === "stockProdDesc") {
        sorted = orderStockProdDesc(array);
    }
    if (e === "brandDesc") {
        sorted = orderBrandAZ(array);
    }
    if (e === "brandAsc") {
        sorted = orderBrandZA(array);
    }

    return sorted;
}
