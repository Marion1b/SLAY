import UserPlus from "../assets/images/iconsSVG/UserPlus.svg";
import UserRemove from "../assets/images/iconsSVG/UserRemove.svg";
import "../assets/styles/scss/components/_SlayButton.scss";
import { useState, useEffect } from "react";

interface WrapperProps{
    slay: boolean
}

function SlayButton(props: WrapperProps){
    const [slay, setSlay] = useState<boolean>(props.slay);
    useEffect(() => {
        setSlay(props.slay);
    }, [props.slay]);

    if(slay){
        return(
            <button className="slay-button slay-button-remove" onClick={() =>setSlay(!slay)}>
                Unslay <UserRemove />
            </button>
        )
    }else{
        return(
            <button className="slay-button slay-button-plus" onClick={() =>setSlay(!slay)}>
                Slay <UserPlus />
            </button>
        )
    }
}

export default SlayButton;