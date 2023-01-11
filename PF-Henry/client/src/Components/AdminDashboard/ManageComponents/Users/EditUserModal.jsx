import React, { useState, useReducer } from "react";
import { prefixEdit } from "../../../Utils/variables";
import { useDispatch } from "react-redux";
import { putUser, getAllUsers } from "../../../../Redux/actions";
import checkmarkInfinito from "../../../../Images/checkmarkInfinito.gif";

function decodeHtmlCharCodes(str) {
    return str.replace(/(&#(\d+);.@)/g, function (match, capture, charCode) {
        return String.fromCharCode(charCode);
    });
}

export default function EditUserModal({ user }) {
    ////Dispatch///
    const dispatch = useDispatch();
    ///Estado Local ///
    const [editSuccess, setEditSuccess] = useState(false);

    /// VARIABLE GIF///
    const checkMarkGifInfinito = checkmarkInfinito;

    /////LOCAL REDUCER//////////
    const initialState = {
        id: user.id,
        admin: user.admin,
    };

    const editUserReducer = (state, action) => {
        // eslint-disable-next-line default-case
        switch (action.type) {
            case "SET_ROLE": {
                return {
                    ...state,
                    admin: action.payload,
                };
            }

            case "SUBMIT": {
                return {
                    ...state,
                };
            }
        }
    };
    const [userForm, setUserForm] = useReducer(editUserReducer, initialState);

    //FUnciones//
    function refresh() {
        setEditSuccess(false);
        dispatch(getAllUsers());
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(putUser(userForm));
        console.log(userForm);
        setEditSuccess(true);

        setUserForm({ type: "SUBMIT" });
    }

    const handleInputChange = (e) => {
        setUserForm({
            type: "SET_NAME",
            payload: e.target.value,
        });
    };

    return (
        <div
            className="modal fade"
            id={prefixEdit + user.nickname.split(".").join("")}
            tabIndex="-1"
            aria-labelledby="editUserModalLabel"
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
                                        className="col-form-label"
                                        htmlFor="flexSwitchCheckChecked"
                                    >
                                        Admin
                                    </label>
                                    <div className="form-check form-switch">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            // eslint-disable-next-line jsx-a11y/aria-role
                                            role="ceheckbox"
                                            id="flexSwitchCheckChecked"
                                            checked={userForm.admin}
                                            onChange={(e) => {
                                                setUserForm({
                                                    type: "SET_ROLE",
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
                                        Edit User Role
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
                            <h3>User Name Edited Successfuly!</h3>
                            <span>Username :{`  ${user.name}`}</span>
                            <br />
                            <span>
                                New Role :{userForm.admin ? " Admin" : " User"}
                            </span>
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
