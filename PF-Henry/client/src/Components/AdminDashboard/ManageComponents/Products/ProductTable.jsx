/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/scope */
import React /*useState, useEffect*/ from "react";
// import { useDispatch, useSelector } from "react-redux";
import DeleteProductModal from "./DeleteProductModal";
import DetailProductModal from "./DetailProductModal";
import EditProductModal from "./EditProductModal";

export default function ProductTable({ localProducts }) {
    //////    ARRAY DE PRUEBA ////////
    // let lista = [
    //     {
    //         id: 165654646846546,
    //         name: "Gibson SG",
    //         brand: "Gibson",
    //         model: "SG Standard",
    //         image: "https://http2.mlstatic.com/D_NQ_NP_626544-MLA47691080756_092021-W.jpg",
    //         category: "Guitarras",
    //         price: 1200,
    //         description: "La guitarra de Angus Young",
    //         stock: 50,
    //         sales: 15,
    //         active: true,
    //     },
    //     {
    //         id: 165654646846546,
    //         name: "Gibson SG",
    //         brand: "Gibson",
    //         model: "SG Standard",
    //         image: "https://http2.mlstatic.com/D_NQ_NP_626544-MLA47691080756_092021-W.jpg",
    //         category: "Guitarras",
    //         price: 1200,
    //         description: "La guitarra de Angus Young",
    //         stock: 50,
    //         sales: 15,
    //         active: false,
    //     },
    //     {
    //         id: 165654646846546,
    //         name: "Gibson SG",
    //         brand: "Gibson",
    //         model: "SG Standard",
    //         image: "https://http2.mlstatic.com/D_NQ_NP_626544-MLA47691080756_092021-W.jpg",
    //         category: "Guitarras",
    //         price: 1200,
    //         description: "La guitarra de Angus Young",
    //         stock: 50,
    //         sales: 15,
    //         active: true,
    //     },
    //     {
    //         id: 165654646846546,
    //         name: "Gibson SG",
    //         brand: "Gibson",
    //         model: "SG Standard",
    //         image: "https://http2.mlstatic.com/D_NQ_NP_626544-MLA47691080756_092021-W.jpg",
    //         category: "Guitarras",
    //         price: 1200,
    //         description: "La guitarra de Angus Young",
    //         stock: 50,
    //         sales: 15,
    //         active: true,
    //     },
    // ];

    return (
        <div className="table-responsive">
            <table className="table table-hover  ">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">#id</th>
                        <th scope="col">Name</th>
                        <th scope="col"></th>
                        <th scope="col">Category</th>
                        <th scope="col" className="align-middle">
                            Model
                        </th>
                        <th scope="col">Brand</th>
                        <th scope="col">Price</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Sales</th>
                        <th scope="col">Active</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody className="table-group-divider ">
                    {localProducts?.map((product) => {
                        return (
                            <tr key={product.id}>
                                <td className="align-middle" scope="row">
                                    <span className="fs-6">{product.id}</span>
                                </td>
                                <td className="align-middle">
                                    {" "}
                                    <button
                                        type="button"
                                        className="btn btn-light"
                                        data-bs-toggle="modal"
                                        data-bs-target="#detailProductModal"
                                    >
                                        {product.name}
                                    </button>
                                </td>
                                <td className="align-middle">
                                    <img
                                        src={product.image}
                                        className="listImg img-thumbnail "
                                    />
                                </td>
                                <td className="align-middle ">
                                    {product.category.name}
                                </td>
                                <td className="align-middle ">
                                    {product.model}
                                </td>
                                <td className="align-middle ">
                                    {product.brand}
                                </td>
                                <td className="align-middle">{`$${product.price}`}</td>
                                <td className="align-middle">
                                    {product.stock}
                                </td>
                                {/* <td className="align-middle">
                                    {product.sales}
                                </td> */}
                                {product.active ? (
                                    <td className="align-middle">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            fill="green"
                                            className="bi bi-check-circle-fill listIcon"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                                        </svg>
                                    </td>
                                ) : (
                                    <td className="align-middle">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            fill="red"
                                            className="bi bi-x-circle-fill listIcon"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
                                        </svg>
                                    </td>
                                )}
                                <td className="align-middle">
                                    <button
                                        type="button"
                                        className="btn btn-success listButton"
                                        data-bs-toggle="modal"
                                        data-bs-target="#editProductModal"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="bi bi-pencil-square"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path>
                                            <path
                                                fillRule="evenodd"
                                                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                                            ></path>
                                        </svg>
                                        Edit
                                    </button>

                                    <button
                                        type="button"
                                        className="btn btn-danger listButton "
                                        data-bs-toggle="modal"
                                        data-bs-target="#deleteProductModal"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="bi bi-trash"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                                            <path
                                                fillRule="evenodd"
                                                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                            ></path>
                                        </svg>
                                    </button>
                                    <DeleteProductModal
                                        product={product}
                                        key={product.id + 10000}
                                    />
                                    <EditProductModal key={product.id + 50} />
                                    <DetailProductModal
                                        product={product}
                                        key={product.id + 800000}
                                    />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
