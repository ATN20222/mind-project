import React from 'react';
import Carousel from 'react-multi-carousel';
import './ServiceSlider.css'
import 'react-multi-carousel/lib/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import BrandingIcon from '../../../Assets/Images/Branding.svg';
import MediaProduction from '../../../Assets/Images/Media Production.png';
import OnlineSolutions from '../../../Assets/Images/Online Solutions.png';
import MarketingServices from '../../../Assets/Images/Marketing Services.png';
import PublicRelationsServices from '../../../Assets/Images/Public Relations Services.png';
import DubbingSubtitling from '../../../Assets/Images/Dubbing Subtitling.png';
import Subtitling from '../../../Assets/Images/Sub.png';


// Marketing images
import dDesign from '../../../Assets/Images/MarketingService/2dDesign.svg';
import BothsMockups from '../../../Assets/Images/MarketingService/BothsMockups.svg';
import Branding from '../../../Assets/Images/MarketingService/Branding.svg';
import ConceptStore from '../../../Assets/Images/MarketingService/ConceptStore.svg';
import GiveAways from '../../../Assets/Images/MarketingService/GiveAways.svg';
import InternalBranding from '../../../Assets/Images/MarketingService/InternalBranding.svg';
import OutDoors from '../../../Assets/Images/MarketingService/OutDoors.svg';
import Photography from '../../../Assets/Images/MarketingService/Photography.svg';
import PrintingPublishing from '../../../Assets/Images/MarketingService/Printing & Publishing.svg';
import Comaigns from '../../../Assets/Images/MarketingService/Comaigns.svg';


import MaindDesign from '../../../Assets/Images/MarketingService/2DMainImge.jpg';
import MainBothsMockups from '../../../Assets/Images/MarketingService/MockMainImage.jpg';
import MainBranding from '../../../Assets/Images/MarketingService/BrandingMainImage.jpg';
import MainConceptStore from '../../../Assets/Images/MarketingService/ConceptMainImage.jpg';
import MainGiveAways from '../../../Assets/Images/MarketingService/GiveAwaysMainImage.jpg';
import MainInternalBranding from '../../../Assets/Images/MarketingService/InternalMainImage.jpg';
import MainOutDoors from '../../../Assets/Images/MarketingService/OutDoorMainImage.jpg';
import MainPhotography from '../../../Assets/Images/MarketingService/PhotographyMainImage.jpg';
import MainPrintingPublishing from '../../../Assets/Images/MarketingService/PrintingMainImage.png';
import MainComaigns from '../../../Assets/Images/MarketingService/ComaignsMainImage.jpg';
// end marketing images
import WorkSampleImage from '../../../Assets/Images/MarketingService/WorkSampleImage.jpg'
import WorkSampleImage2 from '../../../Assets/Images/MarketingService/WorkSampleImage2.jpg'
import WorkSampleImage3 from '../../../Assets/Images/MarketingService/WorkSampleImage3.jpg'
import WorkSampleImage4 from '../../../Assets/Images/MarketingService/WorkSampleImage4.jpg'
import WorkSampleImage5 from '../../../Assets/Images/MarketingService/WorkSampleImage5.jpg'
import WorkSampleImage6 from '../../../Assets/Images/MarketingService/WorkSampleImage6.jpg'


// media production images
import MediaProductiondocumentary from '../../../Assets/Images/Media Production/documentary.svg';
import MediaProductionInfographic from '../../../Assets/Images/Media Production/Infographic.svg';
import MediaProductionPost from '../../../Assets/Images/Media Production/Post.svg';
import MediaProductionTV from '../../../Assets/Images/Media Production/TV.svg';
import MediaProductionMainDocumentry from '../../../Assets/Images/Media Production/MainDocumentry.jfif';
import MediaProductionMainInfoGrphic from '../../../Assets/Images/Media Production/MainInfoGrphic.jfif';
import MediaProductionMainPost from '../../../Assets/Images/Media Production/MainPost.jfif';
import MediaProductionMainTV from '../../../Assets/Images/Media Production/MainTV.jfif';


// online solutions images 
import OnlineSolutionsMobile from '../../../Assets/Images/Online Solutions/Mobile.svg';
import OnlineSolutionsMobileMainImage from '../../../Assets/Images/Online Solutions/MobileMainImage.png';
import OnlineSolutionsSocial from '../../../Assets/Images/Online Solutions/Social.svg';
import OnlineSolutionsSocialMainImage from '../../../Assets/Images/Online Solutions/SocialMainImage.png';
import OnlineSolutionsWeb from '../../../Assets/Images/Online Solutions/Web.svg';
import OnlineSolutionsWebMainImage from '../../../Assets/Images/Online Solutions/WebMainImage.png';


// other services image 
import DubbingMainImage from '../../../Assets/Images/OtherServices/DubbingMainImage.jfif';
import ServicesCard from '../../Home/ServicesCard';

  const Services = [
    {id:1,icon:BrandingIcon , Header:"Branding", Description:"A brand is the idea or image of a specific product or service that consumers connect with?..."},
    {id:1,icon:BrandingIcon , Header:"Branding", Description:"A brand is the idea or image of a specific product or service that consumers connect with?..."},
    {id:1,icon:BrandingIcon , Header:"Branding", Description:"A brand is the idea or image of a specific product or service that consumers connect with?..."},
    {id:1,icon:BrandingIcon , Header:"Branding", Description:"A brand is the idea or image of a specific product or service that consumers connect with?..."},
    {id:1,icon:BrandingIcon , Header:"Branding", Description:"A brand is the idea or image of a specific product or service that consumers connect with?..."},
  
  ]

const responsive = {
    superLargeDesktop: {

      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    
    desktop: {
      breakpoint: { max: 3000, min: 1300 },
      items: 4
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
      items:2
    },
    smobile: {
      breakpoint: { max: 446, min: 350 },
      items:1
    },
    ssmobile: {
        breakpoint: { max: 350, min: 328 },
        items:1
      },
    xsmobile: {
      breakpoint: { max: 328, min: 0 },
      items: 1  
    }
  };

  const CustomPrevButton = ({ onClick , Class }) => (
    <button className={`Center CustomPrevBtn ${Class}`} onClick={onClick}>
        <FontAwesomeIcon icon={faChevronLeft}/>
    </button>
  );

  const CustomNextButton = ({ onClick , Class }) => (
    <button className={`Center CustomNextBtn ${Class}`} onClick={onClick}>
        <FontAwesomeIcon icon={faChevronRight}/>
    </button>
  );

  

function ServicesSlider() {

  const SubServices = [
    {   
        id: 1, 
        title: "2D & 3D Design",       
        description: "We create high-quality commercial illustrations, motion graphics, and character designs, working with top agencies and brands globally.", 
        MainImage: MaindDesign, 
        image: dDesign, 
        serviceId: 6,
        Gallery: []
    },
    {   
        id: 2, 
        title: "Booths & Mockups",     
        description: "We provide world-class exhibition designs, managing high-quality specifications with skilled workforce and detailed attention.", 
        MainImage: MainBothsMockups, 
        image: BothsMockups, 
        serviceId: 6,
        Gallery: []
    },
    {   
        id: 3, 
        title: "Branding",             
        description: "We create brand identities through logos, slogans, and designs that resonate with your target audience and market.", 
        MainImage: MainBranding, 
        image: Branding, 
        serviceId: 6,
        Gallery: []
    },
    {   
        id: 4, 
        title: "Concept Stores",       
        description: "Concept stores offer a unified shopping experience where all products align with a central theme or idea.", 
        MainImage: MainConceptStore, 
        image: ConceptStore, 
        serviceId: 6,
        Gallery: []
    },
    {   
        id: 5, 
        title: "Giveaways",            
        description: "We provide customized giveaways that align with your branding, perfect for exhibitions, campaigns, or activations.", 
        MainImage: MainGiveAways, 
        image: GiveAways, 
        serviceId: 6,
        Gallery: []
    },
    {   
        id: 6, 
        title: "Internal Branding",    
        description: "We focus on internal branding to turn employees into ambassadors, emphasizing company culture and identity.", 
        MainImage: MainInternalBranding, 
        image: InternalBranding, 
        serviceId: 6,
        Gallery: []
    },
    {   
        id: 7,
        title: "Outdoors & Signage",    
        description: "We plan and position outdoor media to reach target audiences effectively, offering high-impact advertising solutions.", 
        MainImage: MainOutDoors, 
        image: OutDoors, 
        serviceId: 6,
        Gallery: []
    },
    {   
        id: 8, 
        title: "Photography",          
        description: "Our photographers are skilled ambassadors who know when to enhance events and when to remain unobtrusive.", 
        MainImage: MainPhotography, 
        image: Photography, 
        serviceId: 6,
        Gallery: []
    },
    {   
        id: 9,
        title: "Printing & Publishing", 
        description: "We bring your ideas to life with high-quality printed materials, reliable staff, and affordable prices.", 
        MainImage: MainPrintingPublishing, 
        image: PrintingPublishing, 
        serviceId: 6,
        Gallery: [WorkSampleImage, WorkSampleImage2, WorkSampleImage3, WorkSampleImage4, WorkSampleImage5, WorkSampleImage6],
        AfterShowText: 'We implement quality procedures at every stage, ensuring your brand and ideas are clearly communicated.'
    },
    {   
        id: 10,
        title: "Marketing Campaigns",  
        description: "We design coordinated marketing campaigns to promote your product or service through various mediums.", 
        MainImage: MainComaigns, 
        image: Comaigns, 
        serviceId: 6,
        Gallery: []
    },
    {   
        id: 11, 
        title: "Info-graphic Videos",       
        description: "We create info-graphics that quickly and efficiently communicate complex ideas and data using visuals.", 
        MainImage: MediaProductionMainInfoGrphic, 
        image: MediaProductionInfographic, 
        serviceId: 1,
        Gallery: []
    },
    {   
        id: 12, 
        title: "Documentary",       
        description: "We film and shoot documentaries, news reports, and events, leveraging our extensive MENA region experience.", 
        MainImage: MediaProductionMainDocumentry, 
        image: MediaProductiondocumentary, 
        serviceId: 1,
        Gallery: []
    },
    {   
        id: 13,
        title: "TV & Radio Ads",       
        description: "We produce TV commercials and digital promos, offering credibility and quality at the lowest production cost.", 
        MainImage: MediaProductionMainTV, 
        image: MediaProductionTV, 
        serviceId: 1,
        Gallery: []
    },
    {   
        id: 14,
        title: "Post Production",       
        description: "Our team enhances productions with editing, mixing, and color correction using the latest equipment.", 
        MainImage: MediaProductionMainPost, 
        image: MediaProductionPost, 
        serviceId: 1,
        Gallery: []
    },
    {   
        id: 15,
        title: "Website Development",       
        description: "We create user-friendly websites with appealing aesthetics, emotional interaction, and the latest technologies.", 
        MainImage: OnlineSolutionsWebMainImage, 
        image: OnlineSolutionsWeb, 
        serviceId: 2,
        Gallery: []
    },
    {   
        id: 16,
        title: "Mobile Applications",       
        description: "We develop mobile apps tailored to your needs, offering fresh ideas and out-of-the-box solutions.", 
        MainImage: OnlineSolutionsMobileMainImage, 
        image: OnlineSolutionsMobile, 
        serviceId: 2,
        Gallery: []
    },
    {   
        id: 17,
        title: "Social Media Management",       
        description: "We create and manage your social media, adding value to your business with our creative and ambitious team.", 
        MainImage: OnlineSolutionsSocialMainImage, 
        image: OnlineSolutionsSocial, 
        serviceId: 2,
        Gallery: []
    },
];


  return (


            <div className="container CustomContainer">
                  <div className="slider-container ServicesSlider">
                    <Carousel 
                        responsive={responsive} 
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={2000}
                        draggable={true}
                        customLeftArrow={<CustomPrevButton Class=""/>}
                        customRightArrow={<CustomNextButton Class="" />}
                        
                    >
                      {SubServices.map((service)=>(
                        <div className="SerciceCardContainer"> 
                        <ServicesCard
                          key={service.id}
                          icon={service.image}
                          Header={service.title}
                          Description={service.description}
                        /> </div>

                      ))}


                    </Carousel>  
                  
              </div>
            </div>
           
    
    
  );
}

export default ServicesSlider;
