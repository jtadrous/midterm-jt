import React from "react";
import { Card, Icon, Header, Rating, Container } from "semantic-ui-react";

const GameCard = ({ head, text, ratingVal }) => {
  ratingVal = parseInt(ratingVal);

  return (
    <React.Fragment>
      <Card>
        <Container>
          <Header as="h2">{head}</Header>
          <p>{text}</p>
          <Rating icon="star" defaultRating={ratingVal} maxRating={5}></Rating>
          <Icon name="exclamation circle"></Icon>
        </Container>
      </Card>
    </React.Fragment>
  );
};

export default GameCard;
