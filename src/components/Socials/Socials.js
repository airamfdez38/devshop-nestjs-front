
import React from 'react';
import {FaFacebook, FaInstagram, FaShoppingCart, FaUser}from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaSearch} from "react-icons/fa";
import './scss/socials.scss';

//import logo from './logo.png'; 


const Socials = () => {
    
  return (
    <>
    <header>
          <section className='header__socials'>
          <ul className='header_socials__ul'>

              <li className='socials_ul__li'>
                  <a href='www.instagram.com' className='socials_icon__anchor'><FaFacebook /></a>
              </li>
              <li className='socials_ul__li'>
                  <a href='www.instagram.com' className='socials_icon__anchor'><FaInstagram /></a>
              </li>
              <li className='socials_ul__li'>
                  <a href='www.twitter.com' className='socials_icon__anchor'><FaTwitter /></a>
              </li>
          </ul>
      </section><section className='header__main'>
              <section className='header_main__search'>
                  <FaSearch className='main_search__icon'/>
                  <input type='text' className='main_search__input' placeholder='Buscador' />
              </section>
              <section className='header_main__logo'>
                  <figure className='main_logo__img'>
                      <img src='' alt="Logo" />
                  </figure>
              </section>
              <section className='header_main__userArea'>
                  <FaUser className='userArea__icon'/>
                  <FaShoppingCart className='userArea__icon'/>
              </section>
          </section>
         

    </header>
    </>
  )
}

export default Socials
