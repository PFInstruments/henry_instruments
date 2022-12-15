export default function DetailProductModal({ product }) {
    return (
        <div
            className="modal fade "
            id="detailProductModal"
            tabIndex="-1"
            aria-labelledby="detailProductModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1
                            className="modal-title fs-5"
                            id="detailProductModalLabel"
                        >
                            {product.name}
                        </h1>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body ">
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
                        <span>Model: {product.model} </span>
                        <br />
                        <span>Brand: {product.brand} </span>
                        <br />
                        <span>Category: {product.category} </span>
                        <br />
                        <span>Price: ${product.price} </span>
                        <br />
                        <span>Stock: {product.stock} </span>
                        <br />
                        <span>Sales: {product.sales} </span>
                        <br />
                        <span>Description: {product.description} </span>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
