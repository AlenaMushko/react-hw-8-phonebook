import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { Button, Text, Icon, Flex, Spacer } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { BsPhoneVibrate } from 'react-icons/bs';
import { CgSmileMouthOpen } from 'react-icons/cg';

export const ContactEl = ({ contact }) => {
  const dispatch = useDispatch();
  const { id, name, number } = contact;
  return (
    <Flex
      display="flex"
      gap={8}
      alignItems="center"
      p={4}
      // bg="teal.300"
      bg='blue.300'
      color="darkblue"
      borderRadius={18}
      boxShadow="xl"
      _hover={{ boxShadow: 'dark-lg' }}
    >
      <Text>
        <Icon as={CgSmileMouthOpen} w={8} h={8} color="yellow.200" mr={3} />
        {name}:
      </Text>
      <Text>
        <Icon as={BsPhoneVibrate} w={8} h={8} color="yellow.200" mr={3} />
        {number}
      </Text>
      <Spacer />
      <Button
        fontSize={18}
        type="submit"
        bg="yellow.200"
        _hover={{ bg: "blue.500", color: 'yellow.200' }}
        boxShadow="dark-lg"
        rounded="md"
        onClick={() => dispatch(deleteContact(id))}
      >
        <DeleteIcon color="blue.500" w={6} h={6} mr={3}  _hover={{ color: 'yellow.200' }}/>
        Delete
      </Button>
    </Flex>
  );
};

ContactEl.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
