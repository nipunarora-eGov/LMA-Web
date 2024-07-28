import React,{useState} from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ContactIcon, HomeIcon } from './svgindex';
const MenuElement = (arg) => {
  const { menu: { home, people, contact } } = arg;
  // const navRefs = ["#top-header","#associates-goto","#contact-us"]

  const [menuItems,updateMenuItems] = useState([
    {
      ref:"#top-header",
      content:"Home",
      isActive:false
    },
    {
      ref:"#practices-goto",
      content:"Practices",
      isActive:false
    },
    {
      ref:"#associates-goto",
      content:"About Us",
      isActive:false
    },
    {
      ref:"#contact-goto",
      content:"Contact Us",
      isActive:false
    },
    
  ])

  const setActive = (idx) => {
    updateMenuItems((prevState)=> {
      return prevState.map((item,innerIdx) => {
        if(innerIdx === idx) {
          item.isActive = true
        }else{
          item.isActive = false
        }
        return item
      })
    } )
  }

  return(
    <ul>
      {menuItems.map((item,idx)=>{
        return <li className={`page-menu-items ${item.isActive ? "active" : ""} `} key={idx}> <a href={item.ref} onClick={() => setActive(idx) } >
        <p>{item.content}</p>
      </a></li>
      })}
    </ul>
  )
  return (
    <ul>
      <li className="page-menu-items">
      <a href="#top-header" >
          <HomeIcon />
          <p>{home}</p>
        </a>
      </li>
      <li className="page-menu-items">
        <a href="#associates-goto" >
          <HomeIcon />
          <p>{people}</p>
        </a>
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
