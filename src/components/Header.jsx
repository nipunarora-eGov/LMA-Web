import '../stylesheet/header.scss';

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import toggleFunction from '../javascript/header';

import BrandLogo from '../media/header/logo';

import Media from './Media';
import MenuElement from './MenuElements';
import MenuDiv from './MenuDiv';
import Languages from './Languages';


export default function Header({
  menu, setLanguage,
}) {
  const menuParse = JSON.parse(menu);

  const scrollToTop = (event) => {
    console.log(event);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const bar = document.getElementById('menu');
      const { scrollY } = window;
      if (scrollY > 50) {
        bar.classList.add('scrolling-menu');
      } else {
        bar.classList.remove('scrolling-menu');
      }
    });
  }, []);

  return (
    <header>
      <div className="top" id="top-header">
        <MenuDiv menu={menuParse} />
      </div>
      <div className="phone-menu">
        <div>
          <button type="button" className="hamburger" onClick={toggleFunction}>
            <div className="bar1" />
            <div className="bar2" />
            <div className="bar3" />
          </button>
          {/* <Media /> */}
        </div>
        <div className="phone-link">
          {/* <BrandLogo onClick={scrollToTop}/> */}
          <MenuElement menu={menuParse} />
          {/* <Languages setLanguage={setLanguage} /> */}
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  menu: PropTypes.string.isRequired,
  setLanguage: PropTypes.func.isRequired,
};
