import homeImg from "../assets/images/Icons/Home.svg";
import radarImg from "../assets/images/Icons/Radar.svg";
import searchImg from "../assets/images/Icons/Search.svg";
import addImg from "../assets/images/Icons/Add.svg";
import notifImg from "../assets/images/Icons/Notif.svg";
import profileImg from "../assets/images/Icons/Profile.svg";
import "../assets/styles/scss/components/_Header.scss";
import Searchbar from "./Searchbar";

function Header() {
return (
        <header className="page-header">
            <p className="page-header-logo">Logo</p>
            <nav className="page-header-nav">
                <ul>
                    <li><a href="/"><img src={homeImg} alt="icone page d'accueil" />Accueil</a></li>
                    <li><a href="/radar"><img src={radarImg} alt="icone page radar"/>Radar</a></li>
                    <li className="search-mobile"><a href="/recherche"><img src={searchImg} alt="icone page recherche"/>Recherche</a></li>
                    <li><a href="/slayder"><img src={addImg} alt="icone page slayder"/>Slayder</a></li>
                    <li><a href="/notifications"><img src={notifImg} alt="icone page notifications"/>Notif</a></li>
                    <li><a href="/mon-profil"><img src={profileImg} alt="icone page de profil"/>Profil</a></li>
                </ul>
            </nav>
            <img className="search-desktop" src={searchImg} alt="icône de recherche, cliquer dessus pour ouvrir le barre de recherche"/>
            <Searchbar />
        </header>
    )
}

export default Header