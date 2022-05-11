import React from 'react'
import {FaShoppingCart, FaUser}from "react-icons/fa";
import {FaSearch} from "react-icons/fa";
import './scss/header.scss';
import logo from './../../exports/img/logo-t.png';




const Header = () => {
  return (
    <section className='header__main'>
        <section className='header-main__search'>
            <FaSearch className='main-search__icon'/>
            <input type='text' className='main-search__input' placeholder='Buscador' />
        </section>
        <section className='header-main__logo'>
            <figure className='main-logo__img'>
                <img src={logo} alt="Logo" />
            </figure>
        </section>
        <section className='header-main__user-area'>
            <FaUser className='user-area__icon'/>
            <FaShoppingCart className='user-area__icon'/>
        </section>
    </section>
  )
}

export default Header
