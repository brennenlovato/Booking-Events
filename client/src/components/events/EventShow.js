import { Card, Modal, Button, Container, Row, Col, Image } from 'react-bootstrap';
import { EventConsumer } from '../../providers/EventProvider';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const EventShow = ({ id, title, edate, desc, deleteEvent }) => {
  const [showing, setShow] = useState(false)

  return (
    <>
      <Card style={{ width: '12rem' }}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Button 
            variant="primary" 
            onClick={() => setShow(true)}
          >
            Show
          </Button>

          <Modal show={showing} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
              <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Container>
                <Row>
                  <Col>
                    eDate: {edate}
                    <br />
                    Desc: {desc}
                    <br />
                    <Link 
                      to={`/${id}/updateEvent`}
                      state={{ title, edate, desc }}
                    >
                      <Button>Edit</Button>
                    </Link>
                    <Button
                      onClick={() => deleteEvent(id)}
                    >
                      Delete
                    </Button>
                    <Link to={`/${id}/notes`}>
                      <Button>Notes</Button>
                    </Link>
                  </Col>
                </Row>
              </Container>
            </Modal.Body>
          </Modal>
        </Card.Body>
      </Card>
    </>
  )
}

const ConnectedEventShow = (props) => (
  <EventConsumer>
    { value => <EventShow {...props} {...value} />}
  </EventConsumer>
)

export default ConnectedEventShow;