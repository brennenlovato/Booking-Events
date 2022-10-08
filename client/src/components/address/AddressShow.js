import { ListGroup, Row, Col, Container, Button, Modal } from "react-bootstrap";
import { useState } from 'react';
// import Moment from 'react-moment';
import { AddressConsumer } from "../../providers/AddressProvider";
import AddressForm from './AddressForm';

const AddressShow = ({ id, street, city, state, country, deleteAddress, locationId }) => {
  const [showing, setShow] = useState(false)
  const [editing, setEdit] = useState(false);

  return (
    <>
      <ListGroup.Item>
        <Row>
          <Col>
            {street}
          </Col>
          <Col>
            {city}
          </Col>
          <Col>
            {state}
          </Col>
          <Col>
            {country}
          </Col>
          <Col>
            <Button variant="primary" onClick={() => setShow(true)}>
              Show
            </Button>

            <Modal show={showing} onHide={() => setShow(false)}>
              <Modal.Header closeButton>
                <Modal.Title>Address Show</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>
                  Street: {street}
                </p>
                <p>
                    City: {city}
                </p>
                <p>
                  State: {state}
                </p>
                <p>
                  Country: {country}
                </p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={() => setEdit(true)}>
                  Edit
                </Button>

                <Modal show={editing} onHide={() => setEdit(false)}>
                  <Modal.Header closeButton>
                    <Modal.Title>Edit Address</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <AddressForm
                      id={id}
                      locationId={locationId}
                      street={street}
                      city={city}
                      state={state}
                      country={country}
                      setEdit={setEdit}
                    />
                  </Modal.Body>
                </Modal>
                <br />
                <Button
                  onClick={() => deleteAddress(locationId, id)}
                >
                  Delete
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>
      </ListGroup.Item>
    </>
  )
}

const ConnectedAddressShow = (props) => (
  <AddressConsumer>
    { value => <AddressShow {...props} {...value} /> } 
  </AddressConsumer>
)

export default ConnectedAddressShow;