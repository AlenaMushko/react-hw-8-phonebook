import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { ContactEl } from 'components/ContactEl';
import { List, ListItem } from '@chakra-ui/react';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <List p={4} borderBottomRadius={20} bg="green.100">
      {filteredContacts.map(contact => (
        <ListItem key={contact.id} mt={4}>
          <ContactEl contact={contact} />
        </ListItem>
      ))}
    </List>
  );
};
