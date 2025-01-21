import {isSamePassword, isPasswordCorrect} from "../utils/authUtils.ts";
import {useState} from 'react';
import "../assets/styles/scss/components/_ModalModifyProfile.scss";
import X from "../assets/images/icons/X.svg?react";

interface WrapperProps{
    name: string;
    value: string;
    setIsOpen:React.Dispatch<React.SetStateAction<boolean>>
}

function ModalModifyProfile(props: WrapperProps ){

    if(props.name === "type-of-user"){
        return(
            <section className="modal-modify-profile" >
                <form action="" method="POST">
                    <button className="modal-modify-profile-close-button" onClick={()=>props.setIsOpen(false)}><X /></button>
                    <div className="modal-modify-profile-fieldset">
                        <label htmlFor={props.name}>Je suis  un-e: </label>
                        <select name={props.name} id={props.name}>
                            <option value="user">Utilisateur/utilisatrice</option>
                            <option value="artist">Artiste</option>
                            <option value="band">Groupe</option>
                        </select>
                    </div>
                    <button type="submit" className="modal-modify-profile-submit-button">Modifier</button>
                </form>
            </section>
        )
    }else if (props.name === "email"){
        return(
            <section className="modal-modify-profile">
                <form action="" method="POST">
                    <button className="modal-modify-profile-close-button" onClick={()=>props.setIsOpen(false)}><X /></button>
                    <div className="modal-modify-profile-fieldset">
                        <label htmlFor={props.name}>Modifier mon email : </label>
                        <input type="email" name={props.name} id={props.name} placeholder={props.value} required />
                    </div>
                    <button type="submit" className="modal-modify-profile-submit-button">Modifier</button>
                </form>
            </section>
        )
    }else if(props.name === "user-infos"){
        return(
            <section className="modal-modify-profile">
                <form action="" method="POST">
                    <button className="modal-modify-profile-close-button" onClick={()=>props.setIsOpen(false)}><X /></button>
                    <div className="modal-modify-profile-fieldset">
                        <label htmlFor="user-image">Modifier mon image de profil : </label>
                        <input type="file" id="user-image" className="input-user-image" name="user-image" accept="image/png, image/jpeg" />
                    </div>
                    <div className="modal-modify-profile-fieldset">
                        <label htmlFor="user-pseudo">Modifier mon pseudo : </label>
                        <input type="text" name="user-pseudo" id="user-peusod" />
                    </div>
                    <div className="modal-modify-profile-fieldset">
                        <label htmlFor="user-pronouns">Modifier mes pronoms</label>
                        <input type="text" name="user-pronouns" id="user-pronouns" />
                    </div>
                    <div className="modal-modify-profile-fieldset">
                        <label htmlFor="user-geolocation">Modifier ma localisation</label>
                        <input type="text" name="user-geolocation" id="user-geolocation" />
                    </div>
                    <button type="submit" className="modal-modify-profile-submit-button">Modifier</button>
                </form>
            </section>
        )
    }else{
        const [lastPassword, setLastPassword] = useState<string>("");
        const [newPassword, setNewPassword] = useState<string>("");
        const [confirmNewPassword, setConfirmNewPassword] = useState<string>("");
        const [lastPasswordSame, setLastPasswordSame] = useState<string>("same");
        const [passwordCorrect, setPasswordCorrect] = useState<string>("correct");
        const [passwordSame, setPasswordSame] = useState<string>("same");
        const [differentOldPassword, setDifferentOldPassword] = useState<string>("different");

        function assignPasswords(setPassword:React.Dispatch<React.SetStateAction<string>>,e : React.ChangeEvent<HTMLInputElement>):void{
            setPassword(e.target.value.toString());
        }

        function checkPasswords(e: React.FormEvent<HTMLFormElement>):void{
            if(!isSamePassword(props.value, lastPassword) 
            || !isPasswordCorrect(newPassword) 
            || !isSamePassword(newPassword, confirmNewPassword) 
            || isSamePassword(lastPassword, newPassword)){
                e.preventDefault();
                isSamePassword(props.value, lastPassword) ? setLastPasswordSame("same") : setLastPasswordSame("no-same");
                isPasswordCorrect(newPassword) ? setPasswordCorrect("correct") :setPasswordCorrect("incorrect");
                isSamePassword(newPassword, confirmNewPassword) ? setPasswordSame("same") : setPasswordSame("no-same");
                isSamePassword(lastPassword, newPassword) ? setDifferentOldPassword("no-different") : setDifferentOldPassword("different");
            }
        }

        return(
            <section className="modal-modify-profile">
                <form action="" method="POST" onSubmit={checkPasswords}>
                    <button className="modal-modify-profile-close-button" onClick={()=>props.setIsOpen(false)}><X /></button>
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
            </section>
        )
    }
}

export default ModalModifyProfile;