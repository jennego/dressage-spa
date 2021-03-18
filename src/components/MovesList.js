import React from "react";
import { Card, Text } from "grommet";

const MovesList = (props) => {
  const { moves = [] } = props;

  return (
    <div className="MovesList">
      {moves.map((move) => (
        <div style={{ display: "flex" }}>
          <Card
            pad="large"
            margin={{ right: "medium" }}
            gridArea="letter"
            style={{ width: "150px" }}
          >
            <Text size="large" textAlign="center">
              {move.letter}
            </Text>
          </Card>
          <Card pad="large" gridArea="movement" style={{ width: "500px" }}>
            <Text>{move.movement}</Text>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default MovesList;
