//import axios from "axios";
import React, { useReducer, useEffect, useState } from "react";
//import { useDispatch, useSelector } from "react-redux";
//import { updateStore } from "../../../../Redux/actions";
// import { useDispatch /* useSelector*/ } from "react-redux";

export default function AdminManageStore({globalStore}) {
    ///DISPATCH///
    // const dispatch = useDispatch();

    ///ESTADOS LOCALES///

    //HOOKS
    
    const [localStore, setLocalStore] = useState({});
    useEffect(()=>{
        setLocalStore(
            globalStore
        )
    },[globalStore])
    console.log(localStore)
    //   const { store } = useSelector((state) => state);

    ///ESTALOS LOCALES///
    /*const [contactForm, setContactForm] = useState({
        email: "henryinstruments@gmail.com",
        phoneNumber: "123546879",
        adress: "Av. Siempre Viva 742",
        city: "Springfield",
        state: "Oregon",
        zip: "6579",
        country: "USA",
    });*/
    

     /* const [disabledSubmit, setDisabledSubmit] = useState(true);

    /////LOCAL REDUCER//////////
    let initialState = {
        carrousel: "globalState?.carrousel",
        email: "globalState?.email",
        phoneNumber: "globalState?.phoneNumber",
        adress: "globalState?.adress",
        city: "globalState?.city",
        state: "globalState?.state",
        zip: "globalState?.zip",
        country: "globalState?.country",
        instagram: "globalState?.instagram",
        twitter: "globalState?.twitter",
        facebook: "globalState?.facebook",
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
            case "SET_PHONENUMber": {
                return {
                    ...state,
                    phoneNumber: action.payload,
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

    ///HOOKS///

    //EVENT HANDLERS///

    function handleSubmit(e) {
        e.preventDefault();

        alert("Changes Saved!");
        setContactForm({ type: "SUBMIT" });
    }

    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(updateStore());
    },[dispatch]);*/

    //const stores = useSelector((state)=>state.store);

    const [storeInfo,setStoreInfo]=useState({
        carrousel: localStore?.carrousel,
        email: localStore?.email,
        phoneNumber: localStore?.phoneNumber,
        adress: localStore?.adress,
        city: localStore?.city,
        state: localStore?.state,
        zip: localStore?.zip,
        country: localStore?.country,
        instagram: localStore?.instagram,
        twitter: localStore?.twitter,
        facebook: localStore?.facebook,
    });
    //console.log(localStore)
    console.log(storeInfo)

        //EVENT HANDLERS///

    const changeHandlerStore=(event)=>{
        setStoreInfo({
            ...storeInfo,
            [event.target.id]: event.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        
    }

    ///PAGINA///

    return (
        <div>
            <div className="position-relative ">
                <form
                    className="row g-2 w-25 p-2 position-relative top-50 start-40 text-bg-dark p-3"
                    onSubmit={(e) => {
                        handleSubmit(e);
                    }}
                >
                    <div className="col-md-10">
                        <label htmlFor="inputEmail" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            required
                            className="form-control "
                            id="email"
                            name="inputEmail"
                            value={storeInfo.email}
                            onChange={(event)=>{changeHandlerStore(event)}}
                        />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputPhoneNumberber" className="form-label">
                            Phone Number
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="phoneNumber"
                            value={storeInfo.phoneNumber}
                            onChange={(event)=>{changeHandlerStore(event)}}
                        />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label">
                            Address
                        </label>
                        <textarea
                            className="form-control"
                            value={storeInfo.adress}
                            id="adress"
                            onChange={(event)=>{changeHandlerStore(event)}}
                        ></textarea>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputCity" className="form-label">
                            City
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="city"
                            value={storeInfo.city}
                            onChange={(event)=>{changeHandlerStore(event)}}
                        />
                    </div>
                    <div className="col-md-7">
                        <label htmlFor="inputState" className="form-label">
                            State
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="state"
                            value={storeInfo.state}
                            onChange={(event)=>{changeHandlerStore(event)}}
                        />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputZip" className="form-label">
                            Zip
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="zip"
                            value={storeInfo.zip}
                            onChange={(event)=>{changeHandlerStore(event)}}
                        />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputCountry" className="form-label">
                            Country
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="country"
                            value={storeInfo.country}
                            onChange={(event)=>{changeHandlerStore(event)}}
                        />
                    </div>
                    <h3>Redes Sociales</h3>
                    <div className="col-12">
                        <label htmlFor="inputInstagram" className="form-label">
                            Instagram link:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="instagram"
                            value={storeInfo.instagram}
                            onChange={(event)=>{changeHandlerStore(event)}}
                        />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputTwitter" className="form-label">
                            Twitter link:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="twitter"
                            value={storeInfo.twitter}
                            onChange={(event)=>{changeHandlerStore(event)}}
                        />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputFacebook" className="form-label">
                            Facebook link:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="facebook"
                            value={storeInfo.facebook}
                            onChange={(event)=>{changeHandlerStore(event)}}
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
