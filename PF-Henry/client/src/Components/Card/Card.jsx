import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../../Redux/actions';

const Card = (props) => {
    const dispatch = useDispatch()

    const handleAddToCart = () => {
        dispatch(addToCart(props))
    }

    return (
        <div
            className="card tw-m-3 tw-p-3 tw-text-center"
        >
            <Link to={`/productdetail/${props.id}`}>
                <div className="card-img-top">
                    <h6>{props.name}</h6>
                    <img
                        src={props.image}
                        alt={props.name}
                        width={300}
                        height={150}
                    />
                </div>
            </Link>
            <div className="card-body">
                <div className="card-title">
                    <h6>{props.category}</h6>
                    <p>${props.price}</p>
                    <div className="tw-grid tw-grid-cols-2 tw-gap-4">
                        <button 
                        className="tw-text-green-700 hover:tw-text-white tw-border tw-border-green-700 hover:tw-bg-green-800 focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-green-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-text-center tw-mr-2 tw-mb-2 dark:tw-border-green-500 dark:tw-text-green-500 dark:hover:tw-text-white dark:hover:tw-bg-green-600 dark:focus:tw-ring-green-800"
                        onClick={handleAddToCart}
                        >
                            add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card