import { useState, useEffect } from 'react';
import { LocationConsumer } from '../../providers/LocationProvider';
import { Form, Button } from 'react-bootstrap';

const LocationForm = ({ setAdd, addLocation, eventId, updateLocation, id, resort_name, setEdit }) => {
  const [location, setLocation] = useState({ resort_name: '' })

  useEffect( () => {
    if (id) {
      setLocation({ resort_name })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateLocation(eventId, id, location)
      setEdit(false)
    } else {
      addLocation(eventId, location)
      setAdd(false)
    }
    setLocation({ resort_name: '' })
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Resort Name</Form.Label>
          <Form.Control 
            type="string" 
            name="resort_name"
            value={location.resort_name}
            onChange={(e) => setLocation({ ...location, resort_name: e.target.value })}
            required
           />
        </Form.Group>



        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

const ConnectedLocationForm = (props) => (
  <LocationConsumer>
    { value => <LocationForm {...props} {...value} /> }
  </LocationConsumer>
)

export default ConnectedLocationForm;