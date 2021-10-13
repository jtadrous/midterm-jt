import React from "react";
import "semantic-ui-css/semantic.css";
import { Menu, Container, Segment, Header, Button } from "semantic-ui-react";
import { Link } from "gatsby";

const IndexPage = () => {
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
