import "../assets/styles/scss/components/_ModifyProfileInfos.scss"
import ProfileBiography from "../components/ProfileBiography";
import Edit from "../assets/images/iconsSVG/Edit.svg?react";
import PinPoint from "../assets/images/iconsSVG/PinPoint.svg?react";
import ModalModifyProfile from "../components/ModalModifyProfile";
import { useState } from "react";

interface WrapperProps {
    name: string;
    city: string;
    country: string;
    pronouns: string;
}

function ModifyProfileInfos(props: WrapperProps) {
    const [isOpenUserInfos, setIsOpenUserInfos] = useState<boolean>(false);
    return (
        <section className="modify-profile-infos">
            <img src="./src/assets/images/test/Antoine_Daniel.jpg" alt="Photo de profil de Antoine Daniel" />
            <div>
                <div className="modify-profile-edit-info-container">
                    <div>
                        <p className="profile-name">{props.name} ({props.pronouns})</p>
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