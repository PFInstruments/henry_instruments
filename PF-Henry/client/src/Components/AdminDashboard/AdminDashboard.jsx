import React, { useEffect } from "react";
import AdminMenuTabs from "./AdminMenuTabs";
// import AdminNavbar from "./AdminNavBar";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import Error404 from "../Error404/Error404";
import { getUser } from "../../Redux/actions";
import Loading from "../Loading/Loading";

export default function AdminDashboard() {
    const dispatch = useDispatch();

    console.log("hola");
    const { isAuthenticated, user } = useAuth0();

    const localUser = useSelector((state) => state.user);

    useEffect(() => {
        if (isAuthenticated) {
            dispatch(getUser(user.sub));
        }
    }, [isAuthenticated, dispatch, user]);

    return (
        <div>
            {!Object.keys(localUser).length ? (
                <Loading />
            ) : localUser.admin ? (
                <AdminMenuTabs />
            ) : (
                <Error404 />
            )}
        </div>
    );
}
