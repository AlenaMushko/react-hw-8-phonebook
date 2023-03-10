import { NavLink } from 'react-router-dom';
import { Wraper } from './AuthNav.styled';


export const AuthNav = () => {
  return (
    <Wraper>
      <NavLink to='/register' style={({ isActive }) => ({
          color: isActive ? 'tomato' : 'darkblue',
        })}>
        Register
      </NavLink>
      <NavLink to='/login' style={({ isActive }) => ({
          color: isActive ? 'tomato' : 'darkblue',
        })}>
        Log In
      </NavLink>
    </Wraper>
  );
};