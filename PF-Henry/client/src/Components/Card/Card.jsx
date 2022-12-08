import React, {useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import style from './Card.module.scss';
import { getProducts } from '../../Redux/actions';


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
        <div className="card">
            {products&&products.map((el) => (
                <div className="card" key={el.id}>
                    <div className="card-img-top">
                        <img src={el.image}
                            alt={el.name} />
                    </div>
                    <div className="card-body">
                        <div className="card-title">
                            <h3>{el.name}</h3>
                            <p>{el.description}</p>
                            <p>{el.price}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}