import { NavLink } from 'react-router-dom';
import { Button, ButtonGroup } from '@chakra-ui/react';

export const AuthNav = () => {
  return (
    <ButtonGroup gap="8">
      <Button
        fontSize={24}
        bg="transparent"
        _hover={{ bg: 'teal.200'}}
        as={NavLink}
        to="/register"
        style={({ isActive }) => ({
          color: isActive ? 'yellow' : 'darkblue',
        })}
      >
        Register
      </Button>

      <Button
        fontSize={24}
        bg="transparent"
        _hover={{ bg: 'teal.200' }}
        as={NavLink}
        to="/login"
        style={({ isActive }) => ({
          color: isActive ? 'yellow' : 'darkblue',
        })}
      >
        Log In
      </Button>
    </ButtonGroup>
  );
};
