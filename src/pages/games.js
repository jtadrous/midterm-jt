import React from "react";
import "semantic-ui-css/semantic.css";
import { Container, Header, Card, Grid } from "semantic-ui-react";
import GameCard from "../components/gameCard.js";
import NavBar from "../components/navbar";

const GamesPage = () => {
  return (
    <React.Fragment>
      <Container>
        <NavBar></NavBar>
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
