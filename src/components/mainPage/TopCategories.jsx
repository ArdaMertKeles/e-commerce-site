import React from "react";

export default function TopCategories({ svg, title, description }) {

    return (
        <div className="topCardWrapper">
            {svg}
            <div className="topCardColumn">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}