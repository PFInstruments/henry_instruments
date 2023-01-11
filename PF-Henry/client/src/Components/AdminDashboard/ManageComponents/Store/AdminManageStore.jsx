//import axios from "axios";
import React, { useReducer, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStore, putStore } from "../../../../Redux/actions";
import StoreForm from "./StoreForm";

// import { useDispatch /* useSelector*/ } from "react-redux";

export default function AdminManageStore({globalStore}) {
    const [localStore, setLocalStore] = useState({});

    useEffect(()=>{
        setLocalStore(globalStore)
    },[globalStore])

    return(
        <div>
            <StoreForm localStore={localStore} setLocalStore={setLocalStore} />
        </div>
    )
}
