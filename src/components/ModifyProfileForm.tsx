import "../assets/styles/scss/components/_ModifyProfileForm.scss";
import LogoutButton from "./LogoutButton.tsx";
import Edit from "../assets/images/iconsSVG/Edit.svg";
import {isSamePassword, isPasswordCorrect} from "../utils/authUtils.ts";
import { useState } from "react";
import { modifyPassword, modifyProfile } from "../api/fetchUtils.ts";
import config from '../../config.ts';

interface WrapperProps{
    role: string|null;
    mail: string|null;
}

function ModifyProfileForm(props: WrapperProps) {
    const [isOpenUser, setIsOpenUser] = useState<boolean>(false);
    const [isOpenEmail, setIsOpenEmail] = useState<boolean>(false);
    const [isOpenPassword, setIsOpenPassword] = useState<boolean>(false);
    let currentRole:string = "";
    let currentMail:string = "";
    const [oldPassword, setOldPassword] = useState<string>("");
    const [newPassword, setNewPassword] = useState<string>("");
    const [confirmNewPassword, setConfirmNewPassword] = useState<string>("");
    const [lastPasswordSame, setLastPasswordSame] = useState<string>("same");
    const [passwordCorrect, setPasswordCorrect] = useState<string>("correct");
    const [passwordSame, setPasswordSame] = useState<string>("same");
    const [differentOldPassword, setDifferentOldPassword] = useState<string>("different");

    function assignPasswords(setPassword:React.Dispatch<React.SetStateAction<string>>,e : React.ChangeEvent<HTMLInputElement>):void{
        setPassword(e.target.value.toString());
    }

    if(props.role !== null){
        switch (props.role.toLowerCase()){
            case 'artist':
                currentRole = "artiste";
                break;
            case 'band':
                currentRole='groupe';
                break;
            default : 
                currentRole="utilisateur-ice";
        }
    }
    if(typeof props.mail === "string" && props.mail!== "null"){
        currentMail = props.mail;
    }
    
    const url = `${config.API_URL}/v1/auth/modifyProfile`;
    const urlPassword = `${config.API_URL}/v1/auth/modifyPassword`;
    const[status, setStatus] = useState<string|null>(null);
    const [role, setRole] = useState<string>(currentRole);
    const[email, setEmail] = useState<string>(currentMail);

    const assignRole = (setData:React.Dispatch<React.SetStateAction<string>>,e : React.ChangeEvent<HTMLSelectElement>) => {
        if(e.target.value.toString().trim()){
            setData(e.target.value.toString());
        }
    }

    const assignMail = (setData:React.Dispatch<React.SetStateAction<string>>,e : React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value.toString().trim()){
            setData(e.target.value.toString());
        }
    }

    const handleSubmitRole = async(e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        setStatus('Loading');
        switch(role){
            case 'artiste':
                setRole('ARTIST');
                break;
            case'groupe':
                setRole('BAND');
                break;
            default:('USER');
        }
        try{
            const{error,status} = await modifyProfile(url, {role});
            if(status === "success"){
                sessionStorage.setItem('slayerRole', role);
                window.location.reload();
            }
        }catch(error){
            console.error('modify role error:', error);
        }
    }

    const handleSubmitMail = async(e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        setStatus('Loading');
        try{
            const{error,status} = await modifyProfile(url, {email});
            if(status === "success"){
                sessionStorage.setItem('slayerEmail', email);
                window.location.reload();
            }
        }catch(error){
            console.error('modify email error:', error);
        }
    }

    const checkPasswords = () =>{
        if(!isSamePassword(newPassword, confirmNewPassword)){
            setPasswordSame('no-same');
            return false
        }else if(!isPasswordCorrect(newPassword)){
            setPasswordSame('same');
            setPasswordCorrect('incorrect');
            return false
        }
        return true;
    }

    const handleSubmitPasswords = async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        setStatus('Loading');
        if(checkPasswords()){
            try{
                const{error,status}= await modifyPassword(urlPassword, {oldPassword, newPassword});
                if(status === "success"){
                    window.location.reload();
                }else{
                    setLastPasswordSame("no-same");
                    console.log("here");
                }
            }catch(error){
                console.error('modify password error:', error);
            }
        }
    }

    return (
        <section className="modify-profile-form" >
            <h2>Je suis</h2>
            <div className="modify-profile-edit-info-container">
                <button className="edit-button" onClick={()=>setIsOpenUser(!isOpenUser)}><Edit /></button>
                {isOpenUser 
                ? <form action="" method="PUT" onSubmit={handleSubmitRole}>
                    <div className="modal-modify-profile-fieldset">
                        <label htmlFor="user-role" hidden>Je suis  un-e: </label>
                        <select name="user-role" id="user-role" onChange={(e)=>{assignRole(setRole, e)}}>
                            <option value="user">utilisateur-ice</option>
                            <option value="artist">artiste</option>
                            <option value="band">groupe</option>
                        </select>
                    </div>
                    <button type="submit" className="modal-modify-profile-submit-button">Modifier</button>
                </form>
                :<p>{currentRole}</p>}
            </div>
            <h2>Mes informations</h2>
            <p>Adresse mail :</p>
            <div className="modify-profile-edit-info-container">
                <button className="edit-button" onClick={()=>setIsOpenEmail(!isOpenEmail)}><Edit /></button>
                {isOpenEmail
                ?<form action="" method="PUT" onSubmit={handleSubmitMail}>
                    <div className="modal-modify-profile-fieldset">
                        <label htmlFor="email" >Modifier mon email : </label>
                        <input type="email" name="email" id="email" placeholder={currentMail} onChange={(e)=>assignMail(setEmail,e)} required />
                    </div>
                    <button type="submit" className="modal-modify-profile-submit-button">Modifier</button>
                </form>
                :<p>{currentMail}</p>
                }
            </div>
            <p className="password">Mot de passe :</p>
            <div className="modify-profile-edit-info-container">
                <button className="edit-button" onClick={()=>setIsOpenPassword(!isOpenPassword)}><Edit /></button>
                {isOpenPassword
                ?<form action="" method="PUT" onSubmit={handleSubmitPasswords}>
                    <div className={`modal-modify-profile-fieldset last-password-fieldset-${lastPasswordSame}`}>
                        <label htmlFor="last-password">Mot de passe actuel : </label>
                        <input type="password" name="last-password" id="last-password" className={`input-last-password-${lastPasswordSame}`} onChange={(e) => assignPasswords(setOldPassword, e)} required />
                    </div>
                    <div className={`modal-modify-profile-fieldset password-fieldset-${passwordCorrect} new-password-fieldset-${differentOldPassword}`}>
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
            <LogoutButton />
            <h2>Mes tags musicaux</h2>
        </section>
    )
}

export default ModifyProfileForm