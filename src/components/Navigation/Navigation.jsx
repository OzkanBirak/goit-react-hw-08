import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import styles from './Navigation.module.css';

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  
  return (
    <nav className={styles.nav}>
      <NavLink className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
} 