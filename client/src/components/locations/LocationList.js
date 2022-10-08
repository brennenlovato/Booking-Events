import { ListGroup, Container } from 'react-bootstrap';
import LocationShow from './LocationShow';

const LocationList = ({ locations, eventId }) => (
  <Container>
    <h1>All Locations</h1>
    <ListGroup variant="flush">
      { locations.map( l => 
        <LocationShow 
          key={l.id}
          {...l}
          eventId={eventId}
        /> 
      )}   
    </ListGroup>
  </Container>
)

export default LocationList;