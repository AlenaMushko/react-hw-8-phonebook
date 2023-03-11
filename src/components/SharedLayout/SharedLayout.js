import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import { Box, Flex, Spacer } from '@chakra-ui/react';
import { useAuth } from 'hooks/useAuth';
import { UserMenu } from 'components/UserMenu';
import { AuthNav } from 'components/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';

const SharedLayout = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <Box
        as="header"
        p={3}
        bgGradient="linear(to-r, green.200, pink.500)"
        boxShadow="xl"
        w="100%"
      >
        <Flex>
          <Navigation />
          <Spacer />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Flex>
      </Box>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default SharedLayout;
