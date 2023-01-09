import React, { useState, useReducer } from "react";
import { prefixEdit } from "../../../Utils/variables";
import { useDispatch } from "react-redux";
import checkmarkInfinito from "../../../../Images/checkmarkInfinito.gif";
import { putProduct, getProducts } from "../../../../Redux/actions";

export default function EditProductModal({ product, localCategories }) {
    const dispatch = useDispatch();

    ///Estado local///
    const [editSuccess, setEditSuccess] = useState(false);
    const [nameExists, setNameExists] = useState(false);

    /// VARIABLE GIF///
    const checkMarkGifInfinito = checkmarkInfinito;

    ///Lista de categorias ordenada alpha////
    let categoryList = localCategories?.map((c) => {
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

    /////LOCAL REDUCER//////////
    const initialState = {
        name: product.name,
        image: product.image,
        category: product.category,
        model: product.model,
        brand: product.brand,
        price: product.price,
        description: product.description,
        stock: product.stock,
        active: product.active,
    };

    const editProductReducer = (state, action) => {
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
                };
            }
        }
    };
    const [editProductForm, setEditProductForm] = useReducer(
        editProductReducer,
        initialState
    );

    //FUnciones//
    function refresh() {
        setEditSuccess(false);
        console.log(editProductForm);
        dispatch();
    }

    const handleImage = (e) => {
        const file = e.target.files[0];
        setFileToBase(file);
    };

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(getProducts(editProductForm));

        setEditSuccess(true);
        console.log(editProductForm);

        setEditProductForm({ type: "SUBMIT" });
    }

    ////SETEO LA FOTO  A BASE 64////

    const setFileToBase = (file) => {
        const reader = new FileReader();
        if (file) {
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setEditProductForm({
                    type: "SET_IMAGE",
                    payload: reader.result,
                });
            };
            console.log(editProductForm);
        } else {
            setEditProductForm({
                type: "SET_IMAGE",
                payload: "",
            });
        }
    };
    return (
        <div
            className="modal fade "
            id={prefixEdit + product.id}
            tabIndex="-1"
            aria-labelledby="editProductModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-scrollable">
                {!editSuccess ? (
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1
                                className="modal-title fs-5"
                                id="editProductModalLabel"
                            >
                                Edit Product
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
                                        value={editProductForm.name}
                                        onChange={(e) =>
                                            setEditProductForm({
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
                                        value={editProductForm.model}
                                        onChange={(e) =>
                                            setEditProductForm({
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
                                        value={editProductForm.brand}
                                        onChange={(e) =>
                                            setEditProductForm({
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
                                        value={editProductForm.price}
                                        min={0}
                                        step={0.5}
                                        id="product-price"
                                        type="number"
                                        className="form-control"
                                        aria-label="Price"
                                        aria-describedby="basic-addon1"
                                        onChange={(e) => {
                                            setEditProductForm({
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
                                        file={editProductForm.image}
                                        filename={editProductForm.image}
                                        id="inputGroupFile01"
                                        onChange={handleImage}
                                    />
                                </div>
                                <div>
                                    {editProductForm.image[0] && (
                                        // eslint-disable-next-line jsx-a11y/alt-text
                                        <img
                                            src={editProductForm.image}
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
                                            setEditProductForm({
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
                                        value={editProductForm.description}
                                        onChange={(e) => {
                                            setEditProductForm({
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
                                        value={editProductForm.stock}
                                        onChange={(e) =>
                                            setEditProductForm({
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
                                            checked={editProductForm.active}
                                            onChange={(e) => {
                                                setEditProductForm({
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
                                        Edit Product
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
                            <h3>Product Edited Successfuly!</h3>
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
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
