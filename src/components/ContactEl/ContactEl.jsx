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
      bg="green.400"
      color="whitesmoke"
      borderRadius={18}
      boxShadow="xl"
      _hover={{ boxShadow: 'dark-lg' }}
    >
      <Text>
        <Icon as={CgSmileMouthOpen} w={8} h={8} color="pink.500" mr={3} />
        {name}:
      </Text>
      <Text>
        <Icon as={BsPhoneVibrate} w={8} h={8} color="pink.500" mr={3} />
        {number}
      </Text>
      <Spacer />
      <Button
        color="white"
        fontSize={18}
        type="submit"
        bg="green.300"
        _hover={{ bg: 'pink.100', color: 'green.800' }}
        boxShadow="dark-lg"
        rounded="md"
        onClick={() => dispatch(deleteContact(id))}
      >
        <DeleteIcon color="green" w={6} h={6} mr={3} />
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
