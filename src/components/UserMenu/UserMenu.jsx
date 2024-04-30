import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';
import Button from '@mui/material/Button';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const onLogout = () => {
    dispatch(logout());
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
