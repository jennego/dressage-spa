import React, { useContext } from "react";
import { Card, Paragraph, Text, ResponsiveContext } from "grommet";

const MovesList = (props) => {
  const { moves = [] } = props;

  const size = useContext(ResponsiveContext);

  return (
    <div className="MovesList mb-5">
      {moves.map((move) => (
        <div className="row d-flex no-gutters move-group">
          <div className="col-4 d-flex justify-content-end">
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
                className="move-letter-text"
              >
                {move.letter}
              </Text>
            </Card>
          </div>
          <div className="col d-flex justify-content-start">
            <Card
              pad="small"
              margin="xsmall"
              justify="center"
              background="surface"
              elevation="none"
              className="move-card"
            >
              <Paragraph
                size="large"
                margin="none"
                class="move-detail-text"
                style={{ breakWord: "break-word" }}
              >
                {move.movement}
              </Paragraph>
            </Card>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovesList;
