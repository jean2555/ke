import React from 'react'
import './header.css'
import logo from '../../assets/dev.png'


const Header = () => {
  return (
    <div className="skeez__header-section__padding" id="home">
      <div className="skeez__header-content">
        <div className="grade__text">

          <h1 className="header-title"> For your music</h1>
          <div className="image"> </div>
          <div className='button-strip'>
            <p className='font-weight'> Le meilleur service de streaming pour les amoureux de la musique</p>
            <a href='/try-now' className='primary-btn'>
              Essayer gratuitement
            </a>
          </div>
        </div>
        <div className='media-size'>  <img src={logo} alt="header" className='media-head' /> </div>
      </div>

    </div>
  )
}

export default Header