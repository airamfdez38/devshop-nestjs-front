import React from 'react';
import {  Link } from "react-router-dom";
import './scss/nav.css';


const Nav = () => {
  return (
    <nav className='nav__container'>
      <ul className='nav__list'>
        <li className='nav-list__link'>
          <Link to="/" style={{textDecoration: 'none', color:'#085274'}}>Inicio</Link>
        </li>
        <li className='nav-list__link'>
          <Link to="/products" style={{textDecoration: 'none', color:'#085274'}}>Productos</Link>
        </li>
        <li className='nav-list__link'>
          <Link to="/hoodies" style={{textDecoration: 'none', color:'#085274'}}>Sudaderas</Link>
        </li>
        <li className='nav-list__link'>
          <Link to="/tshirts" style={{textDecoration: 'none', color:'#085274'}}>Camisetas</Link>
        </li>
        <li className='nav-list__link'>
          <Link to="/mugs" style={{textDecoration: 'none', color:'#085274'}}>Tazas</Link>
        </li>
    </ul>
   
  </nav>
  )
}

export default Nav;