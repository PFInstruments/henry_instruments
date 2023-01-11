import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Logout() {
    const { logout } = useAuth0();
    return (
        <>
            <button
                className="btn btn-danger tw-h-11"
                onClick={() => logout({ returnTo: window.location.origin })}
            >
                Logout
            </button>
        </>
    );
}

export default Logout;
