import { useDispatch, useSelector } from 'react-redux';
import css from './UserMenu.module.css';
import { selectUser } from '../../redux/auth/authSelectors';
import { logout } from '../../redux/auth/authOperations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={css.wrapper}>
      {user && <p className={css.username}>Welcome {user.name}</p>}
      {/* <p className={css.username}>Welcome {user.name}</p> */}
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};
export default UserMenu;
