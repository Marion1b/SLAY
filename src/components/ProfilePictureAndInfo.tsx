import "../assets/styles/scss/components/_ProfilePictureAndInfo.scss";

interface WrapperProps{
    name: string;
    city: string;
    country: string;
    pronouns: string;
}

function ProfilePictureAndInfo(props: WrapperProps) {
    return (
        <section className="profile-picture-and-info" >
            <img src="./src/assets/images/test/Antoine_Daniel.jpg" alt="Photo de profil de Antoine Daniel" />
            <p className="profile-name">{props.name}</p>
            <p className="profile-location">{props.city}, {props.country}</p>
            <p className="profile-pronouns">{props.pronouns}</p>
        </section>
    )
}

export default ProfilePictureAndInfo