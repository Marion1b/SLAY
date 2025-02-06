import "../assets/styles/scss/components/_ProfilePictureAndInfo.scss";

interface WrapperProps{
    name: string | null;
    city: string;
    country: string;
    pronouns: string | null;
    avatar: string | null;
}

function ProfilePictureAndInfo(props: WrapperProps) {
    let avatar: string = "https://cdn.discordapp.com/attachments/1308349267668242434/1308350888544567348/sladzdadadady.jpg?ex=67a5c6b7&is=67a47537&hm=11aa7792f10c5280089177357a35b10a247a3d2bf68b074f40e34464edd7ce9f&";
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