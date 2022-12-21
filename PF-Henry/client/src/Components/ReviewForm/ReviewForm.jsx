import './ReviewForm.css';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import { useParams } from 'react-router-dom';
import { postReview } from '../../Redux/actions';

const ReviewForm = (props) => {

    const dispatch = useDispatch();

    const { id } = useParams();

    const { user, isLoading } = useAuth0();

    const [review, setReview] = useState({
        productId: id,
        image: '',
        name: '',
        score: 0,
        comment: ''
    });

    useEffect(() => {
        if (!isLoading) {
            setReview({
                ...review,
                image: user.picture,
                name: user.name
            })
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading]);


    const handleInputChange = (ev) => {
        setReview({
            ...review,
            [ev.target.name]: ev.target.value
        })
    };

    const rating = (ev) => {
        setReview({
            ...review,
            [ev.target.name]: ev.target.value
        })
    };

    const handleSubmit = (ev) => {
        ev.preventDefault();
        dispatch(postReview(review))
    };

    return (
        <div>
            <form name='form' onSubmit={(ev) => { handleSubmit(ev) }} >
                <section >
                    <div className="container my-5 py-5 text-dark">
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-10 col-lg-8 col-xl-6">
                                <div className="card">
                                    <div className="card-body p-4">
                                        <div className="d-flex flex-start w-100">
                                            <div className="w-100">
                                                <h5>Add a comment</h5>
                                                <div className="row">
                                                    <div className="rating">
                                                        <input type="radio"
                                                            id="star5"
                                                            name="score"
                                                            value="5"
                                                            onChange={(ev) => { rating(ev) }}
                                                        /><label htmlFor="star5" title="Meh">5 stars</label>
                                                        <input type="radio"
                                                            id="star4"
                                                            name="score"
                                                            value="4"
                                                            onChange={(ev) => { rating(ev) }}
                                                        /><label htmlFor="star4" title="Kinda bad">4 stars</label>
                                                        <input type="radio"
                                                            id="star3"
                                                            name="score"
                                                            value="3"
                                                            onChange={(ev) => { rating(ev) }}
                                                        /><label htmlFor="star3" title="Kinda bad">3 stars</label>
                                                        <input type="radio"
                                                            id="star2"
                                                            name="score"
                                                            value="2"
                                                            onChange={(ev) => { rating(ev) }}
                                                        /><label htmlFor="star2" title="Sucks big tim">2 stars</label>
                                                        <input type="radio"
                                                            id="star1"
                                                            name="score"
                                                            value="1"
                                                            onChange={(ev) => { rating(ev) }}
                                                        /><label htmlFor="star1" title="Sucks big time">1 star</label>
                                                    </div>
                                                </div>
                                                <div className="form-outline">
                                                    <textarea className="form-control"
                                                        name="comment"
                                                        value={review.comment}
                                                        onChange={(ev) => { handleInputChange(ev) }}
                                                        id="textAreaExample"
                                                        rows="4"></textarea>
                                                    <label className="form-label" htmlFor="textAreaExample">What is your view?</label>
                                                </div>
                                                <div className="d-flex justify-content-between mt-3">
                                                    <button type="submit" className="btn btn-success" >
                                                        Send <i className="fas fa-long-arrow-alt-right ms-1"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </form>
        </div>
    )
}

export default ReviewForm