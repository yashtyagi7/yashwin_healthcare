import '../header.css';
import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineInfoCircle, AiOutlineContacts, AiOutlineMenu, AiOutlineClose, AiOutlineDown, AiOutlineShoppingCart } from 'react-icons/ai';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <header className='navbar-middle sticky-top p-2'>
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2 d-flex justify-content-start">
              <Link to='/'>
                <img src={logo} alt="logo" className='img-fluid logo' />
              </Link>
            </div>
            <div className="col-10 d-flex justify-content-end">
              <div className='menu-links d-flex'>
                <NavLink to="/" className={location.pathname === '/' ? 'active' : 'not-active'}>
                  <AiOutlineHome /> HOME
                </NavLink>
                <div className='dropdown'>
                  <button className='dropbtn'>
                    PRODUCTS <AiOutlineDown />
                  </button>
                  <div className='dropdown-content'>
                    <NavLink to="/services/dry-powder-injections">Dry Powder Injections</NavLink>
                    <NavLink to="/services/dry-powder-suspension">Dry Powder Suspension</NavLink>
                    <NavLink to="/services/capsule">Capsule</NavLink>
                    <NavLink to="/services/liquid-orals">Liquid Orals</NavLink>
                    <NavLink to="/services/veterinary-products">Veterinary Products</NavLink>
                    <NavLink to="/services/export-products">Export Products</NavLink>
                  </div>
                </div>
                <NavLink to="/about" className={location.pathname === '/about' ? 'active' : 'not-active'}>
                  <AiOutlineInfoCircle /> ABOUT US
                </NavLink>
                <NavLink to="/contact" className={location.pathname === '/contact' ? 'active' : 'not-active'}>
                  <AiOutlineContacts /> CONTACT US
                </NavLink>
              </div>
              <button className="navbar-toggler d-md-none" type="button" onClick={toggleMenu}>
                {showMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
              </button>
            </div>
          </div>
        </div>
      </header>
      {showMenu && (
        <div className="mobile-menu">
          <NavLink to="/" className={location.pathname === '/' ? 'active' : 'not-active'} onClick={toggleMenu}>
            HOME
          </NavLink>
          <div className='dropdown'>
            <button className='dropbtn' onClick={toggleMenu}>
              PRODUCTS <AiOutlineDown />
            </button>
            <div className='dropdown-content'>
              <NavLink to="/services/dry-powder-injections" onClick={toggleMenu}>Dry Powder Injections</NavLink>
              <NavLink to="/services/dry-powder-suspension" onClick={toggleMenu}>Dry Powder Suspension</NavLink>
              <NavLink to="/services/capsule" onClick={toggleMenu}>Capsule</NavLink>
              <NavLink to="/services/liquid-orals" onClick={toggleMenu}>Liquid Orals</NavLink>
              <NavLink to="/services/veterinary-products" onClick={toggleMenu}>Veterinary Products</NavLink>
              <NavLink to="/services/export-products" onClick={toggleMenu}>Export Products</NavLink>
            </div>
          </div>
          <NavLink to="/about" className={location.pathname === '/about' ? 'active' : 'not-active'} onClick={toggleMenu}>
            ABOUT US
          </NavLink>
          <NavLink to="/contact" className={location.pathname === '/contact' ? 'active' : 'not-active'} onClick={toggleMenu}>
            CONTACT US
          </NavLink>
        </div>
      )}
    </>
  );
};

export default Header;
