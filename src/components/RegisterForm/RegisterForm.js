import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  Text,
  Container,
} from '@chakra-ui/react';
import { AtSignIcon, LockIcon, Icon } from '@chakra-ui/icons';
import { BsFillEmojiWinkFill } from 'react-icons/bs';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <Container maxW="2xl" centerContent>
      <Text fontSize="32px" as="i" color="pink.600">
        Registration
      </Text>
      <FormControl
        as="form"
        display="flex"
        flexDirection="column"
        gap={8}
        p={4}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <FormLabel>
          <Icon as={BsFillEmojiWinkFill} w={6} h={6} color="blue.500" />
          Name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            boxShadow="xl"
            p="6"
            rounded="md"
          />
          <FormHelperText fontSize={14} color="blue.500" mt={1}>
            Name may contain only letters
          </FormHelperText>
        </FormLabel>
        <FormLabel>
          <AtSignIcon color="blue.500" w={6} h={6} mb={1} /> Email address
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            boxShadow="xl"
            p="6"
            rounded="md"
          />
          <FormHelperText fontSize={14} color="blue.500" mt={1}>
            Email must contain @
          </FormHelperText>
        </FormLabel>
        <FormLabel>
          <LockIcon color="blue.500" w={6} h={6} mb={1} /> Password
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            boxShadow="xl"
            p="6"
            rounded="md"
          />
          <FormHelperText fontSize={14} color="blue.500" mt={1}>
            Password must be at least 8 signs
          </FormHelperText>
        </FormLabel>
        <Button
          type="submit"
          w={40}
          m={12}
          bg="blue.100"
          _hover={{ bg: 'yellow.100' }}
          boxShadow="dark-lg"
          size="lg"
          rounded="md"
        >
          Register
        </Button>
      </FormControl>
    </Container>
  );
};
