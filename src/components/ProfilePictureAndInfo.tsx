import "../assets/styles/scss/components/_ProfilePictureAndInfo.scss";
import profileImage from "../assets/images/default/profileImage.jpg";

interface WrapperProps{
    name: string | null;
    city: string;
    country: string;
    pronouns: string | null;
    avatar: string | null;
}

function ProfilePictureAndInfo(props: WrapperProps) {
    let avatar: string = profileImage;
    if(typeof props.avatar === "string" && props.avatar !== "null"){
        avatar= props.avatar;
    }
    return (
        <section className="profile-picture-and-info" >
            <img src={avatar} alt="Photo de profil" />
            <p className="profile-name">{props.name}</p>
            <p className="profile-location">{props.city}, {props.country}</p>
            {props.pronouns!=="null" && <p className="profile-pronouns">{props.pronouns}</p>}
        </section>
    )
}

export default ProfilePictureAndInfo