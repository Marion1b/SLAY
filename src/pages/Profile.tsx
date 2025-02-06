import "../assets/styles/scss/pages/_Profile.scss";
import ProfilePictureAndInfo from "../components/ProfilePictureAndInfo";
import NumbersInfos from "../components/NumbersInfos";
import ProfileBiography from "../components/ProfileBiography";
import ModifyProfileButton from "../components/ModifyProfileButton";
import { Link } from 'react-router-dom';

//Profile page for connected user

function Profile() {

    return (
        <section className="profile-page">
            <h1 hidden>Profil</h1>
            <div className="profile-section-left">
                <ProfilePictureAndInfo avatar={sessionStorage.getItem('slayerAvatar')} name={sessionStorage.getItem('slayerPseudo')} city="Montpellier" country="France" pronouns={sessionStorage.getItem('slayerPronouns')} />
            </div>
            <div className="profile-section-right">
                <NumbersInfos reposts={4500} slayers={3200} suivis={439} />
                <ProfileBiography className="profile-biography-profile"/>
                <Link to="/modifier-mon-profil">
                    <ModifyProfileButton />
                </Link>
            </div>
        </section>
    )
}
export default Profile