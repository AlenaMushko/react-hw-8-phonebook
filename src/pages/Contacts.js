import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from 'components/ContactForm';
import { Discuss } from 'react-loader-spinner';
import { FilterContacts } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { Center, Container } from '@chakra-ui/react';

export default function Tasks() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container bg="#FAF5FF">
      <Center fontSize="32px" as="i" color="pink.600" textAlign="center">
        Phonebook
      </Center>
      <ContactForm />
      {isLoading && <Discuss />}
      {error && (
        <Center fontSize="16px" color="tomato" mt={12}>
          Sorry, something went wrong. Try again
        </Center>
      )}
      {contacts.length > 0 && (
        <>
          <Center fontSize="32px" as="i" color="pink.600">
            Contacts
          </Center>
          <FilterContacts />
          <ContactList />
        </>
      )}
    </Container>
  );
}
