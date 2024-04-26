import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import css from './AppBar.module.css';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
