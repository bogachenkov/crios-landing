import React from 'react';
import footerImg from '../images/footer.jpg';

const Footer = () => {
  return (
    <footer className="footer" style={{backgroundImage: `url('${footerImg}')`}}>
      <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <h1 className="title">Lorem ipsum dolor sit amet</h1>
      <a className="button footer__btn">SYMU.CO/FREEBIES</a>
      <div className="footer__image-c">
        <span className="footer__filter"></span>
      </div>
    </footer>
  );
};

export default Footer;