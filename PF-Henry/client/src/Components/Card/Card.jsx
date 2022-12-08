import React, {useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import style from './Card.module.scss';
import { getProducts } from '../../Redux/actions';
import Products from '../Utils/Product';


export default function Card() {
    //dispatch
    //aqui se llama a la accion
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
    console.log(products);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return (
        <div className="tw-grid tw-grid-cols-3 tw-gap-4 tw-m-4">
        {Products&&Products.map((el) => (
            <div className="card tw-m-3 tw-p-3 tw-text-center" key={el.id}>
                <div className="card-img-top">
                <h6>{el.name}</h6>
                    <img src={el.image}
                        alt={el.name}
                        width={300}
                        height={150} />
                </div>
                <div className="card-body">
                    <div className="card-title">
                        <h6>{el.category}</h6>
                        <p>${el.price}</p>
                        <div className="tw-grid tw-grid-cols-2 tw-gap-4">
                        <button className="tw-text-blue-700 hover:tw-text-white tw-border tw-border-blue-700 hover:tw-bg-blue-800 focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-blue-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-text-center tw-mr-2 tw-mb-2 dark:tw-border-blue-500 dark:tw-text-blue-500 dark:hover:tw-text-white dark:hover:tw-bg-blue-600 dark:focus:tw-ring-blue-800">detail</button>
                        <button className="tw-text-green-700 hover:tw-text-white tw-border tw-border-green-700 hover:tw-bg-green-800 focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-green-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-text-center tw-mr-2 tw-mb-2 dark:tw-border-green-500 dark:tw-text-green-500 dark:hover:tw-text-white dark:hover:tw-bg-green-600 dark:focus:tw-ring-green-800">add carro</button>
                        </div>
                       
                    </div>
                </div>
            </div>
        ))}
    </div>
        // <div className="card">
        //     {products&&products.map((el) => (
        //         <div className="card" key={el.id}>
        //             <div className="card-img-top">
        //                 <img src={el.image}
        //                     alt={el.name} />
        //             </div>
        //             <div className="card-body">
        //                 <div className="card-title">
        //                     <h3>{el.name}</h3>
        //                     <p>{el.description}</p>
        //                     <p>{el.price}</p>
        //                 </div>
        //             </div>
        //         </div>
        //     ))}
        // </div>
    );
}