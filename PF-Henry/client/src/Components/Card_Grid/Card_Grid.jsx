import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import style from './Card.module.scss';
import { getProducts } from "../../Redux/actions";
import Products from "../Utils/Product";
import DropdownsFiltros from "../DropdownsFiltros/DropdownsFiltros";
import Card from "../Card/Card";

export default function Card_Grid() {
    //dispatch
    //aqui se llama a la accion
    const dispatch = useDispatch();
    const products = useSelector((state) => state.allProducts);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return (
        <div>
            <div className="tw-flex tw-justify-center">
                <DropdownsFiltros />
            </div>
            <div className="tw-grid tw-grid-cols-3 tw-gap-4 tw-m-4">
                {Products &&
                    Products.map((el) => {
                        return (
                            <Card
                                key={el.id}
                                id={el.id}
                                name={el.name}
                                image={el.image}
                                category={el.category}
                                price={el.price}
                            />
                        )
                    })}
            </div>
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
