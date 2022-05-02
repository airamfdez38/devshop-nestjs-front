import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './scss/footer.scss';

const Footer = () => {
  return (
      <>
    <div className='divisor'></div>
    <footer className='footer'>
        <section className='footer__info'>
            <section className='footer-info__container'>
                <section className='info-container__list'>
                    <h4 className='container__title'>Sobre nosotros</h4>
                    <ul className='container__list'>
                        <AnchorLink href='#inicio' className='list__link'>Quienes somos</AnchorLink>
                        <AnchorLink href='#inicio' className='list__link'>Responsabilidad social</AnchorLink>
                        <AnchorLink href='#inicio' className='list__link'>Condiciones de uso</AnchorLink>
                        <AnchorLink href='#inicio' className='list__link'>Política de privacidad</AnchorLink>
                    </ul>
                </section>
                <section className='info-container__list'>
                    <h4 className='container__title'>Ayuda</h4>
                    <ul className='container__list'>
                        <AnchorLink href='#inicio' className='list__link'>Devoluciones</AnchorLink>
                        <AnchorLink href='#inicio' className='list__link'>Contacto</AnchorLink>
                    </ul>
                </section>
                <section className='info-container__list'>
                    <h4 className='container__title'>Síguenos</h4>
                    <ul className='container__list'>
                        
                        <AnchorLink href='#inicio' className='list__link'>Facebook</AnchorLink>
                        <AnchorLink href='#inicio' className='list__link'>Instagram</AnchorLink>
                        <AnchorLink href='#inicio' className='list__link'>Twitter</AnchorLink>
                    </ul>
                </section>
            </section>    
            <section className='footer-info__copyright'>
                <p className='info-copyright__text'>@DevShop. Todos los derechos reservados</p>
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
    </>
  )
}

export default Footer