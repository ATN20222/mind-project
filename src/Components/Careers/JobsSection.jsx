import React from "react";
const JobsSection = ()=>{
    const jobs = [];
    return(
        <section className="JobsSection">
                <div className="JobsHeader">
                    <span>Current Vacancies</span>
                </div>
                {jobs.length==0&&
                    <div className="container">
                        <div className="NoJobs">
                            <span>We currently have no job openings</span>
                        </div>
                    </div>
                }
        </section>
    );
}
export default JobsSection;