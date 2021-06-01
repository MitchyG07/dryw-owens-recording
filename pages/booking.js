import { Form, Button } from "react-bootstrap"
import FooterComp from "../components/FooterComp"
import emailjs from "emailjs-com"

const booking = () => {
  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs
      .sendForm("gmail", "booking", e.target, "user_yNizOFYgUpBQLTz0dKs06")
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    e.target.reset()
  }

  return (
    <div class="container">
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email address"
            name="email"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Artist Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your artist name"
            name="name"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Genre</Form.Label>
          <Form.Control
            type="text"
            placeholder="What genre best describes your group?"
            name="genre"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Tell me about your music!</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Tell me about your music! Link any media or music you would like me to check out! "
            name="description"
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Instruments & Musicians</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="What instruments will you be using on your record? How much experience do you or your group member have playing each instument?"
            name="instruments"
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
