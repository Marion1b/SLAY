import "../assets/styles/scss/pages/_ModifyProfile.scss"
import ProfilePictureAndInfo from "../components/ProfilePictureAndInfo";
import ProfileBiography from "../components/ProfileBiography";
import ModifyProfileForm from "../components/ModifyProfileForm";
function ModifyProfile() {
    return (
        <section className="modify-profile">
            <h1>MODIFIER MON PROFIL</h1>
            <ProfilePictureAndInfo name="Antoine Daniel" city="Montpellier" country="France" pronouns="il" />
            <p>Biographie</p>
            <ProfileBiography />
            <ModifyProfileForm />
        </section>
    )
}
  
export default ModifyProfile