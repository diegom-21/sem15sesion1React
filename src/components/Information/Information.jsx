import React from "react";
import "./Information.css"
import reactLogo from '../../assets/react.svg';

const Information = () => {
    return (
        <div className="information-container">
            <div className="service">
                <img src={reactLogo} alt="Airport pickup icon" className="icon" />
                <h3>Airport pickup</h3>
                <p>We provide airport pick up from the airport to the hotel.</p>
            </div>
            <div className="service">
                <img src={reactLogo} alt="Airport pickup icon" className="icon" />
                <h3>Easy Booking</h3>
                <p>Our easy booking system allows for fast and convenient checkouts.</p>
            </div>
            <div className="service">
                <img src={reactLogo} alt="Airport pickup icon" className="icon" />

                <h3>Best tour guide</h3>
                <p>Contact our travel experts to plan your next adventure trip.</p>
            </div>
            <div className="service">
                <img src={reactLogo} alt="Airport pickup icon" className="icon" />
                <h3>Lots of options</h3>
                <p>Various personalized and exciting plans to choose from.</p>
            </div>
        </div>
    );
}

export default Information;

