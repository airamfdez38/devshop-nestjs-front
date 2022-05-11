import React from 'react'
import images from '../../exports/images.js';
import {motion} from 'framer-motion';
import './scss/slider.css';

const Slider = () => {
  return (
    <motion.div className='slider'>
        <motion.div className='slider__container' drag='x' dragConstraints={{right: 0, left:-20}}>
            {images.map(image => (
                <motion.div class="container__item">
                    <img src={image} alt="" className='item__img'/>
                </motion.div>
            ))}
        </motion.div>
    </motion.div>
  )
}

export default Slider