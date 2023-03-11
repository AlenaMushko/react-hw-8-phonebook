import propTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

// restricted щоб не можна були зайти на логінизацію вже залогіненому користувачу
export default function PublicRoute({
  component: Component,
  redirectTo = '/',
}) {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
}

PublicRoute.prototype = {
  children: propTypes.element,
  restricted: propTypes.bool,
  redirectTo: propTypes.string,
};
