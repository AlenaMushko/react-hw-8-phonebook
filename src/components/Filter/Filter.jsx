import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/contacts/contactsSlice';
import {
  HStack,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react';

export const FilterContacts = () => {
  const filterId = nanoid();
  const dispatch = useDispatch();

  const [FilterValue, setFilterValue] = useState('');
  const changeFilter = e => {
    setFilterValue(e.currentTarget.value);
    dispatch(filterContacts(e.currentTarget.value.toLowerCase()));
  };

  return (
    <Flex display="flex" bg="blue.600" p="4" borderTopRadius={20}>
      <Text fontSize="24px" color="whitesmoke">
        Find contacts by name
      </Text>
      <HStack spacing="32px">
        <FormControl as="form" ml={8}>
          <FormLabel htmlFor={filterId}>
            <Input
              id={filterId}
              type="text"
              name="filter"
              value={FilterValue}
              onChange={changeFilter}
              boxShadow="xl"
              p="6"
              w={250}
              bg="whitesmoke"
            />
          </FormLabel>
        </FormControl>
      </HStack>
    </Flex>
  );
};
