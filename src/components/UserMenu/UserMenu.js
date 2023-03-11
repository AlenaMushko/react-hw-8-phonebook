import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import { Button, ButtonGroup, Text } from '@chakra-ui/react';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <ButtonGroup gap={8}>
      <Text as="i" color={'green.100'}>
        Welcome, {user.name}
      </Text>
      <Button
        fontSize={18}
        bg="pink.200"
        _hover={{ bg: 'green.100' }}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </ButtonGroup>
  );
};
