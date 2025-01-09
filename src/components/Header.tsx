import "../assets/styles/scss/components/_Header.scss";
import { HomeIcon, NotificationIcon, ProfileIcon, RadarIcon, SearchIcon, SlayderIcon} from '../utils/svgComponents';


function Header() {
    return (
        <header className="page-header">
            <nav>
                <ul>
                <li>
                    <HomeIcon />
                    <p>Accueil</p>
                </li>
                <li>
                    <RadarIcon />
                    <p>Radar</p>
                </li>
                <li>
                    <SearchIcon />
                    <p>Recherche</p>
                </li>
                <li>
                    <SlayderIcon />
                    <p>Slayder</p>
                </li>
                <li>
                    <NotificationIcon />
                    <p>Notifs</p>
                </li>
                <li>
                    <ProfileIcon />
                    <p>Profil</p>
                </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header