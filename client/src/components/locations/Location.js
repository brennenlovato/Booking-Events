import { LocationConsumer } from "../../providers/LocationProvider"
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LocationList from './LocationList';
import { Button, Modal } from 'react-bootstrap';
import LocationForm from './LocationForm';

const Locations = ({ locations, getAllLocations }) => {
  const { eventId } = useParams();
  const [adding, setAdd] = useState(false)

  useEffect( () => {
    getAllNotes(eventId)
  }, [])

  return (
    <>
      <Button variant="primary" onClick={() => setAdd(true)}>
        +
      </Button>

      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Location</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <NoteForm 
            setAdd={setAdd}
            catId={eventId}
          />
        </Modal.Body>
      </Modal>
      <NoteList 
        locations={locations}
        eventId={eventId}
      />
    </>
  )
}

const ConnectedLocations = (props) => (
  <LocationConsumer>
    { value => <Locations {...props} {...value} /> }
  </LocationConsumer>
)

export default ConnectedLocations;