import React , {  useEffect}from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";



function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <>
        <Link to={`/userprofile/${user.sub}`}>
          <img
            className="tw-rounded-full"
            src={user.picture}
            alt={user.name}
            width={37}
            height={37}
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="Perfil de Usuario"
          />
        </Link>
      </>
    )
  );
}

export default Profile;
