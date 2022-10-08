import { useState, useEffect } from 'react';
import { NoteConsumer } from '../../providers/NoteProvider';
import { Form, Button } from 'react-bootstrap';

const NoteForm = ({ setAdd, addNote, locationId, updateNote, id, title, body, setEdit }) => {
  const [note, setNote] = useState({ title: '', body: '' })

  useEffect( () => {
    if (id) {
      setNote({ title, body })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateNote(locationId, id, note)
      setEdit(false)
    } else {
      addNote(locationId, note)
      setAdd(false)
    }
    setNote({ title: '', body: '' })
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>title</Form.Label>
          <Form.Control 
            name="title"
            value={note.title}
            onChange={(e) => setNote({ ...note, title: e.target.value })}
            required
           />
        </Form.Group>
        <Form.Group>
          <Form.Label>Body</Form.Label>
          <Form.Control 
            name="body"
            value={note.body}
            onChange={(e) => setNote({ ...note, body: e.target.value })}
            required
            as="textarea" 
            rows={3}
           />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

const ConnectedNoteForm = (props) => (
  <NoteConsumer>
    { value => <NoteForm {...props} {...value} /> }
  </NoteConsumer>
)

export default ConnectedNoteForm;