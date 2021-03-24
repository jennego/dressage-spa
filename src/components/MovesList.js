import React from "react";
import { Card, Paragraph, Text } from "grommet";

const MovesList = (props) => {
  const { moves = [] } = props;

  return (
    <div className="MovesList">
      {moves.map((move) => (
        <div style={{ display: "flex" }}>
          <Card
            pad="medium"
            margin="xsmall"
            justify="center"
            width="10rem"
            background="surface"
            elevation="none"
          >
            <Text weight="bold" size="xxlarge" textAlign="center">
              {move.letter}
            </Text>
          </Card>

          <Card
            pad="medium"
            margin="xsmall"
            justify="center"
            background="surface"
            elevation="none"
          >
            <Paragraph size="xlarge" margin="xsmall">
              {move.movement}
            </Paragraph>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default MovesList;
