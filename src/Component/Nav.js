import React from 'react';
import './Nav.css';
import { FaSistrix } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import {FaVideo } from "react-icons/fa";
import {FaTh } from "react-icons/fa";
import {FaBell } from "react-icons/fa";
import photo from './ni.jpg'

const Nav = () => {
    return (
       <>
 <header className='navbar'>
 
        <div className='navbarTitle'>
         <div className="nav-icon1-flex"> 
         <div className="nav-icon1"></div>
        <div className="nav-icon1"></div>
        <div className="nav-icon1"></div>
        </div>
       
        <div className="nav-icon2"> 
        <img src="https://logos-marques.com/wp-content/uploads/2021/03/YouTube-logo.png"/>
        <sup>TN</sup>
        </div>
           
          </div>
            <div className="serch">  
              <input
            type="text"
            id="header-search"
            placeholder="Rechercher"
            name="s" 
        />
        <button type="submit">  <FaSistrix/></button>
       <div className="icon-fa">
        <FaMicrophone/>
         </div>
         <div className="identi">
             <div className="identi-icon">
       <FaVideo />
           </div>
            <div className="identi-icon1">
       <FaTh />
           </div>
            <div className="identi-icon2">
           <FaBell />
           <div className="identi-icon3">
       
       <p> 9+ </p>
       
       </div>
           </div>
           <div className="identi-img">
            <img src={photo} />
            </div>
      </div>
      </div>
      
    </header>
    
 
      </>
    )
}
export default Nav;