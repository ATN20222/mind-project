import React from "react";
import Person from '../../Assets/Images/Person.jpg';
import TeamCardAbout from "./TeamCardAbout";

import TeamImagesAbdullahMamdouh from '../../Assets/Images/TeamImages/AbdullahMamdouh.jpg';
import TeamImagesAhmedSabry from '../../Assets/Images/TeamImages/AhmedSabry.jpg';
import TeamImagesAntonAbdalla from '../../Assets/Images/TeamImages/AntonAbdalla.jpg';
import TeamImagesKhaledMoussa from '../../Assets/Images/TeamImages/KhaledMoussa.jpg';
import TeamImagesZiad from '../../Assets/Images/TeamImages/Ziad.jpg';

const AboutTeamCardsSection = ()=>{
    const Team = [
        {id:1,Image:TeamImagesAntonAbdalla , Name:"Anton Abdalla", Role:"Web Developer"},
        {id:3,Image:TeamImagesAhmedSabry , Name:"Ahmed Sabry", Role:"Flutter Developer"},
        {id:4,Image:TeamImagesKhaledMoussa , Name:"Khaled Moussa", Role:"Web Developer"},
        {id:1,Image:TeamImagesZiad , Name:"Ziad Hafez", Role:"Web Developer"},
        {id:3,Image:TeamImagesAbdullahMamdouh , Name:"Abdullah Mamdouh", Role:"Flutter Developer"},
      ]
    return(
        <section className="">
          <div class="ServicesHeader mb-5" >
            {/* <h1>Our Team</h1> */}
            <span class="TeamDescription container">
              Unstoppable Together: Our Team's 
              <br />
              Bond, Your Success Beyond</span>
            </div>
            <div className="container CustomContainer">
                <div className="row AboutPageRow">
                {Team.map((team)=>(
                        <TeamCardAbout
                          key={team.id}
                          Image={team.Image}
                          Name={team.Name}
                          Role={team.Role}
                          
                        />
                      ))}
                </div>
            </div>
            
        </section>
        
    );
}
export default AboutTeamCardsSection;