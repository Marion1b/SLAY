import "../assets/styles/scss/components/_ModifyProfileInfos.scss"
import ProfileBiography from "../components/ProfileBiography";
import Edit from "../assets/images/iconsSVG/Edit.svg";
import PinPoint from "../assets/images/iconsSVG/PinPoint.svg";
import { useState, useEffect } from "react";
import profileImage from "../assets/images/default/profileImage.jpg";
import { modifyProfile } from "../api/fetchUtils";
import config from '../../config.ts';

interface WrapperProps {
    name: string|null;
    city: string;
    country: string;
    pronouns: string|null;
    avatar: string|null;
}

function ModifyProfileInfos(props: WrapperProps) {
    const [isOpenUserInfos, setIsOpenUserInfos] = useState<boolean>(false);
    let currentAvatar: string = profileImage;
    let username : string = "username";
    let currentPronouns : string = "N/A";

    if(typeof props.avatar === "string" && props.avatar !== "null"){
        currentAvatar= props.avatar;
    }
    if(typeof props.name === "string" && props.name!== "null"){
        username = props.name;
    }
    if(typeof props.pronouns === "string" && props.pronouns!=="null"){
        currentPronouns = props.pronouns;
    }

    const url = `${config.API_URL}/v1/auth/modifyProfile`;
    const[status, setStatus] = useState<string|null>(null);
    const[avatar, setAvatar] = useState<string>(currentAvatar);
    const[pseudo, setPseudo] = useState<string>(username);
    const[pronounsForm, setPronounsForm] = useState<string>(currentPronouns);

    const assignModifyData = (setData:React.Dispatch<React.SetStateAction<string>>,e : React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value.toString().trim()){
            setData(e.target.value.toString());
        }
    }

    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        setStatus('Loading');
        let pronouns = pronounsForm;
        if(pronouns === "N/A"){
            pronouns="null";
        }
        try{
            const{error, status} = await modifyProfile(url, {pseudo, avatar, pronouns});
            if(status === "success"){
                sessionStorage.setItem('slayerPseudo', pseudo);
                sessionStorage.setItem('slayerPronouns', pronouns);
                sessionStorage.setItem('slayerAvatar', avatar);
                window.location.reload();
            }
        }catch(error){
            console.error('modify error:', error);
        }
    }

    if(!isOpenUserInfos){
        return (
            <section className="modify-profile-infos">
                <img src={currentAvatar} alt="Photo de profil" />
                    <div className="modify-profile-edit-info-container">
                        <p className="profile-name">{props.name} {props.pronouns!=="null" && `(${props.pronouns})`}</p>
                        <div className="modify-profile-location-container">
                            <PinPoint />
                            <p className="profile-location">{props.city}, {props.country}</p>
                        </div>
                        <p className="modify-profile-infos-bio">Biographie</p>
                        <ProfileBiography className="profile-biography-modify-profile" content="Plus grand streameur de tous les temps, j'aime aussi faire de la musique. Je suis le goat."/>
                    </div>
                    <button className="edit-button" onClick={()=>setIsOpenUserInfos(true)}><Edit /></button>
            </section>
        )
    }else{
        return (
            <section className="modify-profile-infos">
                <form action="" method="PUT" onSubmit={handleSubmit}>
                    <div className="modal-modify-profile-fieldset modify-profile-infos-image">
                        <img src={currentAvatar} alt="Photo de profil" />
                        <br />
                        <label htmlFor="user-image">Modifier mon image de profil</label>
                        <input type="file" id="user-image" className="input-user-image" name="user-image" accept="image/png, image/jpeg" onChange={(e)=>assignModifyData(setAvatar,e)} />
                    </div>
                    <div className="modify-profile-edit-info-container">
                        <div className="modal-modify-profile-fieldset">
                            <label htmlFor="user-pseudo">Modifier mon pseudo</label>
                            <input type="text" name="user-pseudo" id="user-pseudo" placeholder={username} onChange={(e)=>{assignModifyData(setPseudo,e)}} />
                        </div>
                        <div className="modal-modify-profile-fieldset">
                            <label htmlFor="user-pronouns">Modifier mes pronoms</label>
                            <input type="text" name="user-pronouns" id="user-pronouns" placeholder={currentPronouns} onChange={(e)=>{assignModifyData(setPronounsForm,e)}} />
                        </div>
                        <div className="modal-modify-profile-fieldset">
                            <label htmlFor="user-location">Modifier ma localisation</label>
                            <input type="text" name="user-location" id="user-location" />
                        </div>
                        <div className="modal-modify-profile-fieldset">
                            <label htmlFor="user-biography">Modifier ma biographie</label>
                            <textarea name="user-biography" id="user-biography">
                                Plus grand streameur de tous les temps, j'aime aussi faire de la musique. Je suis le goat.
                            </textarea>
                        </div>
                    </div>
                    <button className="edit-button" onClick={()=>setIsOpenUserInfos(false)}><Edit /></button>
                    <button type="submit" className="modal-modify-profile-submit-button">Modifier</button>
                </form>
            </section>
        )
    }
    
    
}
  
export default ModifyProfileInfos