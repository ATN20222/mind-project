import React from "react";
const ClientsCategoryCard = ({id ,title ,onSelect , IsSelected})=>{
    return(
        <div className={`SubServiceCard ClientsCategoryCard ${IsSelected?'SelectedSubService':''}`} onClick={()=>onSelect(id)}>
            
            <div className="ClientTitle">

                <span>{title}</span>
            </div>
        </div>
    );
}
export default ClientsCategoryCard;