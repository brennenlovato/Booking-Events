import { AuthConsumer } from "../../providers/AuthProvider";
import { useState, useEffect } from 'react';
import { Form, Row, Col, Container, Image, Button } from 'react-bootstrap';
// Import React FilePond
// import { FilePond, registerPlugin } from "react-filepond";

// Import FilePond styles
// import "filepond/dist/filepond.min.css";

// Import the Image EXIF Orientation and Image Preview plugins
// import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
// import FilePondPluginImagePreview from "filepond-plugin-image-preview";
// import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register the plugins
// registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const Profile = ({ user, updateUser }) => {
  const [editing, setEditing] = useState(false);
  const [formVals, setFormValue] = useState({ fname: '', lname: '', email: '' })
//   const [file, setFile] = useState()

  useEffect( () => {
    const { fname, lname, email } = user 
    setFormValue({ fname, lname, email })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    updateUser(user.id, formVals);
    setEditing(false)
    setFormValue({ ...formVals })
  }

//   const handleFileUpdate = (fileItems) => {
//     if (fileItems.length !== 0) {
//       setFile(fileItems)
//       setFormValue({ ...formVals })
//     }
//   }

//   const handleFileRemoved = (e, file) => {
//     setFile(null)
//     setFormValue({ ...formVals })
//   }

  const editForm = () => {
    return(
      <Form onSubmit={handleSubmit}>
        <h1>Edit User</h1>
        <Col md='8'>
          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control 
              name="fname"
              value={formVals.fname}
              required
              onChange={(e) => setFormValue({...formVals, fname: e.target.value })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control 
              name="lname"
              value={formVals.lname}
              required
              onChange={(e) => setFormValue({...formVals, lname: e.target.value })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control 
              type="email" 
              name="email"
              value={formVals.email}
              required
              onChange={(e) => setFormValue({...formVals, email: e.target.value })}
            />
          </Form.Group>
          <Button type="submit">Update</Button>
        </Col>
      </Form>
    )
  }

  const profileView = () => {
    return (
      <>
        <Col md='8'>
          <h1>{formVals.fname} {formVals.lname}</h1>
          <h1>{formVals.email}</h1>
        </Col>
      </>
    )
  }

  return (
    <Container>
      <Row>
        { editing ? editForm() : profileView() }
        <Col>
          <Button
            onClick={() => setEditing(!editing )}
          >
            { editing ? 'Cancel' : 'Edit' }
          </Button>
        </Col>
      </Row>
    </Container>
  )
}
const ConnectedProfile = (props) => (
  <AuthConsumer>
    { value => <Profile {...props} {...value} /> }
  </AuthConsumer>
)

export default ConnectedProfile;