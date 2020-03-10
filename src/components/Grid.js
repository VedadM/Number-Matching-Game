import styled from 'styled-components';

import React from 'react';
import Cell from './Cell';

const WIDTHHEIGTH = 50;

class Grid extends React.Component {
    createGrid = () => {
        const { rows, cols } = this.props;
        let elements = [];

        for (let row = 0; row < rows; row++) {
            let columns = [];
            let cellID = `row-${row}`;

            for (let col = 0; col < cols; col++) {
                let elementId = `cell-${col}-${row}`;
                columns.push(<Cell 
                    key={elementId} 
                    id={elementId} 
                    col={col} 
                    row={row} 
                    dimension={WIDTHHEIGTH}/>
                  );
            }

            elements.push(<Row
                key={row}
                id={cellID}>
                    {columns}
                </Row>);
        }

        return (
            <GameContainer cols={cols}>
                { elements }
            </GameContainer>
        );
    } 
    render() {
        let grid = this.createGrid();
        return (
            <React.Fragment>
                {grid}
            </React.Fragment>
        );
    }
}

export default Grid;

const Row = styled.div`
  position: relative;
`;

const GameContainer = styled.div`
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

//width: ${(props) => `${props.cols * WIDTHHEIGTH}px`};