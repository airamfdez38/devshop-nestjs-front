import React from 'react'
import images from '../../exports/images';
import './scss/slider.css';

const Slider = () => {
  return (
    <div>
        {images.map(image => (
            <img src={image} alt="" />
        ))}
    </div>
  )
}

export default Slider