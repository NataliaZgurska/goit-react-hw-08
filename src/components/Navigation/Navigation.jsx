import { NavLink, Outlet } from 'react-router-dom';

import clsx from 'clsx';
import css from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';

const getNavLinkClassName = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <nav>
        <NavLink to="/" className={getNavLinkClassName}>
          Home
        </NavLink>

        {isLoggedIn && (
          <NavLink to="/contacts" className={getNavLinkClassName}>
            Contacts
          </NavLink>
        )}
      </nav>

      <Outlet />
    </>
  );
};

export default Navigation;
{
  /*             <NavLink to="/register" className={getNavLinkClassName}>
              RegistrationPage
            </NavLink>
          
                      <NavLink to="/login" className={getNavLinkClassName}>
              LoginPage
            </NavLink>
           */
}
