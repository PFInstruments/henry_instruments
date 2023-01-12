import React, { useEffect, useState } from "react";
import { putStore } from "../../../../Redux/actions";
import { useDispatch } from "react-redux";

export default function AdminManageStore({globalStore}) {
    const dispatch = useDispatch();

    ///ESTADOS LOCALES///

    //HOOKS
    
    const [localStore, setLocalStore] = useState({});
    useEffect(()=>{
        setLocalStore(
            {...globalStore}
        )
    },[globalStore])
    console.log(localStore)
    
        //EVENT HANDLERS///

    const changeHandlerStore=(event)=>{
        setLocalStore({
            ...localStore,
            [event.target.id]: event.target.value
        })
    }

    const setFileToBase = (ev, file) => {
        const reader = new FileReader();
        if (file) {
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setLocalStore({
                    ...localStore,
                    [ev.target.id]: reader.result});
            };
        } else {
            setLocalStore({
                ...localStore,
                    [ev.target.id]: ""
            });
        }
    };

    const handleImage = (e) => {
        const file = e.target.files[0];
        setFileToBase(e, file);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(putStore(localStore));
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
                    <div className="mb-3">
                    <h3>Store picture</h3>
                     <label
                                        className="col-form-label"
                                        htmlFor="inputGroupFile01"
                                    >
                                        Image
                                    </label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        file={localStore.icon}
                                        filename={localStore.icon}
                                        id="icon"
                                        onChange={handleImage}
                                    />
                                </div>
                                <div>
                                    {localStore.icon && (
                                        // eslint-disable-next-line jsx-a11y/alt-text
                                        <img
                                            src={localStore.icon}
                                            className="listImg img-thumbnail"
                                        ></img>
                                    )}
                                </div>
                    <h3>Store location</h3>
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
                            value={localStore.email}
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
                            value={localStore.phoneNumber}
                            onChange={(event)=>{changeHandlerStore(event)}}
                        />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label">
                            Address
                        </label>
                        <textarea
                            className="form-control"
                            value={localStore.adress}
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
                            value={localStore.city}
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
                            value={localStore.state}
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
                            value={localStore.zip}
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
                            value={localStore.country}
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
                            value={localStore.instagram}
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
                            value={localStore.twitter}
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
                            value={localStore.facebook}
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