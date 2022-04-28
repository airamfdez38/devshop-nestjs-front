
import React from 'react';
import {FaFacebook, FaInstagram, FaShoppingCart, FaUser}from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaSearch} from "react-icons/fa";

import './scss/header.scss';
//import logo from './logo.png'; 


const Header = () => {
    
  return (
    <header>
        <section className='header__socials'>
            <ul className='header-socials__ul'>

                <li className='socials-ul__li'>
                <a href='www.instagram.com' className='socials-icon__anchor'><FaFacebook /></a>

                </li>
                <li className='socials-ul__li'>
                    <a href='www.instagram.com' className='socials-icon__anchor'><FaInstagram /></a>
                </li>
                <li className='socials-ul__li'>
                    <a href='www.twitter.com' className='socials-icon__anchor'><FaTwitter /></a>
                </li>
            </ul>
        </section>
        <section className='header__main'>
            <section className='header-main__search'>
                <FaSearch className='main-search__icon'/>
                <input type='text' className='main-search__input' placeholder='Buscador'/>
            </section>
            <section className='header-main__logo'>
                <figure className='main-logo__img'>
                    <img src='' alt="Logo" />
                </figure>
            </section>
            <section className='header-main__userArea'>
                <FaUser className='userArea__icon'/>
                <FaShoppingCart className='userArea__icon'/>
            </section>
        </section>

    </header>
  )
}

export default Header
