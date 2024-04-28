import { useDispatch, useSelector } from 'react-redux';
import css from './UserMenu.module.css';
import { selectUser } from '../../redux/auth/authSelectors';
import { logout } from '../../redux/auth/authOperations';
import Button from '@mui/material/Button';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const onLogout = () => {
    dispatch(logout());

    // alert('clicked');
  };

  return (
    <div className={css.wrapper}>
      {user && (
        <p className={css.welcome}>
          Welcome <span className={css.username}>{user.name}</span>
        </p>
      )}
      <Button onClick={onLogout} variant="outlined">
        Logout
      </Button>
    </div>
  );
};
export default UserMenu;
