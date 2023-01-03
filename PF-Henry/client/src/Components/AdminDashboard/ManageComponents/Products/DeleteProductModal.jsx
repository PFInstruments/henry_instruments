import React from "react";
// import { deleteProduct, getAllProducts } from "../../../../Redux/actions";
// import { useDispatch /*useSelector*/ } from "react-redux";
import { prefixDelete } from "../../../Utils/variables";

export default function DeleteProductModal({ product }) {
    ///DISPATCH///
    // const dispatch = useDispatch();

    ///ESTADO LOCAL////
    // const [success, setSuccess] = useState();

    /////Event Handler/////

    function handleDelete(e, id) {
        e.preventDefault();
        // dispatch(deleteProduct(id));
        alert("Product Deleted!");
        //        dispatch(getAllProducts());
    }

    return (
        <div
            className="modal fade "
            id={prefixDelete + product.id}
            tabIndex="-1"
            aria-labelledby="deleteProductModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1
                            className="modal-title fs-5"
                            id="deleteProductModalLabel"
                        >
                            Delete Product Confirmation
                        </h1>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <img
                            className="img-fluid"
                            src={product.image}
                            alt="productimage"
                        />
                        <br />
                        <span>ID: {product.id} </span>
                        <br />
                        <span>Name: {product.name} </span>
                        <br />
                        <span>Category: {product.category?.name} </span>
                        <br />
                        <span>Price: ${product.price} </span>
                        <br />
                        <span>Stock: {product.stock} </span>
                        <br />
                        <span>Sales: {product.sales} </span>
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
                                handleDelete(e, product.id);
                            }}
                        >
                            Delete Product
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
