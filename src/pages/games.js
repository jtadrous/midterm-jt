import React from "react";
import "semantic-ui-css/semantic.css";
import { Menu, Container, Header, Card, Grid } from "semantic-ui-react";
import { Link } from "gatsby";
import GameCard from "../components/gameCard.js";

const GamesPage = () => {
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
        <Header as="h1">Games</Header>
        <Grid>
          <Card.Group>
            <GameCard
              head="Tic-Tac-Toe"
              text="3 in a row"
              ratingVal="2"
            ></GameCard>
            <GameCard
              head="Checkers"
              text="Jumping race"
              ratingVal="3"
            ></GameCard>
            <GameCard
              head="Snakes & Ladders"
              text="Snake!"
              ratingVal="4"
            ></GameCard>
            <GameCard
              head="Yahtzee"
              text="Feeling lucky?"
              ratingVal="5"
            ></GameCard>
          </Card.Group>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default GamesPage;
