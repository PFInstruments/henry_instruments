//import axios from "axios";
import React, { useReducer, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStore, putStore } from "../../../../Redux/actions";
// import { useDispatch /* useSelector*/ } from "react-redux";

export default function StoreForm({store}) {
    ///DISPATCH///
    const dispatch = useDispatch();
    
    const [editSuccess,setEditSuccess] = useState(false);

    //const [editStoreForm,setEditStoreForm] = useState();

    const [disabledSubmit, setDisabledSubmit] = useState(true);

    /////LOCAL REDUCER//////////
    let initialState = {
        id: store?.id,
        carrousel: store?.carrousel,
        icon: store?.icon,
        email: store?.email,
        phoneNumber: store?.phoneNumber,
        adress: store?.adress,
        city: store?.city,
        state: store?.state,
        zip: store?.zip,
        country: store?.country,
        instagram: store?.instagram,
        twitter: store?.twitter,
        facebook: store?.facebook,
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
        dispatch(putStore(contactForm));

        setEditSuccess(true);
        console.log(contactForm);

        setContactForm({ type: "SUBMIT" });
    }

    ////SETEO LA FOTO  A BASE 64////

    const setFileToBase = (file) => {
        const reader = new FileReader();
        if (file) {
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setContactForm({
                    type: "SET_IMAGE",
                    payload: reader.result,
                });
            };
            console.log(contactForm);
        } else {
            setContactForm({
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
        carrousel: store?.carrousel,
        email: store?.email,
        phoneNumber: store?.phoneNumber,
        adress: store?.adress,
        city: store?.city,
        state: store?.state,
        zip: store?.zip,
        country: store?.country,
        instagram: store?.instagram,
        twitter: store?.twitter,
        facebook: store?.facebook,
    });
    console.log(store)
    console.log(storeInfo)*/

        //EVENT HANDLERS///

    /*const handleImage=(event)=>{
        setstore({
            ...store,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        
    }*/

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
                        <h3>FRONT ONLINE STORE</h3>
                        <div className="mb-3">
                            <label
                                className="col-form-label"
                                htmlFor="inputGroupFile01"
                            >
                                Image Icon
                            </label>
                            <input
                                type="file"
                                className="form-control"
                                file={contactForm?.image}
                                filename={contactForm?.image}
                                id="inputGroupFile01"
                                onChange={handleImage}
                            />
                        </div>
                        <h3>STORE LOCATION</h3>
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
                            onChange={(e)=>{
                                setContactForm({
                                    type: "SET_EMAIL" ,
                                    action: e.target.payload
                                })
                            }}
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
                            onChange={(e)=>{
                                setContactForm({
                                    type: "SET_PHONENUMBER" ,
                                    action: e.target.payload
                                })
                            }}
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
                            onChange={(e)=>{
                                setContactForm({
                                    type: "SET_ADDRESS" ,
                                    action: e.target.payload
                                })
                            }}
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
                            onChange={(e)=>{
                                setContactForm({
                                    type: "SET_CITY" ,
                                    action: e.target.payload
                                })
                            }}
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
                            onChange={(e)=>{
                                setContactForm({
                                    type: "SET_ST" ,
                                    action: e.target.payload
                                })
                            }}
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
                            onChange={(e)=>{
                                setContactForm({
                                    type: "SET_ZIP" ,
                                    action: e.target.payload
                                })
                            }}
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
                            onChange={(e)=>{
                                setContactForm({
                                    type: "SET_COUNTRY" ,
                                    action: e.target.payload
                                })
                            }}
                        />
                    </div>
                    <h3>SOCIAL MEDIA</h3>
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
                            onChange={(e)=>{
                                setContactForm({
                                    type: "SET_INSTAGRAM" ,
                                    action: e.target.payload
                                })
                            }}
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
                            onChange={(e)=>{
                                setContactForm({
                                    type: "SET_TWITTER" ,
                                    action: e.target.payload
                                })
                            }}
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
                            onChange={(e)=>{
                                setContactForm({
                                    type: "SET_FACEBOOK" ,
                                    action: e.target.payload
                                })
                            }}
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
