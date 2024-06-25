import React from 'react';
import './Wall.css'; // Asegúrate de importar el archivo CSS
import backgroundImage from '../img/wall1.jpg'; // Asegúrate de tener la ruta correcta a tu imagen

const Wall = () => {
  return (
    <section className="wall" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="wall-content">
        <h1 className="wall-title">Explore the sights of the Azores</h1>
        <p className="wall-subtitle">A place where nature and adventure unite</p>
        <button className="wall-button">Book now</button>
      </div>
    </section>
  );
};

export default Wall;
