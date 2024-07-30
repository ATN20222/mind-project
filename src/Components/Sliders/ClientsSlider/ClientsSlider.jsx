import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Person from '../../../Assets/Images/Person.jpg';
import TeamCard from '../../Home/TeamCard';
import images from '../../../Test';

  const responsive = {
    superLargeDesktop: {

      breakpoint: { max: 4000, min: 3000 },
      items: 14
    },
    
    desktop: {
      breakpoint: { max: 3000, min: 1600 },
      items: 14
    },
    desktop2: {
        breakpoint: { max: 1600, min: 1500 },
        items: 13
      },
      desktop3: {
        breakpoint: { max: 1500, min: 1400 },
        items: 12
      },
    ipad: {
      breakpoint: { max: 1300, min: 1200 },
      items:10
    },
    ipad2: {
        breakpoint: { max: 1200, min: 1100 },
        items:9
      },
      ipad2: {
        breakpoint: { max: 1100, min: 1000 },
        items:8
      },
    tablet: {
        breakpoint: { max: 1000, min: 900 },
        items: 7
      },
      tablet2: {
        breakpoint: { max: 900, min: 768 },
        items: 6
      },
    mobile: {
      breakpoint: { max: 768, min: 590 },
      items: 5
    },
    
    smobile: {
      breakpoint: { max: 590, min: 470 },
      items:4
    },
    ssmobile: {
        breakpoint: { max: 470, min: 350 },
        items:3
      },
      ssmobile: {
        breakpoint: { max: 350, min: 328 },
        items:2
      },
    xsmobile: {
      breakpoint: { max: 328, min: 0 },
      items: 2
    }
  };

 

function ClientsSlider() {
  return (


            <div className="ClientCardsSliderMain">
                  <div className="slider-container ClientCardsSlider">
                    <Carousel 
                        responsive={responsive} 
                        infinite={true}
                        draggable={true}
                        arrows={false}
                        autoPlay={true}
                        autoPlaySpeed={2000}
                        slidesToSlide={3}
                        
                    >
                          {images.map((image, index) => (
                            <div className="ClientCardContainer">
                                <div className="ClientCard">

                                    <img key={index} src={image} width="100%" alt={`image-${index}`} />
                                </div>
                            </div>
                            ))}
                      {/* {Team.map((team)=>(
                        <div className="SerciceCardContainer Center "> 
                        <TeamCard
                          key={team.id}
                          Image={team.Image}
                          Name={team.Name}
                          Role={team.Role}
                        /> </div>

                      ))} */}


                    </Carousel>  
                  
              </div>
            </div>
           
    
    
  );
}

export default ClientsSlider;
