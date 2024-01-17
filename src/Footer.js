import React from 'react';
import './Footer.css';
import FooterLinks from './FooterLinks';

const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <a href="https://www.kkszki.hu" target="_blank" rel="noopener noreferrer">
          <h3>
          </h3>
        </a>
        <p className="footer-links">
          <a href="https://cms.kando.intezmeny.edir.hu/uploads/adatvedelmi_tajekoztato_2_dbb7b7e9f6.pdf" className="link-1">Adatkezelési irányelvek</a>
          <a href="/">Impresszum</a>
        </p>
        <p className="footer-company-name">2023 • Miskolci SZC Kandó Kálmán Informatikai Technikum</p>
      </div>

      <div className="footer-center span">
        <div>
          <i className="fa fa-map-marker"></i>
          <p><span>3525 Miskolc</span>Palóczy László utca 3.</p>
        </div>
        <div>
          <i className="fa fa-phone"></i>
          <p>Nyitvatartás:
            hétfő 8:00–16:00
            <br />
            kedd 8:00–16:00
            <br />
            szerda 8:00–16:00
            <br />
            csütörtök 8:00–16:00
            <br />
            péntek 8:00–16:00
            <br />
            szombat Zárva
            <br />
            vasárnap Zárva
          </p>
        </div>
        <div>
          <i className="fa fa-envelope"></i>
          <p><a href="mailto:kando@kkszki.hu">kando@kkszki.hu</a></p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>Kapcsolat
            <br />
            Telefon: +36 46 500 930
            <br />
            OM azonosító: 203060/015
            <br />
            Felnőttképzési nyilvántartás száma: E-001290/2015
          </span>
        </p>
        
      </div>
    <FooterLinks/>  
    </footer>
  );

};

export default Footer;
