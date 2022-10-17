import React from "react";
import rimacLogo from "../assets/rimac.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import "../styles/Header.scss";

const Header = () => {
    return (
        <div className="header">
            <nav className="container">
                <div className="header__logo">
                    <img src={rimacLogo} alt="logo rimac" />
                </div>

                <div className="header__right">
                    <Link to='/' className="paragraph reg-12 f-reboto gray2-hover hide-for-mobile">¿Tienes alguna duda?</Link>

                    <Link to='/' className="phone-link paragraph reg-14 f-reboto purple-hover hide-for-mobile">
                        <FontAwesomeIcon icon={faPhone} />
                        <div>(01) 411 6001</div>
                    </Link>

                    <Link to='/' className="phone-link paragraph reg-14 f-reboto purple-hover hide-for-desktop">
                        <FontAwesomeIcon icon={faPhone} />
                        <div>Llámanos</div>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Header