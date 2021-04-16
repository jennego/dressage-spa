import React, { useContext } from "react";
import { Card, Paragraph, Text, ResponsiveContext } from "grommet";

const MovesList = (props) => {
  const { moves = [] } = props;

  const size = useContext(ResponsiveContext);

  return (
    <div className="MovesList mb-5">
      {moves.map((move) => (
        <div className="d-flex">
          <Card
            pad="small"
            margin="xsmall"
            justify="center"
            background="surface"
            elevation="none"
            className="move-letter"
          >
            <Text
              weight="bold"
              size="xxlarge"
              textAlign="center"
              className="move-text"
            >
              {move.letter}
            </Text>
          </Card>

          <Card
            pad="small"
            margin="xsmall"
            justify="center"
            background="surface"
            elevation="none"
            className="move-card"
          >
            <Paragraph size="large" margin="none">
              {move.movement}
            </Paragraph>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default MovesList;
