import React from 'react';
import { GoogleLogout } from 'react-google-login';
const clientId = "798751703584-3v55a4b1ghguci702kcp4s5bbtvipb7a.apps.googleusercontent.com";
function LogoutBtn() {



    const onSuccess = (res) => {
        console.log("Logout Successfull!")
    }

    return (

        <div id="signOutButton">
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onSuccess={onSuccess}
            />
        </div>
    )
}

export default LogoutBtn;