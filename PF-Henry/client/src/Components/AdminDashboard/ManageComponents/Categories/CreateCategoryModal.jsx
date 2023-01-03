// import { getSpaceUntilMaxLength } from "@testing-library/user-event/dist/utils";
import React, { useState, useReducer /*useEffect */ } from "react";
import { useDispatch /* useSelector */ } from "react-redux";
import { getCategories, postCategory } from "../../../../Redux/actions";
//import checkmark from "../../../../Images/checkmark.gif";
// import checkmark from "../../../../Images/checkmark.gif";
import checkmarkInfinito from "../../../../Images/checkmarkInfinito.gif";
// import { useEffect } from "react";

export default function CreateCategoryModal({ localCategories }) {
    ///DISPATCH///
    const dispatch = useDispatch();

    ///ESTADOS LOCALES///
    //  const [disabledSubmit, setDisabledSubmit] = useState(true);
    // const [nameExists, setNameExists] = useState(false);
    //const [checkActive, setCheckActive] = useState([]);
    const [postSuccess, setPostSuccess] = useState(false);

    /// VARIABLE GIF///
    //const checkMarkGif = checkmark;
    const checkMarkGifInfinito = checkmarkInfinito;
    /////LOCAL REDUCER//////////
    const initialState = {
        name: "",
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
                    ...initialState,
                };
            }
        }
    };
    const [categoryForm, setCategoryForm] = useReducer(
        createCategoryReducer,
        initialState
    );

    ///HOOKS///
    //FUnciones//
    function refresh() {
        setPostSuccess(false);

        dispatch(getCategories());
    }

    // function findCategory(c) {
    //     let exists = [];
    //     localCategories?.categories.map((cat) => {
    //         if (cat.name == c) {
    //             exists.push(cat.name);
    //         }
    //     });
    //     if (exists.length > 0) {
    //     } else {
    //         setNameExists(false);
    //         setDisabledSubmit(false);
    //     }
    // }

    //EVENT HANDLERS///

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(postCategory(categoryForm));

        setPostSuccess(true);

        setCategoryForm({ type: "SUBMIT" });
    }

    return (
        <div
            className="modal fade "
            id="createCategoryModal"
            tabIndex="-1"
            aria-labelledby="createCategoryModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-scrollable">
                {!postSuccess ? (
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1
                                className="modal-title fs-5"
                                id="createCategoryModalLabel"
                            >
                                Add Category
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
                                        className="form-control"
                                        id="category-name"
                                        value={categoryForm.name}
                                        onChange={(e) => {
                                            setCategoryForm({
                                                type: "SET_NAME",
                                                payload: e.target.value,
                                            });
                                        }}
                                    />
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
                                        // disabled={disabledSubmit}
                                    >
                                        Add Category +
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
                            <h3>Category Added Successfuly!</h3>
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
                                    Add another Category +
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
