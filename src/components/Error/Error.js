import { Link } from 'react-router-dom';
import { Container, Text } from '@chakra-ui/react';

const Error = () => {
  return (
    <Container maxW="2xl" centerContent>
      <Text fontSize={24} textAlign="center">
        Error, something went wrong
      </Text>
      <Link to="/" style={{ color: 'tomato' }}>
        Go to home page
      </Link>
    </Container>
  );
};

export default Error;
