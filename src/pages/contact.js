import React from "react";
import "semantic-ui-css/semantic.css";
import {
  Menu,
  Container,
  Header,
  Form,
  Input,
  TextArea,
  Button,
} from "semantic-ui-react";
import { Link } from "gatsby";

const ContactPage = () => {
  var initialForm = { fullName: "", email: "", message: "" };
  const [contactInfo, setContactInfo] = React.useState(initialForm);

  const { fullName, email, message } = contactInfo;

  function resetForm() {
    console.log(contactInfo);
    setContactInfo(contactInfo);
  }

  return (
    <React.Fragment>
      <Container>
        <Menu>
          <Link to="/">
            <Menu.Item icon="home"></Menu.Item>
          </Link>
          <Link to="/games">
            <Menu.Item icon="game"></Menu.Item>
          </Link>
          <Link to="/contact">
            <Menu.Item icon="users"></Menu.Item>
          </Link>
        </Menu>
        <Header as="h1">Contact Us!</Header>
        <Form>
          <Form.Field value={fullName} name="fullName">
            <p>
              <b>Full Name</b>
            </p>
            <Input fluid placeholder="Enter your full name..."></Input>
          </Form.Field>
          <Form.Field value={email} name="email">
            <p>
              <b>Contact Email:</b>
            </p>
            <Input
              fluid
              placeholder="Enter the best email to contact you with..."
            ></Input>
          </Form.Field>
          <Form.Field value={message} name="message">
            <p>
              <b>Message:</b>
            </p>
            <TextArea placeholder="Enter your message..."></TextArea>
          </Form.Field>
        </Form>
        <br />
        <Button color="green" onClick={resetForm}>
          Send Message
        </Button>
      </Container>
    </React.Fragment>
  );
};

export default ContactPage;
