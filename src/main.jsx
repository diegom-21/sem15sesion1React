import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Footer from './components/Footer/Footer.jsx'
import Header from './components/Header/Header.jsx'
import Wall from './components/Wall/Wall.jsx'
import Title from './components/Title/Titlee.jsx';
import Information from './components/Information/Information.jsx'
import Card from './components/Cards/Card.jsx';
import Button from './components/Buttons/Button.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <div>
      <Wall/>
    </div>
    <Title />
    <Information />
    <Card />
    <Button />
    <Footer />
  </React.StrictMode>,
)
