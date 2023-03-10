import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactsTitle, Container, Title } from 'components/App.styled';
import { ContactForm } from 'components/ContactForm';
import { Discuss } from 'react-loader-spinner';
import { FilterContacts } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import { selectContacts, selectError, selectIsLoading } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';

export default function Tasks() {
 const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      {isLoading && <Discuss />}
      {error && <b>Sorry, something went wrong. Try again</b>}
      {contacts.length > 0 && <>
        <ContactsTitle>Contacts</ContactsTitle>
        <FilterContacts />
        <ContactList />
      </>
        }
    </Container>
  );
}
