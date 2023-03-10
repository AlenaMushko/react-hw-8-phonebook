import { useAuth } from 'hooks/useAuth';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operations';
import Error from './Error/Error';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import SharedLayout from './SharedLayout/SharedLayout';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path='/register'
            element={
              <PublicRoute
                redirectTo='/contacts'
                component={RegisterPage }
              />
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute
                redirectTo='/contacts'
                component={LoginPage }
              />
            }
          />
          <Route
            path='/contacts'
            element={
              <PrivateRoute
                redirectTo='/login'
                component={ContactsPage }
              />
            }
          />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    )
  );
};
