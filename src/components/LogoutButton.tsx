import "../assets/styles/scss/components/_LogoutButton.scss";
import {logout} from "../api/fetchUtils.ts";

const LogoutButton = () => {
    return(
        <button className="logout-button" onClick={logout}>Se déconnecter</button>
    )
}

export default LogoutButton;