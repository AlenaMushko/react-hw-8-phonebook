import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';
import { Nav } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Nav>
      <NavLink
        to='/'
        style={({ isActive }) => ({
          color: isActive ? 'tomato' : 'darkblue',
        })}
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to='/contacts'
          style={({ isActive }) => ({
            color: isActive ? 'tomato' : 'darkblue',
          })}
        >
          Contacts
        </NavLink>
      )}
    </Nav>
  );
};
