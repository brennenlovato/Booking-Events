import { NoteConsumer } from "../../providers/NoteProvider"
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NoteList from './NoteList';
import { Button, Modal } from 'react-bootstrap';
import NoteForm from './NoteForm';

const Notes = ({ notes, getAllNotes }) => {
  const { locationId } = useParams();
  const [adding, setAdd] = useState(false)

  useEffect( () => {
    getAllNotes(locationId)
  }, [])

  return (
    <>
      <Button variant="primary" onClick={() => setAdd(true)}>
        +
      </Button>

      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <NoteForm 
            setAdd={setAdd}
            locationId={locationId}
          />
        </Modal.Body>
      </Modal>
      <NoteList 
        notes={notes}
        locationId={locationId}
      />
    </>
  )
}

const ConnectedNotes = (props) => (
  <NoteConsumer>
    { value => <Notes {...props} {...value} /> }
  </NoteConsumer>
)

export default ConnectedNotes;