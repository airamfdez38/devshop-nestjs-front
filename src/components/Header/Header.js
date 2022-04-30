import React from 'react'
import {FaShoppingCart, FaUser}from "react-icons/fa";
import {FaSearch} from "react-icons/fa";
import './scss/header.scss';



const Header = () => {
  return (
    <section className='header__main'>
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
  )
}

export default Header
