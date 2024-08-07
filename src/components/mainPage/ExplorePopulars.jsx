import React from "react";

export default function ExplorePopulars({title, img, click}){

    return(
        <div className="popularWrapper">
            <div className="popularCircle" onClick={click}>
                <img src={img} alt="" />
            </div>
            <p>{title}</p>
        </div>
    )
}