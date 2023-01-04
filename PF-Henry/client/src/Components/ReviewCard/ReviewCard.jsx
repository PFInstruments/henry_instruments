/* eslint-disable react/style-prop-object */
import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteReview, getReviews } from '../../Redux/actions';
import Swal from 'sweetalert2';
import { useAuth0 } from '@auth0/auth0-react';
import { useParams } from 'react-router-dom';


const ReviewCard = (props) => {

    const dispatch = useDispatch();

    const idProduct = useParams();

    const deleteRev = (id) => {
        dispatch(deleteReview(id));
        dispatch(getReviews(idProduct));
        dispatch(getReviews(idProduct));
        dispatch(getReviews(idProduct));
        dispatch(getReviews(idProduct));
    };

    const { user, isAuthenticated } = useAuth0();

    const modal = () => {
        Swal.fire({
            title: 'Do you want to delete your review?',
            showDenyButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: `No`,
        }).then((result) => {
            if (result.isConfirmed) {
                deleteRev(props.id)
                Swal.fire('Review deleted!', '', 'success')
            }
        })
    };

    return (
        <div className="card mb-4">
            <div className="card-body">
                <p>{props.comment}</p>

                <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                        <img className="tw-rounded-full" src={props.image} alt="avatar" width="25"
                            height="25" />
                        <p className="small mb-0 ms-2 fw-semibold">{props.name}</p>
                    </div>
                    <div className="d-flex flex-row align-items-center">
                        <ul className="list-inline small float-end">
                            <li className="list-inline-item m-0">
                                <i
                                    className={`bi bi-star${props.score === 0 ? " text-success" : "-fill text-success"
                                        }`}
                                ></i>
                            </li>
                            <li className="list-inline-item m-0">
                                <i
                                    className={`bi bi-star${props.score <= 1 ? " text-success" : "-fill text-success"
                                        }`}
                                ></i>
                            </li>
                            <li className="list-inline-item m-0">
                                <i
                                    className={`bi bi-star${props.score <= 2 ? " text-success" : "-fill text-success"
                                        }`}
                                ></i>
                            </li>
                            <li className="list-inline-item m-0">
                                <i
                                    className={`bi bi-star${props.score <= 3 ? " text-success" : "-fill text-success"
                                        }`}
                                ></i>
                            </li>
                            <li className="list-inline-item m-0">
                                <i
                                    className={`bi bi-star${props.score <= 4 ? " text-success" : "-fill text-success"
                                        }`}
                                ></i>
                            </li>
                        </ul>
                        <p className="small text-muted mb-0" >{props.score}</p>
                        {isAuthenticated && user.name === props.name ?
                            <i className="bi bi-trash3-fill rgb(blue)"
                                style={{ marginTop: "-0.16rem", marginLeft: "10px", cursor: "pointer", hover: "blue" }}
                                data-bs-toggle="tooltip"
                                data-bs-placement="right"
                                data-bs-title="Tooltip on right"
                                onClick={() => modal()} ></i>
                            :
                            ""}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ReviewCard