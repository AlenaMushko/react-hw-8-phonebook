import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';
import { Button, ButtonGroup } from '@chakra-ui/react';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <ButtonGroup>
      <Button
        fontSize={24}
        bg="transparent"
        _hover={{ bg: '#ebedf0' }}
        as={NavLink}
        to="/"
        style={({ isActive }) => ({
          color: isActive ? 'yellow' : 'darkblue',
        })}
      >
        Home
      </Button>
      {isLoggedIn && (
        <Button
          fontSize={24}
          bg="transparent"
          _hover={{ bg: '#ebedf0' }}
          as={NavLink}
          to="/contacts"
          style={({ isActive }) => ({
            color: isActive ? 'yellow' : 'darkblue',
          })}
        >
          Contacts
        </Button>
      )}
    </ButtonGroup>
  );
};
