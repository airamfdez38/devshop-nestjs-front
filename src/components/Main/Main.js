import React from 'react';
import Slider from '../Slider/Slider';
import './scss/main.scss';
import bg_dm from '../../exports/img/bg_dm.jpeg';


const Main = () => {
  return (
    <>
    <main className='main__container'>
      <div className='main__img' style={{backgroundImage:`url(${bg_dm})`, height:'900px', width:'100%'}}>
        <p className='img__text'> Development made fashion </p>
      </div>
      <Slider />
    </main>
    </>
  )
}

export default Main