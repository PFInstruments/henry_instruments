import React, { useReducer } from "react";
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

    ///HOOKS///

    //EVENT HANDLERS///

    function handleSubmit(e) {
        e.preventDefault();

        alert("Changes Saved!");
        setContactForm({ type: "SUBMIT" });
    }

    return (
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
                        value={contactForm.email}
                        onChange={(e) => {
                            setContactForm({
                                type: "SET_EMAIL",
                                payload: e.target.value,
                            });
                        }}
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
                        value={contactForm.phoneNum}
                        onChange={(e) => {
                            setContactForm({
                                type: "SET_PHONENUM",
                                payload: e.target.value,
                            });
                        }}
                    />
                </div>

                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">
                        Address
                    </label>
                    <textarea
                        className="form-control"
                        value={contactForm.address}
                        onChange={(e) => {
                            setContactForm({
                                type: "SET_ADDRESS",
                                payload: e.target.value,
                            });
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
                <div className="col-md-7">
                    <label htmlFor="inputState" className="form-label">
                        State
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputState"
                        value={contactForm.state}
                        onChange={(e) => {
                            setContactForm({
                                type: "SET_STATE",
                                payload: e.target.value,
                            });
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
                <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">
                        Country
                    </label>
                    <input
                        type="text"
                        className="form-control"
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

                <div className="col-12">
                    <button type="submit" className="btn  btn-success btn-lg">
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}
