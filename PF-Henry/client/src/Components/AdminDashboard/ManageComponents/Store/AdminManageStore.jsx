import React, { useReducer, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateStore } from "../../../../Redux/actions";
// import { useDispatch /* useSelector*/ } from "react-redux";

export default function AdminManageStore() {
    ///DISPATCH///
    // const dispatch = useDispatch();

    ///ESTADOS GLOBALES///
    //   const { store } = useSelector((state) => state);

    ///ESTALOS LOCALES///
    /*const [contactForm, setContactForm] = useState({
        email: "henryinstruments@gmail.com",
        phoneNum: "123546879",
        adress: "Av. Siempre Viva 742",
        city: "Springfield",
        state: "Oregon",
        zip: "6579",
        country: "USA",
    });
    */

    //  const [disabledSubmit, setDisabledSubmit] = useState(true);
/*
    /////LOCAL REDUCER//////////
    let initialState = {
        email: "henryinstruments@gmail.com",
        phoneNum: "123546879",
        address: "Av. Siempre Viva 742",
        city: "Springfield",
        state: "Mordor",
        zip: "6579",
        country: "Middle-Earth",
    };
    const contactFormReducer = (state, action) => {
        // eslint-disable-next-line default-case
        switch (action.type) {
            case "SET_EMAIL": {
                return {
                    ...state,
                    email: action.payload,
                };
            }
            case "SET_PHONENUM": {
                return {
                    ...state,
                    phoneNum: action.payload,
                };
            }
            case "SET_ADDRESS": {
                return {
                    ...state,
                    address: action.payload,
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

            case "SUBMIT": {
                console.log(initialState);
                return {
                    ...state,
                };
            }
        }
    };
    const [contactForm, setContactForm] = useReducer(
        contactFormReducer,
        initialState
    );
*/
    ///HOOKS///

    //EVENT HANDLERS///
/*
    function handleSubmit(e) {
        e.preventDefault();

        alert("Changes Saved!");
        setContactForm({ type: "SUBMIT" });
    }
*/

    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(updateStore());
    },[dispatch]);

    const storeDB = useSelector((state)=>state.store);

    const [storeInfo,setStoreInfo]=useState({
        email: storeDB[0].email,
        phoneNum: storeDB[0].phoneNum,
        adress: storeDB[0].adress,
        city: storeDB[0].city,
        state: storeDB[0].state,
        zip: storeDB[0].zip,
        country: storeDB[0].country,
    });

        //EVENT HANDLERS///

    const changeHandlerStore=(event)=>{
        if(event.target.value!=="none"){
            setStoreInfo({
                ...storeInfo,
                paisId: [...storeInfo.paisId, event.target.value]
            })
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        
    }

    ///PAGINA///

    return (
        <div>
            <div className="position-relative ">
                <form
                    className="row g-2 w-25 p-2 position-absolute top-50 start-40 text-bg-dark p-3"
                    onSubmit={(e) => {
                        handleSubmit(e);
                    }}
                >
                    <div className="col-md-10">
                        <label htmlFor="inputEmail4" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            required
                            className="form-control "
                            id="inputEmail"
                            value={storeDB.email}
                            onChange={changeHandlerStore}
                        />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label">
                            Phone Number
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputPhoneNumber"
                            value={storeDB.phoneNum}
                            onChange={changeHandlerStore}
                        />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label">
                            Address
                        </label>
                        <textarea
                            className="form-control"
                            value={storeDB.address}
                            onChange={changeHandlerStore}
                        ></textarea>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputCity" className="form-label">
                            City
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputCity"
                            value={storeDB.city}
                            onChange={changeHandlerStore}
                        />
                    </div>
                    <div className="col-md-7">
                        <label htmlFor="inputState" className="form-label">
                            State
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputState"
                            value={storeDB.state}
                            onChange={changeHandlerStore}
                        />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputZip" className="form-label">
                            Zip
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputZip"
                            value={storeDB.zip}
                            onChange={changeHandlerStore}
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputCity" className="form-label">
                            Country
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputCountry"
                            value={storeDB.country}
                            onChange={changeHandlerStore}
                        />
                    </div>

                    <div className="col-12">
                        <button type="submit" className="btn  btn-success btn-lg">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
