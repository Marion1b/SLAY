import "../assets/styles/scss/pages/_ModifyProfile.scss"
import ModifyProfileInfos from "../components/ModifyProfileInfos";
import ModifyProfileForm from "../components/ModifyProfileForm";

function ModifyProfile() {
    return (
        <section className="modify-profile">
            <h1>Modifier mon profil</h1>
            <section className="modify-profile-profile-section">
                <ModifyProfileInfos name="Antoine Daniel" city="Montpellier" country="France" pronouns="il" />
            </section>
            <ModifyProfileForm role="Utilisateur / utilisatrice" mail="antoine.daniel@gmail.com" password="***************"/>
        </section>
    )
}
  
export default ModifyProfile