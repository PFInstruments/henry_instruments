import React, { useReducer, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { checkoutadd, getUser } from "../../Redux/actions";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

const FormularioEnvio = () => {
    const { user } = useAuth0();
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const userDB = useSelector((state) => state.user);
    const handleCheckout = () => {
        const order = {
            items: cart.map((item) => ({
                id: item.id,
                title: item.name,
                image: item.image,
                unit_price: parseInt(item.price), // Convierte el precio a un entero
                quantity: parseInt(item.quantity),
                currency_id: "ARS",
            })),
        };
        dispatch(checkoutadd(order));
    };
    useEffect(() => {
        dispatch(getUser(user.sub));
    }, [dispatch, user.sub]);
    // Método para manejar el envío del formulario
    const handleSubmit = async (e) => {
        let totalProducts = cart.map((prod) => {
            return {
                id: prod.id,
                category: prod.category.name,
                brand: prod.brand,
                model: prod.model,
                quantity: prod.quantity,
                image: prod.image,
                price: prod.price,
            };
        });
        let totalAmount = cart
            .map((prod) => parseInt(prod.quantity) * parseInt(prod.price))
            .reduce((a, b) => a + b, 0);
        e.preventDefault();
        // Enviar los datos del formulario a tu servidor o realizar cualquier otra acción
        await axios.put("/users/db/" + userDB.id, contactForm);
        await axios.post("/orders", {
            totalProducts,
            totalAmount,
            userId: userDB.id,
        });
        handleCheckout();
        setContactForm({ type: "SUBMIT" });
    };

    let initialState = {
        name: userDB.name,
        phone_number: userDB.phone_number,
        adress: userDB.adress,
        city: userDB.city,
        province: userDB.province,
        country: userDB.country,
        zip: userDB.zip,
    };

    const dataEnvioFormReducer = (state, action) => {
        // eslint-disable-next-line default-case
        switch (action.type) {
            case "SET_NAME": {
                return {
                    ...state,
                    name: action.payload,
                };
            }
            case "SET_ADDRESS": {
                return {
                    ...state,
                    adress: action.payload,
                };
            }
            case "SET_PHONENUM": {
                return {
                    ...state,
                    phone_number: action.payload,
                };
            }
            case "SET_CITY": {
                return {
                    ...state,
                    city: action.payload,
                };
            }
            case "SET_STATE": {
                return {
                    ...state,
                    state: action.payload,
                };
            }
            case "SET_ZIP": {
                return {
                    ...state,
                    zip: action.payload,
                };
            }
            case "SET_COUNTRY": {
                return {
                    ...state,
                    country: action.payload,
                };
            }
            case "SET_PROVINCE": {
                return {
                    ...state,
                    province: action.payload,
                };
            }

            case "SUBMIT": {
                console.log(initialState);
                return {
                    ...state,
                };
            }
        }
    };
    const [contactForm, setContactForm] = useReducer(
        dataEnvioFormReducer,
        initialState
    );
    return (
        <div className="tw-container tw-p-12 tw-mx-auto">
            <div className="tw-grid tw-grid-cols-2">
                <div class="tw-flex tw-flex-col md:tw-w-full">
                    <h2 class="tw-mb-4 tw-font-bold md:tw-text-xl tw-text-heading ">
                        Modify address
                    </h2>
                    <form
                        onSubmit={handleSubmit}
                        className="tw-justify-center tw-w-full tw-mx-auto"
                    >
                        <div>
                            <div className="tw-mt-4">
                                <div className="tw-w-full">
                                    <label
                                        htmlFor="inputName"
                                        className="tw-block tw-mb-3 tw-text-sm tw-font-semibold tw-text-gray-500"
                                    >
                                        Nombre Completo:
                                    </label>
                                    <input
                                        placeholder="Your Name"
                                        required
                                        type="name"
                                        name="name"
                                        id="inputName"
                                        className="tw-w-full tw-px-4 tw-py-3 tw-text-sm tw-border tw-border-gray-300 tw-rounded lg:tw-text-sm focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-blue-600 "
                                        value={contactForm.name}
                                        onChange={(e) => {
                                            setContactForm({
                                                type: "SET_NAME",
                                                payload: e.target.value,
                                            });
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="tw-w-full">
                                <div className="tw-w-full">
                                    <div className="tw-space-x-0 lg:tw-flex lg:tw-space-x-4">
                                        <div class="tw-w-full lg:tw-w-1/2">
                                            <label
                                                htmlFor="inputCity"
                                                className="tw-block tw-mb-3 tw-text-sm tw-font-semibold tw-text-gray-500"
                                            >
                                                Pais:
                                            </label>
                                            <input
                                                placeholder="Country"
                                                type="text"
                                                className="tw-w-full tw-px-4 tw-py-3 tw-text-xs tw-border tw-border-gray-300 tw-rounded lg:tw-text-sm focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-blue-600"
                                                id="inputCountry"
                                                value={contactForm.country}
                                                onChange={(e) => {
                                                    setContactForm({
                                                        type: "SET_COUNTRY",
                                                        payload: e.target.value,
                                                    });
                                                }}
                                            />
                                        </div>
                                        <div className="tw-w-full lg:tw-w-1/2">
                                            <label
                                                htmlFor="inputProvince"
                                                className="tw-block tw-mb-3 tw-text-sm tw-font-semibold tw-text-gray-500"
                                            >
                                                Provincia:
                                            </label>
                                            <input
                                                placeholder="Province"
                                                type="text"
                                                className="tw-w-full tw-px-4 tw-py-3 tw-text-xs tw-border tw-border-gray-300 tw-rounded lg:tw-text-sm focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-blue-600"
                                                id="inputProvince"
                                                value={contactForm.province}
                                                onChange={(e) => {
                                                    setContactForm({
                                                        type: "SET_PROVINCE",
                                                        payload: e.target.value,
                                                    });
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="tw-mt-4">
                                        <div className="tw-w-full">
                                            <label
                                                htmlFor="inputAddress"
                                                className="tw-block tw-mb-3 tw-text-sm tw-font-semibold tw-text-gray-500"
                                            >
                                                Dirección:
                                            </label>
                                            <input
                                                placeholder="adress"
                                                required
                                                type="text"
                                                name="adress"
                                                value={contactForm.adress}
                                                className="tw-w-full tw-px-4 tw-py-3 tw-text-xs tw-border tw-border-gray-300 tw-rounded lg:tw-text-sm focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-blue-600"
                                                onChange={(e) => {
                                                    setContactForm({
                                                        type: "SET_ADDRESS",
                                                        payload: e.target.value,
                                                    });
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tw-space-x-0 lg:tw-flex lg:tw-space-x-4">
                                <div class="tw-w-full lg:tw-w-1/2">
                                    <label
                                        htmlFor="inputCity"
                                        className="tw-block tw-mb-3 tw-text-sm tw-font-semibold tw-text-gray-500"
                                    >
                                        Ciudad:
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="City"
                                        className="tw-w-full tw-px-4 tw-py-3 tw-text-sm tw-border tw-border-gray-300 tw-rounded lg:tw-text-sm focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-blue-600"
                                        id="inputCity"
                                        value={contactForm.city}
                                        onChange={(e) => {
                                            setContactForm({
                                                type: "SET_CITY",
                                                payload: e.target.value,
                                            });
                                        }}
                                    />
                                </div>
                                <div className="tw-w-full lg:tw-w-1/2">
                                    <label
                                        htmlFor="inputZip"
                                        className="tw-block tw-mb-3 tw-text-sm tw-font-semibold tw-text-gray-500"
                                    >
                                        Cp:
                                    </label>
                                    <input
                                        placeholder="zip"
                                        type="text"
                                        className="tw-w-full tw-px-4 tw-py-3 tw-text-sm tw-border tw-border-gray-300 tw-rounded lg:tw-text-sm focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-blue-600"
                                        id="inputZip"
                                        value={contactForm.zip}
                                        onChange={(e) => {
                                            setContactForm({
                                                type: "SET_ZIP",
                                                payload: e.target.value,
                                            });
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="tw-mt-4">
                                <div className="tw-w-full">
                                    <label
                                        htmlFor="inputAddress"
                                        className="tw-block tw-mb-3 tw-text-sm tw-font-semibold tw-text-gray-500"
                                    >
                                        Numero de Telefono:
                                    </label>
                                    <input
                                        placeholder="phone number"
                                        type="text"
                                        className="tw-w-full tw-px-4 tw-py-3 tw-text-xs tw-border tw-border-gray-300 tw-rounded lg:tw-text-sm focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-blue-600"
                                        id="inputPhoneNumber"
                                        value={contactForm.phone_number}
                                        onChange={(e) => {
                                            setContactForm({
                                                type: "SET_PHONENUM",
                                                payload: e.target.value,
                                            });
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="tw-mt-4">
                                <button
                                    type="submit"
                                    class="tw-w-full tw-px-6 tw-py-2 tw-text-blue-200 tw-bg-blue-600 hover:tw-bg-blue-900 tw-border-none"
                                >
                                    Process
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="tw-m-5">
                    <h2 class="tw-mb-4 tw-font-bold md:tw-text-xl tw-text-heading ">
                        Order Summary{" "}
                    </h2>
                    <h4>Total Products : {cart.length}</h4>
                    <hr />
                    {cart.map((item) => (
                        <>
                            <div className="tw-grid tw-grid-cols-3 tw-m-4 ">
                                <div>
                                    <img
                                        src={item.image}
                                        alt=""
                                        className="listImg img-thumbnail "
                                    />
                                </div>
                                <div className="tw-m-2">
                                    <span>
                                        Quantity: {item.quantity}{" "}
                                        <h5 className="text-xl font-bold">
                                            {item.name}
                                        </h5>
                                    </span>
                                </div>
                                <div className="tw-m-2">
                                    <span>price</span>
                                    <h6>${item.price}</h6>
                                </div>
                            </div>
                            <hr />
                        </>
                    ))}
                    <h4>
                        Total amount : $
                        {cart
                            .reduce(
                                (currentSum, currentCardItem) =>
                                    currentSum +
                                    currentCardItem.price *
                                        currentCardItem.quantity,
                                0
                            )
                            .toFixed(2)}
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default FormularioEnvio;
