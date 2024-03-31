import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ContactIcon, HomeIcon } from './svgindex';
const MenuElement = (arg) => {
  const { menu: { home, people, contact } } = arg;
  return (
    <ul>
      <li className="page-menu-items">
        <Link to="/">
          <HomeIcon />
          <p>{home}</p>
        </Link>
      </li>
      <li className="page-menu-items">
        <Link to="/contact" >
          <HomeIcon />
          <p>{people}</p>
        </Link>
      </li>
      <li className="page-menu-items">
        <Link to="/contact">
          <ContactIcon />
          <p>{contact}</p>
        </Link>
      </li>
    </ul>
  );
};

export default MenuElement;
