import React, { useState, useReducer } from "react";
import { prefixEdit } from "../../../Utils/variables";
import { useDispatch } from "react-redux";
import { putUser, getAllUsers } from "../../../../Redux/actions";
import checkmarkInfinito from "../../../../Images/checkmarkInfinito.gif";

export default function EditUserModal({ user }) {
    ////Dispatch///
    const dispatch = useDispatch();
    ///Estado Local ///
    const [editSuccess, setEditSuccess] = useState(false);

    /// VARIABLE GIF///
    const checkMarkGifInfinito = checkmarkInfinito;

    //FUnciones//
    function refresh() {
        setEditSuccess(false);
        dispatch(getAllUsers());
    }

    return (
        <div
            className="modal fade"
            id={prefixEdit + user.nickname}
            tabIndex="-1"
            aria-labelledby="editUserModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1
                            className="modal-title fs-5"
                            id="editUserModalLabel"
                        >
                            Edit User
                        </h1>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">FORMULARIO DE EDICION</div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>
                        <button type="button" className="btn btn-success">
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
