import React, { useState } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import MediaProduction from '../../Assets/Images/Media Production.png';
import OnlineSolutions from '../../Assets/Images/Online Solutions.png';
import MarketingServices from '../../Assets/Images/Marketing Services.png';
import PublicRelationsServices from '../../Assets/Images/Public Relations Services.png';
import DubbingSubtitling from '../../Assets/Images/Dubbing Subtitling.png';
import Subtitling from '../../Assets/Images/Sub.png';
import ServicesNewCard from "./ServicesNewCard";
import SubServiceCard from "./SubServiceCard";


// Marketing images
import dDesign from '../../Assets/Images/MarketingService/2dDesign.svg';
import BothsMockups from '../../Assets/Images/MarketingService/BothsMockups.svg';
import Branding from '../../Assets/Images/MarketingService/Branding.svg';
import ConceptStore from '../../Assets/Images/MarketingService/ConceptStore.svg';
import GiveAways from '../../Assets/Images/MarketingService/GiveAways.svg';
import InternalBranding from '../../Assets/Images/MarketingService/InternalBranding.svg';
import OutDoors from '../../Assets/Images/MarketingService/OutDoors.svg';
import Photography from '../../Assets/Images/MarketingService/Photography.svg';
import PrintingPublishing from '../../Assets/Images/MarketingService/Printing & Publishing.svg';
import Comaigns from '../../Assets/Images/MarketingService/Comaigns.svg';
import SelectedSubServiceSection from "./SelectedSubServiceSection";


import MaindDesign from '../../Assets/Images/MarketingService/2DMainImge.jpg';
import MainBothsMockups from '../../Assets/Images/MarketingService/MockMainImage.jpg';
import MainBranding from '../../Assets/Images/MarketingService/BrandingMainImage.jpg';
import MainConceptStore from '../../Assets/Images/MarketingService/ConceptMainImage.jpg';
import MainGiveAways from '../../Assets/Images/MarketingService/GiveAwaysMainImage.jpg';
import MainInternalBranding from '../../Assets/Images/MarketingService/InternalMainImage.jpg';
import MainOutDoors from '../../Assets/Images/MarketingService/OutDoorMainImage.jpg';
import MainPhotography from '../../Assets/Images/MarketingService/PhotographyMainImage.jpg';
import MainPrintingPublishing from '../../Assets/Images/MarketingService/PrintingMainImage.png';
import MainComaigns from '../../Assets/Images/MarketingService/ComaignsMainImage.jpg';
// end marketing images
import WorkSampleImage from '../../Assets/Images/MarketingService/WorkSampleImage.jpg'
import WorkSampleImage2 from '../../Assets/Images/MarketingService/WorkSampleImage2.jpg'
import WorkSampleImage3 from '../../Assets/Images/MarketingService/WorkSampleImage3.jpg'
import WorkSampleImage4 from '../../Assets/Images/MarketingService/WorkSampleImage4.jpg'
import WorkSampleImage5 from '../../Assets/Images/MarketingService/WorkSampleImage5.jpg'
import WorkSampleImage6 from '../../Assets/Images/MarketingService/WorkSampleImage6.jpg'
import Gallery from "./Gallery";

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1300 },
        items: 5
    },
    ipad: {
        breakpoint: { max: 1300, min: 990 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 990, min: 768 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 768, min: 446 },
        items: 2
    },
    smobile: {
        breakpoint: { max: 446, min: 350 },
        items: 1
    },
    ssmobile: {
        breakpoint: { max: 350, min: 328 },
        items: 1
    },
    xsmobile: {
        breakpoint: { max: 328, min: 0 },
        items: 1
    }
};


const responsive2 = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1300 },
        items: 5
    },
    ipad: {
        breakpoint: { max: 1300, min: 990 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 990, min: 768 },
        items: 4
    },
    mobile: {
        breakpoint: { max: 768, min: 576 },
        items: 3
    },
    smobile: {
        breakpoint: { max: 576, min: 350 },
        items: 2
    },
    ssmobile: {
        breakpoint: { max: 350, min: 328 },
        items: 2
    },
    xsmobile: {
        breakpoint: { max: 328, min: 0 },
        items: 2
    }
};

const CustomPrevButton = ({ onClick, Class }) => (
    <button className={`Center CustomPrevBtn ${Class}`} onClick={onClick}>
        <FontAwesomeIcon icon={faChevronLeft} />
    </button>
);

const CustomNextButton = ({ onClick, Class }) => (
    <button className={`Center CustomNextBtn ${Class}`} onClick={onClick}>
        <FontAwesomeIcon icon={faChevronRight} />
    </button>
);

const ServicesFirstSection = () => {
    const [selectedService, setSelectedService] = useState(1);
    const [selectedSubService, setSelectedSubService] = useState(null);
    const [selectedSubServiceData, setSelectedSubServiceData] = useState(null);

    const Services = [
        { id: 1, icon: MediaProduction, Header: "Media Production" },
        { id: 2, icon: OnlineSolutions, Header: "Online Solutions" },
        { id: 3, icon: Subtitling, Header: "Dubbing & Subtitling" },
        { id: 4, icon: DubbingSubtitling, Header: "Dubbing & Subtitling" },
        { id: 5, icon: PublicRelationsServices, Header: "Public Relations Services" },
        { id: 6, icon: MarketingServices, Header: "Marketing Services" }
    ];
    const SubServices = [
        {   
            id: 1, 
            title:"2D & 3D Design",       
            description:"Our team have been producing high quality commercial illustrations? motion graphics and character design and regularly work with some of the largest advertising agencies and brands in the world. We can manage every aspect of your project and view each job with equal importance? no matter how small. we think attention to detail and our ability to combine cutting edge ?3D illustration.", 
            MainImage:MaindDesign, 
            image: dDesign, 
            serviceId: 6 ,
            Gallery:[]
        },
        {   
            id: 2, 
            title:"Booths & Mockups",     
            description:"We provide a complete design, production and management service. Our aim is to provide world-class exhibition solutions and maximize the effectiveness on the fairground. Our experience to work with high quality specifications, using high skilled workforce, excellent design development, expertise with careful attention to detail.", 
            MainImage:MainBothsMockups, 
            image: BothsMockups, 
            serviceId: 6 ,
            Gallery:[]


        },
        {   id: 3, 
            title:"Branding",             
            description:"A brand is the idea or image of a specific product or service that consumers connect with? by identifying the name? logo? slogan? or design of the company who owns the idea or image.", 
            MainImage:MainBranding, 
            image: Branding, 
            serviceId: 6 ,
            Gallery:[]
        },
        {   id: 4, 
            title:'Concept Stores',       
            description:"A concept store offers shoppers multiple types of items with one centralized theme. All the products in a concept store add to the theme of the establishment, even though they might be different categories altogether. For example, shoes, shirts and furniture in a beach concept store contribute to the theme.",
             MainImage:MainConceptStore, 
             image: ConceptStore, 
             serviceId: 6 ,
             Gallery:[]
            },
        {   
            id: 5, 
            title:'Giveaways',            
            description:"We will help your company standout by providing you with our new giveaways ideas in stock or we will tailor the giveaways that will suit your company branding, wither you have an exhibition, marketing campaign or an activation, we will provide you with the giveaways you want.", 
            MainImage:MainGiveAways, 
            image: GiveAways, 
            serviceId: 6,
            Gallery:[]
         },
        {   
            id: 6, 
            title:"Internal Branding",    
            description:"Internal branding is a corporate philosophy that focuses on bringing the company’s core culture, identity, and premise to its employees as well as its consumers, and usually looks to make workers at all levels “ambassadors” or true representatives of the company and its ideals. Most people are familiar with external branding, which can include things like logos, slogans, and the general “feel” of a product or company.", 
            MainImage:MainInternalBranding, 
            image: InternalBranding, 
            serviceId: 6,
            Gallery:[]
         },
        {   id: 7,
            title:"Outdoors & Signage",    
            description:"MIND encompasses the vast array of outdoor media available to marketers and advertisers, strategically planned and positioned to reach the right target audience in the right place at the right time, when they are outdoors. Small, large and interactive outdoor advertising formats offer high impact solutions to reach your audience demographicly.",
            MainImage:MainOutDoors, 
            image: OutDoors,
            serviceId: 6 ,
            Gallery:[]
        },
        {   id: 8, 
            title:"Photography",          
            description:"When we select our photographers we ensure they have the skills to be outstanding ambassadors for your organization.They know when to add value to an event and when to fade into the background. We select our photographers based not only on their technical skills and adherence to detail but also upon their ability to positively interact with your staff and clients.", 
            MainImage:MainPhotography, 
            image: Photography, 
            serviceId: 6 ,
            Gallery:[]
        },
        {   id: 9,
            title:"Printing & Publishing", 
            description:"We aim to deliver your ideas into reality as you experience the luxury of high quality printed materials and reliable staff with affordable prices.",
            MainImage:MainPrintingPublishing, 
            image: PrintingPublishing, 
            serviceId: 6 ,
            
            Gallery:[WorkSampleImage,WorkSampleImage2,WorkSampleImage3,WorkSampleImage4,WorkSampleImage5,WorkSampleImage6],
            AfterShowText:'At MIND we will implement quality procedure at every stage.From the inception of design to delivery, making sure your brand and ideas will be red and understood.',
        },
        {   
            id: 10,
            title:"Marketing Campaigns",  
            description:"Specific activities designed to promote a product, service or business. A marketing campaign is a coordinated series of steps that can include promotion of a product through different mediums (television, radio, print, online, outdoors…ext.) using a variety of different types of advertisements. The campaign doesn’t have to rely solely on advertising, and can also include demonstrations, word of mouth and other interactive techniques. Marketing campaigns can be designed with different ends in mind, including building a brand image, introducing a new product, increasing sales of a product already in the market, or even reducing the impact of negative news.", 
            MainImage:MainComaigns, 
            image: Comaigns, 
            serviceId: 6 ,
            Gallery:[]
        },
        {   
            id: 11, 
            title:"Info-graphic Videos",       
            description:"Our team have been producing high quality commercial illustrations? motion graphics and character design and regularly work with some of the largest advertising agencies and brands in the world. We can manage every aspect of your project and view each job with equal importance? no matter how small. we think attention to detail and our ability to combine cutting edge ?3D illustration.", 
            MainImage:MaindDesign, 
            image: dDesign, 
            serviceId: 6 ,
            Gallery:[]
        },
    ]

    const handleOnSelect = (id) => {
        setSelectedService(id);
        setSelectedService(id);
        const subs = SubServices.filter(i => i.serviceId === id);
        if (subs.length > 0) {
            setSelectedSubService(subs[0].id);
            setSelectedSubServiceData(subs[0]);

        } else {
            setSelectedSubService(null);
        }
    };
    const handleSelectSubService = (id)=>{
        setSelectedSubService(id);
        const sub = SubServices.find(i => i.id === id);
        
        setSelectedSubServiceData(sub);
    }


    return (
        <section className="ServicesFirstSection">
            <div className="FirstServicesSectionHeader">
                <div className="ServicesHeadingContainer">
                    <span className="HeaderServices">Our Services</span>
                    <div className="UnderLineServices"></div>
                    <span className="AfterLineText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</span>
                </div>
                <div className="container">
                    <div className="slider-container ServicesSlider">
                        <Carousel
                            responsive={responsive}
                            infinite={false}
                            autoPlay={false}
                            autoPlaySpeed={2000}
                            draggable={true}
                            customLeftArrow={<CustomPrevButton Class="" />}
                            customRightArrow={<CustomNextButton Class="" />}
                        >
                            {Services.map((service) => (
                                <div className="SerciceCardContainer SerciceNewCardContainer" key={service.id}>
                                    <ServicesNewCard
                                        id={service.id}
                                        icon={service.icon}
                                        Header={service.Header}
                                        IsSelected={selectedService === service.id}
                                        onSelect={handleOnSelect}
                                    />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>


                <div className="container CustomContainer">
                    <div className="slider-container ServicesSlider">
                        <Carousel
                            responsive={responsive2}
                            infinite={false}
                            autoPlay={false}
                            autoPlaySpeed={2000}
                            arrows={false}
                            draggable={true}
                            customLeftArrow={<CustomPrevButton Class="" />}
                            customRightArrow={<CustomNextButton Class="" />}
                        >
                            {SubServices.filter(s=>s.serviceId==selectedService).map((service) => (
                                <div className="SerciceCardContainer SerciceNewCardContainer" key={service.id}>
                                    <SubServiceCard

                                        id={service.id}
                                        image={service.image}
                                        title={service.title}
                                        IsSelected={selectedSubService === service.id}
                                        onSelect={handleSelectSubService}
                                    />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
                {console.log(selectedSubServiceData)}
                {selectedSubServiceData&&
                    
                    <SelectedSubServiceSection 
                        id={selectedSubServiceData.id}
                        Header={selectedSubServiceData.title}
                        MainImage={selectedSubServiceData.MainImage}
                        description={selectedSubServiceData.description}
                    />
                }
                
            </div>
            
            {selectedSubServiceData && selectedSubServiceData.Gallery && selectedSubServiceData.Gallery.length > 0 &&
                <Gallery 
                    AfterShowText={selectedSubServiceData.AfterShowText}
                    Images={selectedSubServiceData.Gallery}
                />
            }

            

               

        </section>
    );
};

export default ServicesFirstSection;
