import React, {useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './Card.module.scss';
import { getProducts } from '../../Redux/actions';


export default function Card() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
    console.log(products);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return (
        <div className={style.container}>
            {products&&products.map((el) => (
                <div className={style.card} key={el.id}>
                    <div className={style.cardImage}>
                        <img src={el.image}
                            alt={el.name} />
                    </div>
                    <div className={style.cardContent}>
                        <h3>{el.name}</h3>
                        <p>{el.description}</p>
                        <p>{el.price}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}