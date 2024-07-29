import React from 'react';
import Carousel from 'react-multi-carousel';
import './ServiceSlider.css'
import 'react-multi-carousel/lib/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import BrandingIcon from '../../../Assets/Images/Branding.svg';
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
                      {Services.map((service)=>(
                        <div className="SerciceCardContainer"> 
                        <ServicesCard
                          key={service.id}
                          icon={service.icon}
                          Header={service.Header}
                          Description={service.Description}
                        /> </div>

                      ))}


                    </Carousel>  
                  
              </div>
            </div>
           
    
    
  );
}

export default ServicesSlider;
