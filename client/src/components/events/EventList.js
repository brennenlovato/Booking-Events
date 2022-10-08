import EventShow from './EventShow';
import { Container, Row, Col } from 'react-bootstrap';

const EventList = ({ events }) => (
  <Container>
    <Row md='4' sm='12'>
      { events.map( e => 
        <Col key={e.id}>
          <EventShow
            {...e}
          />
        </Col>
      )}
    </Row>
  </Container>
)

export default EventList;