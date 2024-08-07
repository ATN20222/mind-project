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
        {  id: 1, title:"2D & 3D Design",       MainImage:MaindDesign, image: dDesign, serviceId: 6 },
        {  id: 2, title:"Booths & Mockups",     MainImage:MainBothsMockups, image: BothsMockups, serviceId: 6 },
        {  id: 3, title:"Branding",             MainImage:MainBranding, image: Branding, serviceId: 6 },
        {  id: 4, title:'Concept Stores',       MainImage:MainConceptStore, image: ConceptStore, serviceId: 6 },
        {  id: 5, title:'Giveaways',            MainImage:MainGiveAways, image: GiveAways, serviceId: 6 },
        {  id: 6, title:"Internal Branding",    MainImage:MainInternalBranding, image: InternalBranding, serviceId: 6 },
        {  id: 7,title:"Outdoors & Signage",    MainImage:MainOutDoors, image: OutDoors, serviceId: 6 },
        {  id: 8, title:"Photography",          MainImage:MainPhotography, image: Photography, serviceId: 6 },
        {  id: 9,title:"Printing & Publishing", MainImage:MainPrintingPublishing, image: PrintingPublishing, serviceId: 6 },
        {  id: 10,title:"Marketing Campaigns",  MainImage:MainComaigns, image: Comaigns, serviceId: 6 },
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
                {selectedSubServiceData&&
                    <SelectedSubServiceSection 
                    id={selectedSubServiceData.id}
                    Header={selectedSubServiceData.title}
                    MainImage={selectedSubServiceData.MainImage}
                    />
                }
                
            </div>
        </section>
    );
};

export default ServicesFirstSection;
