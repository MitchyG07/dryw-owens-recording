import { Form, Button } from "react-bootstrap"
import FooterComp from "../components/FooterComp"

const booking = () => {
  return (
    <div class="container">
      <Form>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email address" />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Artist Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your artist name" />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Genre</Form.Label>
          <Form.Control
            type="text"
            placeholder="What genre best describes your group?"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Tell me about your music!</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Tell me about your music! Link any media or music you would like me to check out! "
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Instruments & Musicians</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="What instruments will you be using on your record? How much experience do you or your group member have playing each instument?"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>
            Will you need any session players for your record?
          </Form.Label>
          <br />
          <Form.Check
            inline
            label="Yes"
            name="yes"
            type="checkbox"
            id="inline-checkbox-1"
          />
          <Form.Check
            inline
            label="No"
            name="no"
            type="checkbox"
            id="inline-checkbox-2"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Upload a Demo!</Form.Label>
          <Form.File id="demoUpload" />
        </Form.Group>
        <br />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default booking
