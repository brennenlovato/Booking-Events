import { Container, Row, Col, Image } from 'react-bootstrap';

const Info = () => (
  <Container>
    <Row>
      <Col md='6' sm='12'>
        <Image
          src="https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt='info'
          width='700px'
        />
      </Col>
      <Col md='6' sm='12'>
        <h1>
          Information
        </h1>
        <p>
          Bacon ipsum dolor amet picanha leberkas buffalo pancetta ham hock fatback shoulder rump. Filet mignon ham ball tip pork belly shoulder bacon short loin. Landjaeger ball tip fatback, chicken boudin cupim turkey rump meatball turducken. Leberkas andouille pastrami meatball sausage tenderloin prosciutto beef ribs. Drumstick hamburger tongue biltong, swine pig kielbasa beef ribs jowl brisket. Corned beef kevin alcatra, short ribs tenderloin boudin tail pork chop beef shoulder.
        </p>
      </Col>
    </Row>
  </Container>
)

export default Info;