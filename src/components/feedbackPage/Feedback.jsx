import React from "react";
import Slider from "react-slick";

export default function FeedBack() {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 4000,
        cssEase: "linear"
      };

    return (
        <div className="feedBackWrapper">
            <div className="feedBackContainer">
                <div className="currentServiceCount">
                    <p>We are currently serving 13 countries.</p> 
                </div>
                <form action="">
                    <label htmlFor="text">Send us a quick Feedback!</label>
                    <textarea name="text" id="text" placeholder="Write here!"></textarea>
                    <button>Send!</button>
                </form>
            </div>
        </div>
    )
}