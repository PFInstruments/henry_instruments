import React /*useState*/ from "react";
import { prefixEdit } from "../../../Utils/variables";

export default function EditProductModal({ product }) {
    return (
        <div
            className="modal fade "
            id={prefixEdit + product.id}
            tabIndex="-1"
            aria-labelledby="editProductModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
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
