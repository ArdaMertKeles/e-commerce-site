import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

export default function Footer({logo}){

    return(
        <div className="footerWrapper">
            <img src={logo} alt="" />
            <div className="column1">
                <h4>About Us</h4>
                <a href="">Who are we?</a>
                <a href="">Golden Products</a>
                <a href="">Sell on Golden Commerce</a>
                <a href="">Sustainability</a>
            </div>
            <div className="column2">
                <h4>Contact Us</h4>
                <a href="" style={{display: 'flex'}}><PhoneIcon /> Phone</a>
                <a href="" style={{display: 'flex'}}><EmailIcon /> Email</a>
                <h5>Social Media</h5>
                <a href="" style={{display: 'flex'}}><FacebookIcon /> Facebook</a>
                <a href="" style={{display: 'flex'}}><InstagramIcon /> Instagram</a>
                <a href="" style={{display: 'flex'}}><YouTubeIcon /> Youtube</a>
                <a href="" style={{display: 'flex'}}><TelegramIcon /> Telegram</a>
            </div>
            <div className="column3">
                <h4>Discounts</h4>
                <a href="">Active Discounts</a>
                <a href="">Golden Membership</a>
                <a href="">Prizes</a>
            </div>
            <div className="column4">
                <h4>Help</h4>
                <a href="">Seller Information</a>
                <a href="">View your cargo</a>
                <a href="">Customer Services</a>
            </div>
        </div>
    )
}