import React from "react";
import "semantic-ui-css/semantic.css";
import { Container, Segment, Header, Button } from "semantic-ui-react";
import NavBar from "../components/navbar";

const IndexPage = () => {
  return (
    <React.Fragment>
      <Container>
        <NavBar></NavBar>
        <Segment textAlign="center">
          <Header as="h1">Home</Header>
          <p>Some random text that needs not readen.</p>
          <Button color="green">Join Now!</Button>
        </Segment>
        <h2>News</h2>
        <p>Some more random text</p>
      </Container>
    </React.Fragment>
  );
};

export default IndexPage;
