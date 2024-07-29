import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Person from '../../../Assets/Images/Person.jpg';
import TeamCard from '../../Home/TeamCard';

  const Team = [
    {id:1,Image:Person , Name:"Anton Abdalla", Role:"Web Developer"},
    {id:3,Image:Person , Name:"Ahmed Sabry", Role:"Flutter Developer"},
    {id:4,Image:Person , Name:"Khaled Moussa", Role:"Web Developer"},
    {id:1,Image:Person , Name:"Anton Abdalla", Role:"Web Developer"},
    {id:3,Image:Person , Name:"Ahmed Sabry", Role:"Flutter Developer"},
    {id:4,Image:Person , Name:"Khaled Moussa", Role:"Web Developer"},
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
      items: 2
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

function TeamSlider() {
  return (


            <div className="container CustomContainer">
                  <div className="slider-container ServicesSlider">
                    <Carousel 
                        responsive={responsive} 
                        infinite={true}
                        draggable={true}
                        customLeftArrow={<CustomPrevButton Class=""/>}
                        customRightArrow={<CustomNextButton Class="" />}
                        
                    >
                      {Team.map((team)=>(
                        <div className="SerciceCardContainer Center "> 
                        <TeamCard
                          key={team.id}
                          Image={team.Image}
                          Name={team.Name}
                          Role={team.Role}
                        /> </div>

                      ))}


                    </Carousel>  
                  
              </div>
            </div>
           
    
    
  );
}

export default TeamSlider;
