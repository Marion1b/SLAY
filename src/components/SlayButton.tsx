import UserPlus from "../assets/images/icons/UserPlus.svg?react";
import UserRemove from "../assets/images/icons/UserRemove.svg?react";
import "../assets/styles/scss/components/_SlayButton.scss";

interface WrapperProps{
    slay: boolean
}

function SlayButton(props: WrapperProps){
    if(props.slay === true){
        return(
            <button className="slay-button slay-button-remove">
                Unslay <UserRemove />
            </button>
        )
    }else{
        return(
            <button className="slay-button slay-button-plus">
                Slay <UserPlus />
            </button>
        )
    }
}

export default SlayButton;