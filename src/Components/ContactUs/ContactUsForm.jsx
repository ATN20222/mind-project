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

            <div className="container CustomContainer Map">

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.072498703366!2d31.339196699999995!3d30.063456299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e6c2886d001%3A0xca2ebc46058d8cf4!2s8%20Mohammed%20Tawfik%20Diab%2C%20Al%20Mintaqah%20as%20S%C4%81disah%2C%20Nasr%20City%2C%20Cairo%20Governorate%204450332!5e0!3m2!1sen!2seg!4v1723618408987!5m2!1sen!2seg" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>



        </section>
    );
}
export default ContactUsForm;