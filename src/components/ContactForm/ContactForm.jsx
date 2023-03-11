import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  Container,
  Box,
  AbsoluteCenter,
} from '@chakra-ui/react';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameId = nanoid();
  const numberId = nanoid();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const isContactRecorded = contacts.find(contact => contact.name === name);

  const handleSubmit = e => {
    e.preventDefault();
    isContactRecorded
      ? alert(`${name} is alreadi in contacts`)
      : dispatch(addContact({ id: nanoid(), name, number }));
    toast.success('new contact added');
    setName('');
    setNumber('');
  };

  return (
    <Container maxW="2xl" centerContent>
      <FormControl
        as="form"
        bg="#FAF5FF"
        border={30}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <Box display="flex" gap={8}>
          <FormLabel>
            Name contact
            <Input
              id={nameId}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={handleChange}
              boxShadow="xl"
              p="6"
              rounded="md"
            />
            <FormHelperText fontSize={14} color="green.500" mt={1}>
              Name must be longer than 2 characters
            </FormHelperText>
          </FormLabel>

          <FormLabel>
            Phone number
            <Input
              id={numberId}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={handleChange}
              boxShadow="xl"
              p="6"
              rounded="md"
            />
            <FormHelperText fontSize={14} color="green.500" mt={1}>
              Number must be only numbers
            </FormHelperText>
          </FormLabel>
        </Box>
        <Box position="relative" h="100px">
          <AbsoluteCenter>
            <Button
              type="submit"
              w={300}
              bg="green.300"
              _hover={{ bg: 'pink.300' }}
              boxShadow="dark-lg"
              size="lg"
              rounded="md"
            >
              Add contact
            </Button>
          </AbsoluteCenter>
        </Box>
      </FormControl>
    </Container>
  );
};
