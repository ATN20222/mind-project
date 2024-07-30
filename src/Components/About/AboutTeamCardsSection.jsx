import React from "react";
import Person from '../../Assets/Images/Person.jpg';
import TeamCardAbout from "./TeamCardAbout";

const AboutTeamCardsSection = ()=>{
    const Team = [
        {id:1,Image:Person , Name:"Anton Abdalla", Role:"Web Developer"},
        {id:3,Image:Person , Name:"Ahmed Sabry", Role:"Flutter Developer"},
        {id:4,Image:Person , Name:"Khaled Moussa", Role:"Web Developer"},
        {id:1,Image:Person , Name:"Anton Abdalla", Role:"Web Developer"},
        {id:3,Image:Person , Name:"Ahmed Sabry", Role:"Flutter Developer"},
        {id:4,Image:Person , Name:"Khaled Moussa", Role:"Web Developer"},
        {id:3,Image:Person , Name:"Ahmed Sabry", Role:"Flutter Developer"},
        {id:4,Image:Person , Name:"Khaled Moussa", Role:"Web Developer"},
      ]
    return(
        <section className="AboutFirstSection">
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