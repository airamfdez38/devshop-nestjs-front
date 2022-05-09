import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './../Main/Main';
import Products from './../Products/Products';
import Hoodies from './../Hoodies/Hoodies';
import Tshirts from './../Tshirts/Tshirts';
import Mugs from './../Mugs/Mugs';
import Nav from '../Nav/Nav';
import './scss/navbar.css';

const Navbar = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' exact component={Main} />
        <Route path='/products' component={Products} />
        <Route path='/hoodies' component={Hoodies} />
        <Route path='/tshirts' component={Tshirts} />
        <Route path='/mugs' component={Mugs} />

      </Routes>
    </Router>
  )
}

export default Navbar