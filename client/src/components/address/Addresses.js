import { AddressConsumer } from "../../providers/AddressProvider"
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AddressList from './AddressList';
import { Button, Modal } from 'react-bootstrap';
import AddressForm from './AddressForm';

const Addresses = ({ addresses, getAllAddresses }) => {
  const { locationId } = useParams();
  const [adding, setAdd] = useState(false)

  useEffect( () => {
    getAllAddresses(locationId)
  }, [])

  return (
    <>
      <Button variant="primary" onClick={() => setAdd(true)}>
        +
      </Button>

      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddressForm 
            setAdd={setAdd}
            locationId={locationId}
          />
        </Modal.Body>
      </Modal>
      <AddressList 
        addresses={addresses}
        locationId={locationId}
      />
    </>
  )
}

const ConnectedAddresses = (props) => (
  <AddressConsumer>
    { value => <Addresses {...props} {...value} /> }
  </AddressConsumer>
)

export default ConnectedAddresses;