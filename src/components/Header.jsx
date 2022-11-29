import { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as MenuBurger } from '../assets/menu_mobile.svg';
import '../styles/header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const routes = [
    { name: 'Accueil', path: '/' },
    { name: 'A propos', path: 'about' },
  ];
  return (
    <>
      <div className='header_wrapper'>
        <div className='header_container'>
          <Link to='/'>
            <Logo alt='Kasa_Logo_Header' className='header_logo' />
          </Link>

          <nav className='header_nav desktop'>
            {routes.map((route) => {
              const { name, path } = route;
              return (
                <ul key={`desktop-${name}`} className='header_list'>
                  <li>
                    <NavLink
                      to={path}
                      className={({ isActive }) => (isActive ? 'header_link is_active' : 'header_link')}>
                      {name}
                    </NavLink>
                  </li>
                </ul>
              );
            })}
          </nav>

          <nav className='header_nav mobile'>
            <MenuBurger alt='Menu' className='header_menu' onClick={() => setIsMenuOpen(!isMenuOpen)} />

            <div className={isMenuOpen ? 'header_menu_content is_open' : 'header_menu_content'}>
              <span className='header_menu_cross' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                X
              </span>
              {routes.map((route) => {
                const { name, path } = route;
                return (
                  <ul key={`mobile-${name}`} className='header_list'>
                    <li>
                      <NavLink
                        to={path}
                        className={({ isActive }) => (isActive ? 'header_link is_active' : 'header_link')}>
                        {name}
                      </NavLink>
                    </li>
                  </ul>
                );
              })}
            </div>
          </nav>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Header;
