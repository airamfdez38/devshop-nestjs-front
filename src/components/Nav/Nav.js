import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './scss/nav.scss';
 
const Nav= () => (
  <nav className='nav__container'>
    <ul className='nav__list'>
      <AnchorLink href='#inicio' className='nav-list__link'>Inicio</AnchorLink>
      <AnchorLink href='#stuff' className='nav-list__link'>Productos</AnchorLink>
      <AnchorLink href='#stuff' className='nav-list__link'>Sudaderas</AnchorLink>
      <AnchorLink href='#stuff' className='nav-list__link'>Camisetas</AnchorLink>
      <AnchorLink href='#stuff' className='nav-list__link'>Tazas</AnchorLink>
      <AnchorLink href='#stuff' className='nav-list__link'>Accesorios</AnchorLink>
      <AnchorLink href='#stuff'className='nav-list__link'>Pegatinas</AnchorLink>
    </ul>
    <div className='nav__botton-line'></div>
  
  
  </nav>
)
export  default Nav