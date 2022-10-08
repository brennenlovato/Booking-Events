import { ListGroup, Container } from 'react-bootstrap';
import AddressShow from './AddressShow';

const AddressList = ({ addresses, locationId }) => (
  <Container>
    <h1>All Addresses</h1>
    <ListGroup variant="flush">
      { addresses.map( a => 
        <AddressShow 
          key={a.id}
          {...a}
         locationId= {locationId}
        /> 
      )}   
    </ListGroup>
  </Container>
)

export default AddressList;