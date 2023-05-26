import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';
import Button from '../UI/Button/Button';

import { ThemeContext } from '../../hoc/ThemeProvider';

export const Header = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <header className='header'>
      <div className='wrapper header__wrapper'>
        <div className='logo-wrapper'>
          <Link to='/'>
            <div className="logo"></div>
          </Link>                
          <h1 className="header__title">Food Delivery</h1>
        </div>

        <nav className="header__navigation">
          <ul className="navigation">
            <li className="navigation__item">
              <NavLink to='/' className="navigation__link">Shops</NavLink>
            </li>
            <li className="navigation__item">
              <NavLink to='cart' className="navigation__link">Cart</NavLink>
            </li>
          </ul>
          
          <Button onClick={toggleTheme}
            className="styled-btn">
            Toggle {
              theme === 'light' ? <i className="fa-solid fa-moon" ></i>
                : <i className="fa-solid fa-sun" ></i>
            }
          </Button>          
        </nav>
      </div>
    </header>
  )
}