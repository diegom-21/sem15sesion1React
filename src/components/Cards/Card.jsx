import React from 'react';
import "./Card.css";
import card1 from '../img/card1.jpg';
import card2 from '../img/card2.jpg';
import card3 from '../img/card3.jpg';
import card4 from '../img/card4.jpg';

const Cards = () => {
    return (
        <>
        <h1 className='title-cards'>
            Choose your tour
        </h1>
        <div className="cards">
            <div className="card">
                <img src={card1} alt="Alone with nature" />
                <h3>Alone with nature</h3>
                <p>$110 per person</p>
            </div>
            <div className="card">
                <img src={card2} alt="Jeep ride" />
                <h3>Jeep ride</h3>
                <p>$200 per person</p>
            </div>
            <div className="card">
                <img src={card3} alt="Hiking tour" />
                <h3>Hiking tour</h3>
                <p>$150 per person</p>
            </div>
            <div className="card">
                <img src={card4} alt="Corners of the island" />
                <h3>Corners of the island</h3>
                <p>$210 per person</p>
            </div>
        </div>
        </>
        
    );
}

export default Cards;
