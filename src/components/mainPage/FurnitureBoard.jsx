import React from "react";
import Button from '@mui/material/Button';

export default function FurnitureBoard(){

    return(
        <div className="furnitureBoardWrapper">
            <div className="firstColumn">
                <h4>Save on quality with our furnitures</h4>
                <p>Create your dream house on a trusted budget.</p>
                <Button variant="outlined" sx={{borderRadius: '12px', width: '150px'}}>Shop Now</Button>
            </div>
            <img src="https://hips.hearstapps.com/hmg-prod/images/index-furniture-65f07553eef2f.jpg?resize=2048:*" alt="" />
        </div>
    )
}