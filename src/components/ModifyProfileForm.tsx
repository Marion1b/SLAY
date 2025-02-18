import "../assets/styles/scss/components/_ModifyProfileForm.scss";
import Edit from "../assets/images/iconsSVG/Edit.svg?react";
import {isSamePassword, isPasswordCorrect} from "../utils/authUtils.ts";
import { useState } from "react";

interface WrapperProps{
    role: string|null;
    mail: string|null;
}

function ModifyProfileForm(props: WrapperProps) {
    const [isOpenUser, setIsOpenUser] = useState<boolean>(false);
    const [isOpenEmail, setIsOpenEmail] = useState<boolean>(false);
    const [isOpenPassword, setIsOpenPassword] = useState<boolean>(false);
    let role:string = "";
    let mail:string = "";
    const [lastPassword, setLastPassword] = useState<string>("");
    const [newPassword, setNewPassword] = useState<string>("");
    const [confirmNewPassword, setConfirmNewPassword] = useState<string>("");
    const [lastPasswordSame, setLastPasswordSame] = useState<string>("same");
    const [passwordCorrect, setPasswordCorrect] = useState<string>("correct");
    const [passwordSame, setPasswordSame] = useState<string>("same");
    const [differentOldPassword, setDifferentOldPassword] = useState<string>("different");
    const [currentPasswordForMail, setCurrentPasswordForMail]=useState<string>("");

    function assignPasswords(setPassword:React.Dispatch<React.SetStateAction<string>>,e : React.ChangeEvent<HTMLInputElement>):void{
        setPassword(e.target.value.toString());
    }

    if(props.role !== null){
        switch (props.role.toLowerCase()){
            case 'artist':
                role = "artiste";
                break;
            case 'band':
                role='groupe';
                break;
            default : 
                role="utilisateur-ice";
        }
    }
    if(typeof props.mail === "string" && props.mail!== "null"){
        mail = props.mail;
    }
    
    return (
        <section className="modify-profile-form" >
            <h2>Je suis</h2>
            <div className="modify-profile-edit-info-container">
                <button className="edit-button" onClick={()=>setIsOpenUser(!isOpenUser)}><Edit /></button>
                {isOpenUser 
                ? <form action="" method="POST">
                    <div className="modal-modify-profile-fieldset">
                        <label htmlFor="user-role" hidden>Je suis  un-e: </label>
                        <select name="user-role" id="user-role">
                            <option value="user">utilisateur-ice</option>
                            <option value="artist">artiste</option>
                            <option value="band">groupe</option>
                        </select>
                    </div>
                    <button type="submit" className="modal-modify-profile-submit-button">Modifier</button>
                </form>
                :<p>{role}</p>}
            </div>
            <h2>Mes informations</h2>
            <p>Adresse mail :</p>
            <div className="modify-profile-edit-info-container">
                <button className="edit-button" onClick={()=>setIsOpenEmail(!isOpenEmail)}><Edit /></button>
                {isOpenEmail
                ?<form action="" method="POST">
                    <div className={`modal-modify-profile-fieldset`}>
                        <label htmlFor="current-password" >Mot de passe actuel : </label>
                        <input type="password" name="current-password" id="current-password" onChange={(e) => assignPasswords(setCurrentPasswordForMail, e)} required />
                    </div>
                    <div className="modal-modify-profile-fieldset">
                        <label htmlFor="email" >Modifier mon email : </label>
                        <input type="email" name="email" id="email" value={mail} required />
                    </div>
                    <button type="submit" className="modal-modify-profile-submit-button">Modifier</button>
                </form>
                :<p>{mail}</p>
                }
            </div>
            <p className="password">Mot de passe :</p>
            <div className="modify-profile-edit-info-container">
                <button className="edit-button" onClick={()=>setIsOpenPassword(!isOpenPassword)}><Edit /></button>
                {isOpenPassword
                ?<form action="" method="POST" >
                    <div className={`modal-modify-profile-fieldset last-password-fieldset-${lastPasswordSame}`}>
                        <label htmlFor="last-password">Mot de passe actuel : </label>
                        <input type="password" name="last-password" id="last-password" className={`input-last-password-${lastPasswordSame}`} onChange={(e) => assignPasswords(setLastPassword, e)} required />
                    </div>
                    <div className={`modal-modify-profile-fieldset password-fieldset-${passwordCorrect} last-password-fieldset-${differentOldPassword}`}>
                        <label htmlFor="new-password">Nouveau mot de passe : </label>
                        <input type="password" name="new-password" id="new-password" className={`input-password-${passwordCorrect} input-last-password-${setDifferentOldPassword}`} onChange={(e) => assignPasswords(setNewPassword, e)} required />
                    </div>
                    <div className={`modal-modify-profile-fieldset password-fieldset-${passwordSame}`}>
                        <label htmlFor="confirm-new-password">Confirmer le nouveau mot de passe : </label>
                        <input type="password" name="confirm-new-password" id="confirm-new-password" className={`input-password-${passwordSame}`} onChange={(e) => assignPasswords(setConfirmNewPassword, e)} required />
                    </div>
                    <button type="submit" className="modal-modify-profile-submit-button">Modifier</button>
                </form>
                : <p>******************</p>
                }
            </div>
            <h2>Mes tags musicaux</h2>
        </section>
    )
}

export default ModifyProfileForm