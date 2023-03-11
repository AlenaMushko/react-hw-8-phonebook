import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import { Button, ButtonGroup, Text } from '@chakra-ui/react';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <ButtonGroup gap={8}>
      <Text as="i" color={'yellow.100'}>
        Welcome, {user.name}
      </Text>
      <Button
        fontSize={18}
        bg="teal.200"
        _hover={{ bg: 'yellow.100' }}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </ButtonGroup>
  );
};
