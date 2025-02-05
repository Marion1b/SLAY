import "../assets/styles/scss/pages/_Profile.scss";
import SlayButton from "../components/SlayButton";
import ProfilePictureAndInfo from "../components/ProfilePictureAndInfo";
import NumbersInfos from "../components/NumbersInfos";
import ProfileBiography from "../components/ProfileBiography";

function Profile() {

    return (
        <section className="profile-page">
            <h1 hidden>Profil</h1>
            <div className="profile-section-left">
                <ProfilePictureAndInfo name="Antoine Daniel" city="Montpellier" country="France" pronouns="il" />
            </div>
            <div className="profile-section-right">
                <NumbersInfos reposts={4500} slayers={3200} suivis={439} />
                <ProfileBiography className="profile-biography-profile"/>
                <SlayButton slay={false} />
            </div>
        </section>
    )
}
export default Profile