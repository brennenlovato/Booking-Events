import { Image, Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Headline = () => (
  <>
    <Image 
      alt='head'
      width='1000px'
      src="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1=jpg"
    />
    <Container>
      <Row >
        <Col md='6' sm='12' >
          <h1>Welcome to Your Next Adventure</h1>
        </Col>
        <Col md='6' sm='12'>
          <p>
            To get started, please Log In or Sign Up.
          </p>
          <Row>
            <Col>
              <Link to='/register'>
                <Button>
                  Signup
                </Button>
              </Link>
            </Col>
            <Col>
              <Link to='/login'>
                <Button>
                  Login
                </Button>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </>
)

export default Headline;