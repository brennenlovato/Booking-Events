import EventList from './EventList';
import { useEffect, useState } from 'react';
import { EventConsumer } from '../../providers/EventProvider';
import EventForm from './EventForm';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Events = ({ events, getAllEvents }) => {
  const [adding, setAdd] = useState(false);

  useEffect( () => {
    getAllEvents()
  }, [])

  return (
    <>
      <Button 
        onClick={() => setAdd(true)}
      >
        +
      </Button>

      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EventForm 
            setAdd={setAdd}
          />
        </Modal.Body>
      </Modal>

      <h1>My Events</h1>
      <EventList
        events={events}
      />
    </>
  )
}

const ConnectedEvents = (props) => (
  <EventConsumer>
    { value => <Events {...props} {...value} /> }
  </EventConsumer>
)

export default ConnectedEvents;