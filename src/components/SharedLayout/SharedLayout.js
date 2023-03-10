import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import { useAuth } from 'hooks/useAuth';
import { UserMenu } from 'components/UserMenu';
import { AuthNav } from 'components/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { Header } from './SharedLayout.styled';

const SharedLayout = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <Header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Header>
    <hr></hr>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default SharedLayout;