import { Link } from "react-router-dom";
import { Title, Container } from "./Error.styled";
 
const Error = () => {
  return (
    <Container>
    <Title>Error, something went wrong</Title>
    <Link to='/' style={{color:"tomato"}}>Go to home page</Link>
  </Container>
    
  )
}

export default Error;