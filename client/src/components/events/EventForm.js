import { useState, useEffect } from 'react';
import { EventConsumer } from '../../providers/EventProvider'; 
import { Button, Form } from 'react-bootstrap';
import { useParams, useLocation } from 'react-router-dom';
import Flash from '../shared/Flash';

const EventForm = ({ addEvent, setAdd, updateEvent, errors, setErrors }) => {
  const [event, setEvent] = useState({ title: '', edate: '', desc: '' })
  const { id } = useParams();
  const location = useLocation()
   
  useEffect( () => {
    if (id) {
      const { title, edate, desc } = location.state 
      setEvent({ title, edate, desc })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateEvent(id, event)
    } else {
      addEvent(event)
      setAdd(false)
    }
    setEvent({ title: '', edate: '', desc: '' })
  }

  return (
    <>
      { errors ?
        <Flash
          variant={errors.variant}
          msg={errors.msg}
          setErrors={setErrors}
        />
      : null
      }
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control 
            name='title'
            value={event.title}
            onChange={(e) => setEvent({ ...event, title: e.target.value })}
            required  
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Date</Form.Label>
          <Form.Control 
            name='edate'
            value={event.edate}
            onChange={(e) => setEvent({ ...event, edate: e.target.value })}
            required  
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control 
            name='desc'
            value={event.desc}
            onChange={(e) => setEvent({ ...event, desc: e.target.value })}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

const ConnectedEventShow = (props) => (
  <EventConsumer>
    { value => <EventForm {...props} {...value} />}
  </EventConsumer>
)

export default ConnectedEventShow;