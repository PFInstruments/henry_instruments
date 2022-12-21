/* eslint-disable react/style-prop-object */
import React from 'react'

const ReviewCard = (props) => {
    return (
        <div className="card mb-4">
            <div className="card-body">
                <p>{props.comment}</p>

                <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                        <img className="tw-rounded-full" src={props.image} alt="avatar" width="25"
                            height="25" />
                        <p className="small mb-0 ms-2">{props.name}</p>
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
                        <p className="small text-muted mb-0">{props.score}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard