import React from 'react'

const Header = () => {
  return (
    <header>
        <section className='header__socials'>
            <ul className='header-socials__ul'>
                <li className='socials-ul__li'>
                    <i className='socials-li__icon'><a href='www.facebook.com' className='socials-icon__anchor'>Facebook</a></i>
                </li>
                <li className='socials-ul__li'>
                    <i className='socials-li__icon'><a href='www.instagram.com' className='socials-icon__anchor'>Instagram</a></i>
                </li>
                <li className='socials-ul__li'>
                    <i className='socials-li__icon'><a href='www.twitter.com' className='socials-icon__anchor'>Twitter</a></i>
                </li>
            </ul>
        </section>

    </header>
  )
}

export default Header
