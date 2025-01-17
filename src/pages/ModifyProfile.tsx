import ModalModifyProfile from "../components/ModalModifyProfile";
import { useState } from "react";

function ModifyProfile() {
    const [isOpenUserInfos, setIsOpenUserInfos] = useState<boolean>(false);
    const [isOpenUser, setIsOpenUser] = useState<boolean>(false);
    const [isOpenEmail, setIsOpenEmail] = useState<boolean>(false);
    const [isOpenPassword, setIsOpenPassword] = useState<boolean>(false);

    return (
        <>
            <h1>MODIFIER MON PROFIL</h1>

            <button onClick={()=>setIsOpenUserInfos(true)}>user infos</button>
            <button onClick={()=>setIsOpenUser(true)}>type of user</button>
            <button onClick={()=>setIsOpenEmail(true)}>email</button>
            <button onClick={()=>setIsOpenPassword(true)}>password</button>
            {isOpenUserInfos && <ModalModifyProfile name="user-infos" value="" setIsOpen={setIsOpenUserInfos} />}
            {isOpenUser && <ModalModifyProfile name="type-of-user" value="" setIsOpen={setIsOpenUser} />}
            {isOpenEmail && <ModalModifyProfile name="email" value="amy-la-chipie@yahoo.fr" setIsOpen={setIsOpenEmail}/>}
            {isOpenPassword && <ModalModifyProfile name="password" value="Azerazerazer12!" setIsOpen={setIsOpenPassword} />}
        </>
    )
}

export default ModifyProfile