import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
const ContactUsForm = ()=>{
    return(
        <section className="ContactUsFormSection"> 
            <div className="container CustomContainer">
                <div className="SendMessageHeader">
                    <span>Send a message</span>
                </div>

                <div className="container FormContainer">
                    <div className="row">
                        
                        <div className="col-lg-6 ContactLeftCol">
                            <div className="ContactDataContainer">

                                <div className="ContactData">
                                    <div className="ContactDataItem">
                                        <div className="ContactDataItemHeader">
                                            <span>Office Address</span>
                                        </div>
                                        <div className="ContactDataItemContent">
                                            <div className="ContactDataIconContainer">
                                                <FontAwesomeIcon icon={faLocationDot}/>
                                            </div>
                                            <div className="ContactDataText">8 Mohammed Tawfik Diab, Nasr City, Cairo, Egypt.</div>
                                        </div>
                                    

                                    </div>


                                </div>
                                <hr />
                                
                                <div className="ContactData">
                                    <div className="ContactDataItem">
                                        <div className="ContactDataItemHeader">
                                            <span>Phone Number</span>
                                        </div>
                                        <div className="ContactDataItemContent">
                                            <div className="ContactDataIconContainer">
                                                <FontAwesomeIcon icon={faPhone}/>
                                            </div>
                                            <div className="ContactDataText">
                                            Phone: (+02) 22746241
                                            <br />
                                            Dubai WhatsApp: (+971) 503365403
                                            </div>
                                        </div>
                                    

                                    </div>


                                </div>
                                <hr />
                                
                                <div className="ContactData">
                                    <div className="ContactDataItem">
                                        <div className="ContactDataItemHeader">
                                            <span>Email Us</span>
                                        </div>
                                        <div className="ContactDataItemContent">
                                            <div className="ContactDataIconContainer">
                                                <FontAwesomeIcon icon={faEnvelope}/>
                                            </div>
                                            <div className="ContactDataText">info@mindholding.net</div>
                                        </div>
                                    

                                    </div>


                                </div>
                            </div>

                        </div>
                        <div className="col-lg-6 ContactFormCol">
                            <div className="ContactInput">
                                <label htmlFor="Name">
                                    <span>Your Name</span>
                                    <input type="text" name="" placeholder="Enter your name" id="Name" />
                                </label>
                            </div>

                            <div className="ContactInput">
                                <label htmlFor="Email">
                                    <span>Your Email</span>
                                    <input type="text" name="" placeholder="Enter your email address" id="Email" />
                                </label>
                            </div>

                            <div className="ContactInput">
                                <label htmlFor="Phone">
                                    <span>Your Phone</span>
                                    <input type="number" name="" placeholder="Enter your phone number" id="Phone" />
                                </label>
                            </div>

                            <div className="ContactInput">
                                <label htmlFor="Subject">
                                    <span>Your Subject</span>
                                    <input type="text" name="" placeholder="Enter your subject" id="Subject" />
                                </label>
                            </div>

                            <div className="ContactInput">
                                <label htmlFor="Message">
                                    <span>Your Message</span>
                                    <textarea type="text" name="" placeholder="Enter your message" id="Message" />
                                </label>
                            </div>
                            <div className="SubmitForm">
                                <button className="btn btn-danger NavContactBtn" to="/contactus">
                                        Submit Now
                                </button>
                            </div>
                            

                        </div>
                    </div>
                    
                </div>
            </div>




        </section>
    );
}
export default ContactUsForm;