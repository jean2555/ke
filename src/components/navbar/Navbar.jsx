import React, { useState } from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/jo.png'
import './navbar.css'


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (

    <div className="skeez__navbar">
      <div className="skeez__navbar-links">
        <div className="skeez__navbar-links_logo">
          <img src={logo} alt="logo" className='logo-dim' />
          <p>skeez</p>
        </div>
        <div className="skeez__navbar-links_container">
          <p><a href="#home"> Home</a> </p>
          <p><a href="#skeez"> Skeez</a> </p>
          <p><a href="#music"> For Music</a> </p>
          <p><a href="#artist"> For Artist</a> </p>
        </div>
        </div>
        <div className="skeez__navbar-sign">
          <p> Sign in</p>
          <button type="button"> Sign up </button>
        </div>
        <div className="skeez__navbar-menu">
          {toggleMenu
            ? <RiCloseLine color="#fff" size={33} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="#fff" size={33} onClick={() => setToggleMenu(true)} />
          }
          {toggleMenu && (
            <div className="skeez__navbar-menu scale-up-center">
              <div className="skeez__navbar-menu_container-links">
                <p><a href="#home"> Home</a> </p>
                <p><a href="#skeez"> Skeez</a> </p>
                <p><a href="#feature"> For Music</a> </p>
                <p><a href="#artist"> For Artist</a> </p>
              </div>
              <div className="skeez__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button"> Sign up</button>
              </div>
            </div>
            )}
     </div>
    </div>
  )
}

        export default Navbar