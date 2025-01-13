import "../assets/styles/scss/components/_NumberInfos.scss";
import { formatNumber } from "../utils/numberUtils";

interface WrapperProps{
    reposts : number;
    slayers : number;
    suivis : number;
}

function NumbersInfos(props:  WrapperProps){
    return(
        <article className="numbers-infos">
            <ul>
                <li>
                    <span className="numbers-infos-number">{formatNumber(props.reposts)}</span> <br/>
                    <span className="numbers-infos-label">reposts</span>
                </li>
                <li>
                    <span className="numbers-infos-number">{formatNumber(props.slayers)}</span> <br/>
                    <span className="numbers-infos-label">slayers</span>
                </li>
                <li>
                    <span className="numbers-infos-number">{formatNumber(props.suivis)}</span><br/>
                    <span className="numbers-infos-label">suivis</span>
                </li>
            </ul>
        </article>
    )
}

export default NumbersInfos;