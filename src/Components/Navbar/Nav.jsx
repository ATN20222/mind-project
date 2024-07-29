import React from "react";
import './Nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot, faPhone} from '@fortawesome/free-solid-svg-icons';
import Logo from '../../Assets/Images/Logo.png'
const Nav = ()=>{
    return(
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
            <div className="MainNav">
                <div className="container">
                    <div className="row NavRow">
                        <div className="col-lg-2 col-md-2">
                            <div className="LogoContainer">
                                <img src={Logo} width="131px" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-12 LinksNav">
                            <ul className="list-list-unstyled">
                                <li className="list-inline-item ActiveLink">Home</li>
                                <li className="list-inline-item">About us</li>
                                <li className="list-inline-item">Services</li>
                                <li className="list-inline-item">Solution</li>
                                <li className="list-inline-item">News</li>
                                <li className="list-inline-item">Clients</li>
                                <li className="list-inline-item">Careers</li>
                                <li className="list-inline-item">
                                    <button className="btn btn-danger NavContactBtn">Contact us</button>
                                </li>
                            </ul>
                        </div>
                         
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Nav;