import { ListGroup, Row, Col, Container, Button, Modal } from "react-bootstrap";
import { useState } from 'react';
import Moment from 'react-moment';
import { LocationConsumer } from "../../providers/LocationProvider";
import LocationForm from './LocationForm';

const LocationShow = ({ id, resort_name, ndate, deleteLocation, eventId }) => {
  const [showing, setShow] = useState(false)
  const [editing, setEdit] = useState(false);

  return (
    <>
      <ListGroup.Item>
        <Row>
          <Col>
            {subject}
          </Col>
          <Col>
            {body}
          </Col>
          <Col>
            <Button variant="primary" onClick={() => setShow(true)}>
              Show
            </Button>

            <Modal show={showing} onHide={() => setShow(false)}>
              <Modal.Header closeButton>
                <Modal.Title>Location Show</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>
                  Locations: {body}
                </p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={() => setEdit(true)}>
                  Edit
                </Button>

                <Modal show={editing} onHide={() => setEdit(false)}>
                  <Modal.Header closeButton>
                    <Modal.Title>Edit Location</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <LocationForm
                      id={id}
                      eventId={eventId}
                      resort_name={resort_name}
                      setEdit={setEdit}
                    />
                  </Modal.Body>
                </Modal>
                <br />
                <Button
                  onClick={() => deleteLocation(eventId, id)}
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

const ConnectedLocationShow = (props) => (
  <LocationConsumer>
    { value => <LocationShow {...props} {...value} /> } 
  </LocationConsumer>
)

export default ConnectedLocationShow;