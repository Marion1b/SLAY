import "../assets/styles/scss/components/_ModifyProfileInfos.scss"
import ProfileBiography from "../components/ProfileBiography";
import Edit from "../assets/images/icons/Edit.svg?react";
import PinPoint from "../assets/images/icons/PinPoint.svg?react";

interface WrapperProps {
    name: string;
    city: string;
    country: string;
    pronouns: string;
}

function ModifyProfileInfos(props: WrapperProps) {
    return (
        <section className="modify-profile-infos">
            <img src="./src/assets/images/test/Antoine_Daniel.jpg" alt="Photo de profil de Antoine Daniel" />
            <div className="modify-profile-edit-info-container">
                <div>
                    <p className="profile-name">{props.name} ({props.pronouns})</p>
                    <div className="modify-profile-location-container">
                        <PinPoint />
                        <p className="profile-location">{props.city}, {props.country}</p>
                    </div>
                </div>
                <Edit />
            </div>
            <p>Biographie</p>
            <ProfileBiography className="profile-biography-modify-profile"/>
        </section>
    )
}
  
export default ModifyProfileInfos