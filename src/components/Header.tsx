/// <reference types="vite-plugin-svgr/client" />

import "../assets/styles/scss/components/_Header.scss";
import HomeIcon from "../assets/images/iconsSVG/Home.svg?react";
import RadarIcon from "../assets/images/iconsSVG/Radar.svg?react";
import SearchIcon from "../assets/images/iconsSVG/Search.svg?react";
import SlayderIcon from "../assets/images/iconsSVG/Add.svg?react";
import NotificationIcon from "../assets/images/iconsSVG/Notif.svg?react";
import ProfileIcon from "../assets/images/iconsSVG/Profile.svg?react";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="page-header">
            <p className="page-header-logo">SLAY</p>
            <nav className="page-header-nav">
                <ul>
                <li>
                    <Link to="/">
                        <HomeIcon />
                        <p>Accueil</p>
                    </Link>
                </li>
                {/** Pas dans la V1  
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
                */}
                <li>
                    <Link to="/profil">
                        <ProfileIcon />
                        <p>Profil</p>
                    </Link>
                </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header