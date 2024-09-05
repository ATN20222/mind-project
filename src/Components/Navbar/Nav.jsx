import React, { useEffect, useState } from "react";
import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faLocationDot, faPhone, faTimes } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../Assets/Images/Logo.png';
import { NavLink } from "react-router-dom";

const Nav = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

        useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                
                setIsSticky(false);
            }
            setIsMenuOpen(false);
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <section>
            {/* <div className="TopNav">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 TopNavCol">
                           <div className="NavLocation">
                                <span>Address</span>
                                <div className="AddressNav">
                                    <FontAwesomeIcon icon={faLocationDot}/>  8 Mohammed Tawfik Diab, Nasr City, Cairo, Egypt.
                                </div>
                           </div>
                           <div className="NavCallUs">
                                <span>Call us</span>
                                <div className="AddressNav">
                                    <FontAwesomeIcon icon={faPhone}/> <span className="PhoneNumber">(+02)22746241</span> 
                                </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className={`MainNav ${isSticky ? 'sticky' : ''}`}>
                <div className="container">
                    <div className="row NavRow">
                        <div className="col-lg-2 col-md-2 col-2">
                            <div className="LogoContainer">
                                <img src={Logo} width="131px" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-12 LinksNav">
                            <ul className="list-list-unstyled">
                                <li className="list-inline-item">
                                    <NavLink
                                        className={({ isActive }) => isActive ? "Nav-Link ActiveLink" : "Nav-Link"}
                                        to="/home"
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li className="list-inline-item">
                                    <NavLink
                                        className={({ isActive }) => isActive ? "Nav-Link ActiveLink" : "Nav-Link"}
                                        to="/about"
                                    >
                                        About us
                                    </NavLink>
                                </li>
                                <li className="list-inline-item">
                                    <NavLink
                                        className={({ isActive }) => isActive ? "Nav-Link ActiveLink" : "Nav-Link"}
                                        to="/services"
                                    >
                                        Services
                                    </NavLink>
                                </li>
                                <li className="list-inline-item">
                                    <NavLink
                                        className={({ isActive }) => isActive ? "Nav-Link ActiveLink" : "Nav-Link"}
                                        to="/solutions"
                                    >
                                        Solutions
                                    </NavLink>
                                </li>
                                <li className="list-inline-item">
                                    <NavLink
                                        className={({ isActive }) => isActive ? "Nav-Link ActiveLink" : "Nav-Link"}
                                        to="/news"
                                    >
                                        News
                                    </NavLink>
                                </li>
                                <li className="list-inline-item">
                                    <NavLink
                                        className={({ isActive }) => isActive ? "Nav-Link ActiveLink" : "Nav-Link"}
                                        to="/clients"
                                    >
                                        Clients
                                    </NavLink>
                                </li>
                                <li className="list-inline-item">
                                    <NavLink
                                        className={({ isActive }) => isActive ? "Nav-Link ActiveLink" : "Nav-Link"}
                                        to="/careers"
                                    >
                                        Careers
                                    </NavLink>
                                </li>
                                <li className="list-inline-item">
                                    <NavLink className="btn btn-danger NavContactBtn" to="/contactus">
                                    Contact us
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="MenuButtonCol col-md-1 col-1 d-md-none Center">
                            <button className="MenuButton" onClick={toggleMenu}>
                                <FontAwesomeIcon icon={faBars} />
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            <div className={`OverlayMenu ${isMenuOpen ? 'open' : ''}`}>
                <button className="CloseButton" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
                <ul className="OverlayLinks">
                    <li>
                        <NavLink to="/home" onClick={toggleMenu}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" onClick={toggleMenu}>About Us</NavLink>
                    </li>
                    <li>
                        <NavLink to="/services" onClick={toggleMenu}>Services</NavLink>
                    </li>
                    <li>
                        <NavLink to="/solutions" onClick={toggleMenu}>Solutions</NavLink>
                    </li>
                    <li>
                        <NavLink to="/news" onClick={toggleMenu}>News</NavLink>
                    </li>
                    <li>
                        <NavLink to="/clients" onClick={toggleMenu}>Clients</NavLink>
                    </li>
                    <li>
                        <NavLink to="/careers" onClick={toggleMenu}>Careers</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contactus" onClick={toggleMenu}>Contact Us</NavLink>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Nav;
