import React from "react";
const SubServiceCard = ({id, image ,title ,onSelect , IsSelected})=>{
    return(
        <div className={`SubServiceCard ${IsSelected?'SelectedSubService':''}`} onClick={()=>onSelect(id)}>
            <div className="SubServiceImage">
                <img src={image} width="100%" alt={title} />
            </div>
            <div className="SubServiceTitle">

                <span>{title}</span>
            </div>
        </div>
    );
}
export default SubServiceCard;