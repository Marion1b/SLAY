import "../assets/styles/scss/pages/_ModifyProfile.scss"
import ModifyProfileInfos from "../components/ModifyProfileInfos";
import ModifyProfileForm from "../components/ModifyProfileForm";

function ModifyProfile() {

    return (
        <section className="modify-profile">
            <h1>Modifier mon profil</h1>
            <section className="modify-profile-form-container">
                <section className="modify-profile-profile-section">
                    <ModifyProfileInfos name={sessionStorage.getItem('slayerPseudo')} city="Montpellier" country="France" pronouns={sessionStorage.getItem('slayerPronouns')} avatar={sessionStorage.getItem('slayerAvatar')}/>
                </section>
                <ModifyProfileForm role={sessionStorage.getItem('slayerRole')} mail={sessionStorage.getItem('slayerEmail')} password="***************"/>
            </section>
            </section>
    )
}

export default ModifyProfile