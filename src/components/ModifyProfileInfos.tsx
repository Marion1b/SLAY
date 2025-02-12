import "../assets/styles/scss/components/_ModifyProfileInfos.scss"
import ProfileBiography from "../components/ProfileBiography";
import Edit from "../assets/images/iconsSVG/Edit.svg?react";
import PinPoint from "../assets/images/iconsSVG/PinPoint.svg?react";
import ModalModifyProfile from "../components/ModalModifyProfile";
import { useState } from "react";
import profileImage from "../assets/images/default/profileImage.jpg";

interface WrapperProps {
    name: string|null;
    city: string;
    country: string;
    pronouns: string|null;
    avatar: string|null;
}

function ModifyProfileInfos(props: WrapperProps) {
    const [isOpenUserInfos, setIsOpenUserInfos] = useState<boolean>(false);
    let avatar: string = profileImage;
    if(typeof props.avatar === "string" && props.avatar !== "null"){
        avatar= props.avatar;
    }
    return (
        <section className="modify-profile-infos">
            <img src={avatar} alt="Photo de profil" />
            <div>
                <div className="modify-profile-edit-info-container">
                    <div>
                        <p className="profile-name">{props.name} {props.pronouns!=="null" && `(${props.pronouns})`}</p>
                        <div className="modify-profile-location-container">
                            <PinPoint />
                            <p className="profile-location">{props.city}, {props.country}</p>
                        </div>
                    </div>
                    <button className="edit-button" onClick={()=>setIsOpenUserInfos(true)}><Edit /></button>
                </div>
                <p>Biographie</p>
                <ProfileBiography className="profile-biography-modify-profile"/>
            </div>

            {isOpenUserInfos && <ModalModifyProfile name="user-infos" value="" setIsOpen={setIsOpenUserInfos} />}
        </section>
    )
}
  
export default ModifyProfileInfos