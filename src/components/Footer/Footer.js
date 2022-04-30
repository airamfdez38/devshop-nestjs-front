import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {FaFacebook, FaInstagram}from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import './scss/footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer__line'></div>
        <section className='footer__lists'>
            <section className='footer-lists__ul'>
                <h4 className='ul__title'>Sobre nosotros</h4>
                <ul className='ul__list'>
                    <AnchorLink href='#inicio' className='ul-list__link'>Quienes somos</AnchorLink>
                    <AnchorLink href='#inicio' className='ul-list__link'>Responsabilidad social</AnchorLink>
                    <AnchorLink href='#inicio' className='ul-list__link'>Condiciones de uso</AnchorLink>
                    <AnchorLink href='#inicio' className='ul-list__link'>Política de privacidad</AnchorLink>
                </ul>
            </section>
            <section className='footer-lists__ul'>
                <h4 className='ul__title'>Ayuda</h4>
                <ul className='ul__list'>
                    <AnchorLink href='#inicio' className='ul-list__link'>Devoluciones</AnchorLink>
                    <AnchorLink href='#inicio' className='ul-list__link'>Contacto</AnchorLink>
                </ul>
            </section>
            <section className='footer-lists__ul'>
                <h4 className='ul__title'>Síguenos</h4>
                <ul className='ul__list'>
                    <FaFacebook>
                         <AnchorLink href='#inicio' className='ul-list__link'>Facebook</AnchorLink>
                    </FaFacebook>
                    <FaInstagram>
                        <AnchorLink href='#inicio' className='ul-list__link'>Instagram</AnchorLink>
                    </FaInstagram>
                    <FaTwitter>
                        <AnchorLink href='#inicio' className='ul-list__link'>Twitter</AnchorLink>
                    </FaTwitter>
                </ul>
            </section>
        </section>
        <section className='footer__logo'>
            <figure className='footer-logo__img'>
                <img src='' alt='Logo de la empresa'/>
            </figure>
            <div className='footer__line'></div>
            <p className='footer-logo__slogan'>One either loves it or one hates it</p>


        </section>
        
    </footer>
  )
}

export default Footer