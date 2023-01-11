//import axios from "axios";
import React, { useReducer, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStore, putStore } from "../../../../Redux/actions";
// import { useDispatch /* useSelector*/ } from "react-redux";

export default function AdminManageStore({globalStore}) {
    ///DISPATCH///
    const dispatch = useDispatch();

    ///ESTADOS LOCALES///

    //HOOKS
    
    //const [localStore, setLocalStore] = useState({});
    
    /*useEffect(()=>{
        setLocalStore({
            //globalStore
            carrousel: globalStore?.carrousel,
            email: globalStore?.email,
            phoneNumber: globalStore?.phoneNumber,
            adress: globalStore?.adress,
            city: globalStore?.city,
            state: globalStore?.state,
            zip: globalStore?.zip,
            country: globalStore?.country,
            instagram: globalStore?.instagram,
            twitter: globalStore?.twitter,
            facebook: globalStore?.facebook,
        })

    },[globalStore, localStore, setLocalStore])*/
    //console.log(localStore)
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
    /*
    const [editSuccess,setEditSuccess] = useState(false);

    const [editStoreForm,setEditStoreForm] = useState();

    const [disabledSubmit, setDisabledSubmit] = useState(true);

    /////LOCAL REDUCER//////////
    let initialState = {
        id: globalStore?.id,
        carrousel: globalStore?.carrousel,
        icon: globalStore?.icon,
        email: globalStore?.email,
        phoneNumber: globalStore?.phoneNumber,
        adress: globalStore?.adress,
        city: globalStore?.city,
        state: globalStore?.state,
        zip: globalStore?.zip,
        country: globalStore?.country,
        instagram: globalStore?.instagram,
        twitter: globalStore?.twitter,
        facebook: globalStore?.facebook,
    };
    const contactFormReducer = (state, action) => {
        // eslint-disable-next-line default-case
        switch (action.type) {
            case "SET_CARROUSEL": {
                return {
                    ...state,
                    country: action.payload,
                };
            }
            case "SET_ICON": {
                return {
                    ...state,
                    country: action.payload,
                };
            }
            case "SET_EMAIL": {
                return {
                    ...state,
                    email: action.payload,
                };
            }
            case "SET_PHONENUMBER": {
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
            case "SET_INSTAGRAM": {
                return {
                    ...state,
                    country: action.payload,
                };
            }
            case "SET_TWITTER": {
                return {
                    ...state,
                    country: action.payload,
                };
            }
            case "SET_FACEBOOK": {
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

    function refresh() {
        setEditSuccess(false);
        dispatch(getStore());
    }

    const handleImage = (e) => {
        const file = e.target.files[0];
        setFileToBase(file);
    };

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(putStore(editStoreForm));

        setEditSuccess(true);
        console.log(editStoreForm);

        setEditStoreForm({ type: "SUBMIT" });
    }

    ////SETEO LA FOTO  A BASE 64////

    const setFileToBase = (file) => {
        const reader = new FileReader();
        if (file) {
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setEditStoreForm({
                    type: "SET_IMAGE",
                    payload: reader.result,
                });
            };
            console.log(editStoreForm);
        } else {
            setEditStoreForm({
                type: "SET_IMAGE",
                payload: "",
            });
        }
    };
/*
    useEffect(()=>{
        dispatch(getStore());
    },[dispatch]);
*/
    //const stores = useSelector((state)=>state.store);

    /*const [storeInfo,setStoreInfo]=useState({
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
    console.log(localStore)
    console.log(storeInfo)*/

        //EVENT HANDLERS///

    /*const changeHandlerStore=(event)=>{
        setLocalStore({
            ...localStore,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        
    }*

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
                            name="email"
                            value={contactForm.email}
                            onChange={changeHandlerStore}
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
                            name="phoneNumber"
                            value={contactForm.phoneNumber}
                            onChange={changeHandlerStore}
                        />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label">
                            Address
                        </label>
                        <textarea
                            className="form-control"
                            value={contactForm.adress}
                            id="adress"
                            name="adress"
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
                            id="city"
                            name="city"
                            value={contactForm.city}
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
                            id="state"
                            name="state"
                            value={contactForm.state}
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
                            id="zip"
                            name="zip"
                            value={contactForm.zip}
                            onChange={changeHandlerStore}
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
                            name="country"
                            value={contactForm.country}
                            onChange={changeHandlerStore}
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
                            name="instagram"
                            value={contactForm.instagram}
                            onChange={changeHandlerStore}
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
                            name="twitter"
                            value={contactForm.twitter}
                            onChange={changeHandlerStore}
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
                            name="facebook"
                            value={contactForm.facebook}
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
    */
}
