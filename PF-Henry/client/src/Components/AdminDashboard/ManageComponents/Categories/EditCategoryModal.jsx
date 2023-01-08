import React, { useReducer, useState } from "react";
import { prefixEdit } from "../../../Utils/variables";
import { useDispatch /* useSelector */ } from "react-redux";
import { getCategories, putCategory } from "../../../../Redux/actions";
import checkmarkInfinito from "../../../../Images/checkmarkInfinito.gif";

export default function EditCategoryModal({ category, localCategories }) {
    const dispatch = useDispatch();

    ///Estado local///
    const [editSuccess, setEditSuccess] = useState(false);
    const [nameExists, setNameExists] = useState(false);

    /// VARIABLE GIF///
    const checkMarkGifInfinito = checkmarkInfinito;

    /////LOCAL REDUCER//////////
    const initialState = {
        id: category.id,
        name: category.name,
    };

    const createCategoryReducer = (state, action) => {
        // eslint-disable-next-line default-case
        switch (action.type) {
            case "SET_NAME": {
                return {
                    ...state,
                    name: action.payload,
                };
            }

            case "SUBMIT": {
                return {
                    ...state,
                };
            }
        }
    };
    const [categoryForm, setCategoryForm] = useReducer(
        createCategoryReducer,
        initialState
    );

    //FUnciones//
    function refresh() {
        setEditSuccess(false);
        console.log(categoryForm);
        dispatch(getCategories());
    }

    const handleInputChange = (e) => {
        setCategoryForm({
            type: "SET_NAME",
            payload: e.target.value,
        });

        // eslint-disable-next-line array-callback-return
        let search = localCategories.filter((c) => {
            return (
                c.name.toLowerCase() === e.target.value.toLowerCase() &&
                category.name.toLowerCase() !== e.target.value.toLowerCase()
            );
        });
        if (search.length === 1) {
            setNameExists(true);
        }
        if (search.length > 1 || search.length < 1) {
            setNameExists(false);
        }
        console.log(nameExists);
        console.log(search);
    };

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(putCategory(categoryForm));

        setEditSuccess(true);

        setCategoryForm({ type: "SUBMIT" });
    }

    return (
        <div
            className="modal fade "
            id={prefixEdit + category.id}
            tabIndex="-1"
            aria-labelledby="editCategoryModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-scrollable">
                {!editSuccess ? (
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1
                                className="modal-title fs-5"
                                id="createCategoryModalLabel"
                            >
                                Edit Category
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
                                        htmlFor="category-name"
                                        className="col-form-label"
                                    >
                                        Name:
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        className={
                                            nameExists
                                                ? "tw-bg-red-300 tw-border tw-border-red-500 tw-text-red-900 tw-placeholder-red-700 tw-text-sm tw-rounded-lg tw-focus:ring-red-500 tw-dark:bg-gray-700 tw-focus:border-red-500 tw-block tw-w-full tw-p-2.5 tw-dark:text-red-500 tw-dark:placeholder-red-500 tw-dark:border-red-500"
                                                : "form-control"
                                        }
                                        id="category-name"
                                        value={categoryForm.name}
                                        onChange={(e) => {
                                            handleInputChange(e);
                                        }}
                                    />
                                    <p className="tw-mt-2 tw-text-sm tw-text-red-600 tw-dark:text-red-500">
                                        {nameExists ? (
                                            <span className="tw-font-medium">
                                                Oops! Category alredy exists.
                                            </span>
                                        ) : (
                                            <br />
                                        )}
                                    </p>
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
                                        disabled={nameExists}
                                    >
                                        Edit Category
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
                                id="createCategoryModalLabel"
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
                            <h3>Category Edited Successfuly!</h3>
                            <span>New Category Name :{categoryForm.name}</span>
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
