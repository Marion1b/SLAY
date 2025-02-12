import "../assets/styles/scss/components/_ModifyProfileForm.scss";
import Edit from "../assets/images/iconsSVG/Edit.svg?react";
import ModalModifyProfile from "../components/ModalModifyProfile";
import { useState } from "react";

interface WrapperProps{
    role: string|null;
    mail: string|null;
    password: string;
}

function ModifyProfileForm(props: WrapperProps) {
    const [isOpenUser, setIsOpenUser] = useState<boolean>(false);
    const [isOpenEmail, setIsOpenEmail] = useState<boolean>(false);
    const [isOpenPassword, setIsOpenPassword] = useState<boolean>(false);
    let role:string = "";
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
    
    return (
        <section className="modify-profile-form" >
            <h2>Je suis</h2>
            <div className="modify-profile-edit-info-container">
                <button className="edit-button" onClick={()=>setIsOpenUser(true)}><Edit /></button>
                <p>{role}</p>
            </div>
            <h2>Mes informations</h2>
            <p>Adresse mail :</p>
            <div className="modify-profile-edit-info-container">
                <button className="edit-button" onClick={()=>setIsOpenEmail(true)}><Edit /></button>
                <p>{props.mail}</p>
            </div>
            <p className="password">Mot de passe :</p>
            <div className="modify-profile-edit-info-container">
                <button className="edit-button" onClick={()=>setIsOpenPassword(true)}><Edit /></button>
                <p>{props.password}</p>
            </div>
            <h2>Mes tags musicaux</h2>
            {isOpenUser && <ModalModifyProfile name="type-of-user" value="" setIsOpen={setIsOpenUser} />}
            {isOpenEmail && <ModalModifyProfile name="email" value="amy-la-chipie@yahoo.fr" setIsOpen={setIsOpenEmail}/>}
            {isOpenPassword && <ModalModifyProfile name="password" value="Azerazerazer12!" setIsOpen={setIsOpenPassword} />}
        </section>
    )
}

export default ModifyProfileForm