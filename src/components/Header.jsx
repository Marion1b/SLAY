import homeImg from "../assets/images/Icons/Home.svg";
import radarImg from "../assets/images/Icons/Radar.svg";
import searchImg from "../assets/images/Icons/Search.svg";
import addImg from "../assets/images/Icons/Add.svg";
import notifImg from "../assets/images/Icons/Notif.svg";
import profileImg from "../assets/images/Icons/Profile.svg";

function Header() {
return (
        <header className="page-header">
            <nav className="page-nav">
                <ul>
                    <li><a href="/"><img src={homeImg} alt="icone page d'accueil" />Accueil</a></li>
                    <li><a href="/radar"><img src={radarImg} alt="icone page radar"/>Radar</a></li>
                    <li><a href="/recherche"><img src={searchImg} alt="icone page recherche"/>Recherche</a></li>
                    <li><a href="/slayder"><img src={addImg} alt="icone page slayder"/>Slayder</a></li>
                    <li><a href="/notifications"><img src={notifImg} alt="icone page notifications"/>Notif</a></li>
                    <li><a href="/mon-profil"><img src={profileImg} alt="icone page de profil"/>Profil</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header