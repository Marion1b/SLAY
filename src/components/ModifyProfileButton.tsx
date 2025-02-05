import Settings from "../assets/images/iconsSVG/Settings.svg?react";
import "../assets/styles/scss/components/_ModifyProfileButton.scss";

const ModifyProfileButton = () =>{
    return(
        <button className="modify-profile-button">Modifier mon profil <Settings /></button>
    )
}

export default ModifyProfileButton;