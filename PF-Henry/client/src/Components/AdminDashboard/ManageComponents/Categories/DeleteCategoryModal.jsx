import React, { useState } from "react";
import { deleteCategory, getAllCategories } from "../../../../Redux/actions";
import { useDispatch /*useSelector*/ } from "react-redux";

export default function DeleteCategoryModal({ category }) {
    ///DISPATCH///
    const dispatch = useDispatch();

    ///ESTADO LOCAL////
    const [success, setSuccess] = useState(false);
    const [refresh, setRefresh] = useState(true);

    /////Event Handler/////

    function handleDelete(e, id) {
        e.preventDefault();
        //     dispatch(deleteCategory(id));
        //   dispatch(getAllCategories());
        setSuccess(true);
        setRefresh(!refresh);
        // alert("Category Deleted!");
        // dispatch(getAllCategorys());
    }

    return (
        <div
            className="modal fade "
            id="deleteCategoryModal"
            tabIndex="-1"
            aria-labelledby="deleteCategoryModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                {!success ? (
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1
                                className="modal-title fs-5"
                                id="deleteCategoryModalLabel"
                            >
                                Eliminate Category Confirmation
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <span>ID: {category.id} </span>
                            <br />
                            <span>Name: {category.name} </span>
                            <br />
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
                                type="button"
                                className="btn btn-danger"
                                onClick={(e) => {
                                    handleDelete(e, category.id);
                                }}
                            >
                                Delete Category
                            </button>
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
                                onClick={(e) => setSuccess(false)}
                            ></button>
                        </div>
                        <div className="modal-body">
                            <h3>Product Deleted!</h3>
                            <div></div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                    onClick={(e) => setSuccess(false)}
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
