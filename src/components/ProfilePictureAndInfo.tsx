import "../assets/styles/scss/components/_ProfilePictureAndInfo.scss";

function ProfilePictureAndInfo() {
    return (
        <section className="profile-picture-and-info" >
            <img src="./src/assets/images/test/Antoine_Daniel.jpg" alt="Photo de profil de Antoine Daniel" />
            <p className="profile-name">Antoine Daniel</p>
            <p className="profile-location">Montpellier, France</p>
            <p className="profile-pronouns">il</p>
        </section>
    )
}

export default ProfilePictureAndInfo