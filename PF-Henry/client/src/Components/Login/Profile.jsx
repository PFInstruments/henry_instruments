import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    isAuthenticated && (
      <>
        <img className="tw-rounded-full" src={user.picture} alt={user.name} width={37} height={37} />
      </>
    )
  );
}

export default Profile;
