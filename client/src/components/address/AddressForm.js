import { useState, useEffect } from 'react';
import { AddressConsumer } from '../../providers/AddressProvider';
import { Form, Button } from 'react-bootstrap';

const AddressForm = ({ setAdd, addAddress, locationId, updateAddress, id, street, city, state, country, setEdit }) => {
  const [address, setAddress] = useState({ street: '', city: '', state: '', country: '' })

  useEffect( () => {
    if (id) {
      setAddress({ street, city, state, country })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateAddress(locationId, id, address)
      setEdit(false)
    } else {
      addAddress(locationId, address)
      setAdd(false)
    }
    setAddress({ street: '', city: '', state: '', country: '' })
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Street</Form.Label>
          <Form.Control 
            name="street"
            value={address.street}
            onChange={(e) => setAddress({ ...address, street: e.target.value })}
            required
           />
        </Form.Group>
        <Form.Group>
          <Form.Label>City</Form.Label>
          <Form.Control 
            name="city"
            value={address.city}
            onChange={(e) => setAddress({ ...address, city: e.target.value })}
            required
           />
        </Form.Group>
        <Form.Group>
          <Form.Label>State</Form.Label>
          <Form.Control 
            name="state"
            value={address.state}
            onChange={(e) => setAddress({ ...address, state: e.target.value })}
            required
           />
        </Form.Group>
        <Form.Group>
          <Form.Label>Country</Form.Label>
          <Form.Control 
            name="country"
            value={address.country}
            onChange={(e) => setAddress({ ...address, country: e.target.value })}
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

const ConnectedAddressForm = (props) => (
  <AddressConsumer>
    { value => <AddressForm {...props} {...value} /> }
  </AddressConsumer>
)

export default ConnectedAddressForm;