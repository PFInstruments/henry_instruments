// import { getSpaceUntilMaxLength } from "@testing-library/user-event/dist/utils";
import React, { useState, useReducer /* useEffect */ } from "react";
import { useDispatch /* useSelector*/ } from "react-redux";
import {
    getProducts,
    postProduct,

    //   getAllCategories,
} from "../../../../Redux/actions";

// import checkmark from "../../../../Images/checkmark.gif";
import checkmarkInfinito from "../../../../Images/checkmarkInfinito.gif";

export default function CreateProductModal({
    localCategories,
    setLocalProducts,
}) {
    ///DISPATCH///
    const dispatch = useDispatch();

    ///ESTADOS LOCALES///
    //    const [disabledSubmit, setDisabledSubmit] = useState(true);
    //    const [checkActive, setCheckActive] = useState([]);
    const [postSuccess, setPostSuccess] = useState(false);

    /////Creo una lista de categorias en orden ascendente y Creo el componente option list/////
    let categoryList = localCategories.categories?.map((c) => {
        return c.name;
    });
    categoryList?.sort();
    let optionsList = [];
    for (let i = 0; i < categoryList?.length; i++) {
        optionsList?.push(
            <option value={categoryList[i]} key={i}>
                {categoryList[i].charAt(0).toUpperCase() +
                    categoryList[i].slice(1)}
            </option>
        );
    }

    ///Variables///
    //  const checkMarkGif = checkmark;
    const checkMarkGifInfinito = checkmarkInfinito;
    /////LOCAL REDUCER//////////
    const initialState = {
        name: "",
        image: "",
        category: "",
        model: "",
        brand: "",
        price: 0,
        description: "",
        stock: 0,
        active: false,
    };

    const createProductReducer = (state, action) => {
        // eslint-disable-next-line default-case
        switch (action.type) {
            case "SET_NAME": {
                return {
                    ...state,
                    name: action.payload,
                };
            }
            case "SET_MODEL": {
                return {
                    ...state,
                    model: action.payload,
                };
            }
            case "SET_BRAND": {
                return {
                    ...state,
                    brand: action.payload,
                };
            }
            case "SET_IMAGE": {
                return {
                    ...state,
                    image: action.payload,
                };
            }
            case "SET_CATEGORY": {
                return {
                    ...state,
                    category: action.payload,
                };
            }
            case "SET_PRICE": {
                return {
                    ...state,
                    price: action.payload,
                };
            }
            case "SET_DESCRIPTION": {
                return {
                    ...state,
                    description: action.payload,
                };
            }
            case "SET_STOCK": {
                return {
                    ...state,
                    stock: action.payload,
                };
            }
            case "SET_ACTIVE": {
                return {
                    ...state,
                    active: action.payload,
                };
            }

            case "SUBMIT": {
                return {
                    ...state,
                    ...initialState,
                };
            }
        }
    };
    const [productForm, setProductForm] = useReducer(
        createProductReducer,
        initialState
    );

    ////SETEO LA FOTO  A BASE 64////

    const setFileToBase = (file) => {
        const reader = new FileReader();
        if (file) {
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setProductForm({
                    type: "SET_IMAGE",
                    payload: reader.result,
                });
            };
        } else {
            setProductForm({
                type: "SET_IMAGE",
                payload: "",
            });
        }
    };

    //EVENT HANDLERS///

    // const handleCheck = (e) => {
    //     if (e.target.value === "on") {
    //         setProductForm({
    //             type: "SET_ACTIVE",
    //             payload: true,
    //         });
    //     }
    //     if (e.target.value === "off") {
    //         setProductForm({
    //             type: "SET_ACTIVE",
    //             payload: false,
    //         });
    //     }
    // };

    const refresh = (e) => {
        setPostSuccess(false);
        dispatch(getProducts());
    };

    const handleImage = (e) => {
        const file = e.target.files[0];
        setFileToBase(file);
    };

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(postProduct(productForm));

        setPostSuccess(true);
        console.log(productForm);

        setProductForm({ type: "SUBMIT" });
    }

    return (
        <div
            className="modal fade "
            id="createProductModal"
            tabIndex="-1"
            aria-labelledby="createProductModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-scrollable">
                {!postSuccess ? (
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1
                                className="modal-title fs-5"
                                id="createProductModalLabel"
                            >
                                Add Product
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <form
                                onSubmit={(e) => {
                                    handleSubmit(e);
                                }}
                            >
                                <div className="mb-3">
                                    <label
                                        htmlFor="product-name"
                                        className="col-form-label"
                                    >
                                        Name:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="product-name"
                                        value={productForm.name}
                                        onChange={(e) =>
                                            setProductForm({
                                                type: "SET_NAME",
                                                payload: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="product-model"
                                        className="col-form-label"
                                    >
                                        Model:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="product-model"
                                        value={productForm.model}
                                        onChange={(e) =>
                                            setProductForm({
                                                type: "SET_MODEL",
                                                payload: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="product-brand"
                                        className="col-form-label"
                                    >
                                        Brand:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="product-brand"
                                        value={productForm.brand}
                                        onChange={(e) =>
                                            setProductForm({
                                                type: "SET_BRAND",
                                                payload: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                                <div className="input-group mb-3">
                                    <label
                                        htmlFor="product-brand"
                                        className="col-form-label"
                                    >
                                        {"Price: "}
                                    </label>

                                    <span
                                        className="input-group-text"
                                        id="basic-addon1"
                                    >
                                        $
                                    </span>
                                    <input
                                        value={productForm.price}
                                        min={0}
                                        step={0.5}
                                        id="product-price"
                                        type="number"
                                        className="form-control"
                                        aria-label="Price"
                                        aria-describedby="basic-addon1"
                                        onChange={(e) => {
                                            setProductForm({
                                                type: "SET_PRICE",
                                                payload: e.target.value,
                                            });
                                        }}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label
                                        className="col-form-label"
                                        htmlFor="inputGroupFile01"
                                    >
                                        Image
                                    </label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        file={productForm.image}
                                        filename={productForm.image}
                                        id="inputGroupFile01"
                                        onChange={handleImage}
                                    />
                                </div>
                                <div>
                                    {productForm.image[0] && (
                                        // eslint-disable-next-line jsx-a11y/alt-text
                                        <img
                                            src={productForm.image}
                                            className="listImg img-thumbnail"
                                        ></img>
                                    )}
                                </div>
                                <div className="mb-3">
                                    <label
                                        className="col-form-label"
                                        htmlFor="inputGroupFile01"
                                    >
                                        Category
                                    </label>
                                    <select
                                        name="selectType"
                                        className="form-select"
                                        onChange={(e) => {
                                            setProductForm({
                                                type: "SET_CATEGORY",
                                                payload: e.target.value,
                                            });
                                        }}
                                    >
                                        <option
                                            key="keyAllCategories"
                                            value="-"
                                        >
                                            -
                                        </option>
                                        {optionsList}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="message-text"
                                        className="col-form-label"
                                    >
                                        Description:
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="message-text"
                                        value={productForm.description}
                                        onChange={(e) => {
                                            setProductForm({
                                                type: "SET_DESCRIPTION",
                                                payload: e.target.value,
                                            });
                                        }}
                                    ></textarea>
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="product-stock"
                                        className="col-form-label"
                                    >
                                        Stock:
                                    </label>
                                    <input
                                        min={0}
                                        step={1}
                                        type="number"
                                        className="form-control"
                                        id="product-stock"
                                        value={productForm.stock}
                                        onChange={(e) =>
                                            setProductForm({
                                                type: "SET_STOCK",
                                                payload: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        className="col-form-label"
                                        htmlFor="flexSwitchCheckChecked"
                                    >
                                        Active
                                    </label>
                                    <div className="form-check form-switch">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            // eslint-disable-next-line jsx-a11y/aria-role
                                            role="ceheckbox"
                                            id="flexSwitchCheckChecked"
                                            onChange={(e) => {
                                                setProductForm({
                                                    type: "SET_ACTIVE",
                                                    payload: e.target.checked,
                                                });
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                    <button
                                        type="submit"
                                        className="btn btn-success"
                                    >
                                        Add Product +
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                ) : (
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1
                                className="modal-title fs-5"
                                id="createProductModalLabel"
                            >
                                Success!
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                onClick={(e) => refresh()}
                            ></button>
                        </div>
                        <div className="modal-body">
                            <h3>Product Added Successfuly!</h3>
                            <div>
                                <img
                                    className="img-fluid"
                                    alt="success!"
                                    src={checkMarkGifInfinito}
                                    loop={true}
                                ></img>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                    onClick={(e) => refresh()}
                                >
                                    Close
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-success"
                                    onClick={(e) => refresh()}
                                >
                                    Add another Product +
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
