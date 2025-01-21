import "../assets/styles/scss/components/_ModifyProfileForm.scss";
import Edit from "../assets/images/icons/Edit.svg?react";


interface WrapperProps{
    role: string;
    mail: string;
    password: string;
}

function ModifyProfileForm(props: WrapperProps) {
    return (
        <section className="modify-profile-form" >
            <h2>Je suis</h2>
            <div className="modify-profile-edit-info-container">
                <Edit />
                <p>{props.role}</p>
            </div>
            <h2>Mes informations</h2>
            <p>Adresse mail :</p>
            <div className="modify-profile-edit-info-container">
                <Edit />
                <p>{props.mail}</p>
            </div>
            <p className="password">Mot de passe :</p>
            <div className="modify-profile-edit-info-container">
                <Edit />
                <p>{props.password}</p>
            </div>
            <h2>Mes tags musicaux</h2>
        </section>
    )
}

export default ModifyProfileForm