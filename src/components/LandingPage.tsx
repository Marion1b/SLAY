import "../assets/styles/scss/components/_LandingPage.scss";
import ChevronDown from "../assets/images/icons/ChevronDown.svg?react";

function LandingPage() {
    return (
        <section className="landing-page" >
            <h1>SLAY</h1>
            <p className="subtitle">Partagez vos créations musicales, découvrez de nouveaux sons et rencontrez d'autres artistes.</p>
            <div>
                <p>Découvrir</p>
                <ChevronDown />
            </div>
        </section>
    )
}

export default LandingPage