import "../assets/styles/scss/components/_ModifyProfileInfos.scss"
import ProfileBiography from "../components/ProfileBiography";
import Edit from "../assets/images/iconsSVG/Edit.svg?react";
import PinPoint from "../assets/images/iconsSVG/PinPoint.svg?react";
import { useState } from "react";
import profileImage from "../assets/images/default/profileImage.jpg";

interface WrapperProps {
    name: string|null;
    city: string;
    country: string;
    pronouns: string|null;
    avatar: string|null;
}

function ModifyProfileInfos(props: WrapperProps) {
    const [isOpenUserInfos, setIsOpenUserInfos] = useState<boolean>(false);
    let avatar: string = profileImage;
    let username : string = "username";
    let pronouns : string = "N/A"
    if(typeof props.avatar === "string" && props.avatar !== "null"){
        avatar= props.avatar;
    }
    if(typeof props.name === "string" && props.name!== "null"){
        username = props.name;
    }
    if(typeof props.pronouns === "string" && props.pronouns!=="null"){
        pronouns = props.pronouns;
    }
    if(!isOpenUserInfos){
        return (
            <section className="modify-profile-infos">
                <img src={avatar} alt="Photo de profil" />
                <div>
                    <div className="modify-profile-edit-info-container">
                        <div>
                            <p className="profile-name">{props.name} {props.pronouns!=="null" && `(${props.pronouns})`}</p>
                            <div className="modify-profile-location-container">
                                <PinPoint />
                                <p className="profile-location">{props.city}, {props.country}</p>
                            </div>
                        </div>
                        <button className="edit-button" onClick={()=>setIsOpenUserInfos(true)}><Edit /></button>
                    </div>
                    <p>Biographie</p>
                    <ProfileBiography className="profile-biography-modify-profile" content="Plus grand streameur de tous les temps, j'aime aussi faire de la musique. Je suis le goat."/>
                </div>
            </section>
        )
    }else{
        return (
            <section className="modify-profile-infos">
                <form action="" method="POST">
                    <img src={avatar} alt="Photo de profil" />
                    {isOpenUserInfos && 
                    <div className="modal-modify-profile-fieldset">
                        <label htmlFor="user-image">Modifier mon image de profil : </label>
                        <input type="file" id="user-image" className="input-user-image" name="user-image" accept="image/png, image/jpeg" />
                    </div>}
                    <div>
                        <div className="modify-profile-edit-info-container">
                            <div>
                                <div className="modal-modify-profile-fieldset">
                                    <label htmlFor="user-pseudo">Modifier mon pseudo : </label>
                                    <input type="text" name="user-pseudo" id="user-pseudo" value={username} />
                                </div>
                                <div className="modal-modify-profile-fieldset">
                                    <label htmlFor="user-pronouns">Modifier mes pronoms</label>
                                    <input type="text" name="user-pronouns" id="user-pronouns" value={pronouns} />
                                </div>
                                <div className="modify-profile-location-container">
                                    <PinPoint />
                                    <p className="profile-location">{props.city}, {props.country}</p>
                                </div>
                            </div>
                            <button className="edit-button" onClick={()=>setIsOpenUserInfos(false)}><Edit /></button>
                        </div>
                        <div className="modal-modify-profile-fieldset">
                            <label htmlFor="user-biography">Modifier ma biographie</label>
                            <textarea name="user-biography" id="user-biography">
                                Plus grand streameur de tous les temps, j'aime aussi faire de la musique. Je suis le goat.
                            </textarea>
                        </div>
                    </div>
                </form>
            </section>
        )
    }
    
    
}
  
export default ModifyProfileInfos