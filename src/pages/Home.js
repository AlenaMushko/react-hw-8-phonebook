import phoneBookImg from '../img/phone.jpg';
import { Image, Text, Container } from '@chakra-ui/react';
export default function Home() {
  return (
    <Container maxW="2xl" centerContent >
      <Text fontSize="40px" as="i" color="pink.600" textAlign="center" m={[0, 8]} >Welcome to you phonebook.</Text>
      <Image borderRadius="full" src={phoneBookImg} alt="phoneBook" />
    </Container>
  );
}
