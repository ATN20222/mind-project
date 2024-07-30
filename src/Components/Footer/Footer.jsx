import React from "react";
import './Footer.css'
import Logo from '../../Assets/Images/Logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn, faTiktok, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
const Footer = ()=>{
    return( 
        <section className="FooterSection">
                <div className="container">
                <footer>
                    <div className="container">
                    <div className="row FooterRow">
                            <div className="col-lg-3 FooterCol">
                                <div className="Footerlogo">
                                    <img src={Logo} width="130px" alt="" />

                                </div>
                                <span className="FooterLogoText">
                                     MIND provides complete solutions for your Marketing, Advertising and PR needs. We created MIND to add to your business’s success, internally and with.....<span className="ReadMoreFooter">Read more</span>
                                </span>
                            </div>
                            <div className="col-lg-4 FooterCol">
                                <span className="FooterEventsTitle">News & Events</span>
                                <div className="FooterEventsItem">
                                    <span>
                                        Our latest Marketing & Social Media Solutions for Kiddy Corner
                                    </span>    
                                </div>
                                <div className="FooterEventsItem">
                                    <span>


                                        Coverage Of Kiddy Corner’s Graduation Party 
                                    </span>
                                </div>
                                <div className="FooterEventsItem">
                                    <span>
                                        Our Latest E-Commerce Solution
                                    </span>
                                </div>
                            </div>
                            <div className="col-lg-3 FooterCol">
                                <span className="FooterContactTitle">Contact info</span>
                                <div className="FooterContactItem">
                                    <b>Adress: </b><span>8 Mohammed Tawfik Diab, Nasr City, Cairo, Egypt.</span>
                                </div>
                                <div className="FooterContactItem">
                                    <b>Phone: </b><span>(+02) 22746241</span>
                                </div>
                                <div className="FooterContactItem">
                                    <b>Dubai WhatsApp: </b><span>(+971) 503365403</span>
                                </div>
                                <div className="FooterContactItem">
                                    <b>Email: </b><span>info@mindholding.net</span>
                                </div>

                             
                            </div>
                        </div>
                    </div>
                       
                </footer>
                    <div className="row PrivacyRow">
                        <div className="col-lg-9 PrivacyCol">©MIND for Information Technology & Media. All Rights Reserved.</div>
                        <div className="col-lg-3 PrivacyCol">
                            <div className="FooterSocial">
                                <a className="FooterIcon" href="">
                                <FontAwesomeIcon icon={faFacebookF} />
                                </a>
                                <a className="FooterIcon" href="">
                                <FontAwesomeIcon icon={faXTwitter} />
                                </a>
                                <a className="FooterIcon" href="">
                                <FontAwesomeIcon icon={faInstagram} />
                                </a>
                                <a className="FooterIcon" href="">
                                <FontAwesomeIcon icon={faTiktok} />
                                </a>
                                <a className="FooterIcon" href="">
                                <FontAwesomeIcon icon={faYoutube} />
                                </a>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
        </section>
    );
}
export default Footer;