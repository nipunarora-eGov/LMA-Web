import React from 'react';
import PropTypes from 'prop-types';

// import BrandLogo from '../media/header/logo';
import { BrandLogo } from './svgindex';
import MenuElement from './MenuElements';


const MenuDiv = ({ menu }) => {
  const scrollToTop = (event) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  return (
    <menu id="menu">
      <div className="brand-logo">
        <BrandLogo onClick={scrollToTop}/>
      </div>
      <div className="items">
        <MenuElement menu={menu} />
        {/* <p className="phone">+(507) 830 2656</p> */}
      </div>
    </menu>
  );
}


MenuDiv.propTypes = {
  menu: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default MenuDiv;
