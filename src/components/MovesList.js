import React from 'react';
import {Container, Table, TableBody, TableRow, TableCell} from 'semantic-ui-react'

function MovesList(props) {
    const {
        moves = []
    } = props;
    console.log(props);

    return (
        <div className="MovesList">
        <Container>
        <Table collapsing large>
            <TableBody>
            {moves.map(move => (
                <TableRow>
                    <TableCell className="move_letter"> {move.letter} </TableCell>
                    <TableCell> {move.movement} </TableCell>
                </TableRow>
            ))}

            </TableBody>
        </Table>
        </Container>
        </div>
    )
}

export default MovesList;