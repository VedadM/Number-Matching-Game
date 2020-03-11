import styled from 'styled-components';

import React from 'react';
import Cell from './Cell';

const WIDTHHEIGTH = 50;

class Grid extends React.Component {
    state = {
        playGrid: null
    }

    componentDidMount() {
        const { rows, cols } = this.props;

        let numbers;
        let pairs = (rows * cols) / 2;
        let numberArray = [];
    
        // Create pair first
        for (let i = 0; i < 2; i++) {
            numbers = new Set;
            while (numbers.size < pairs) numbers.add(Math.floor(Math.random() * pairs));
    
            numberArray.push(...numbers)
        }

        let playGrid = [];
        let counter = 0;
        for (let tempRow = 0; tempRow < rows; tempRow++) {
            let tempColumns = [];

            for (let tempCol = 0; tempCol < cols; tempCol++) {
                tempColumns.push({value: numberArray[counter]});
                counter++
            }
            playGrid.push(tempColumns);
        }

        this.setState({
            playGrid,
        });
    }

    createGrid = () => {
        const { rows, cols } = this.props;
        const { playGrid } = this.state;
        let elements = [];

        if (playGrid !== null) {
            console.log('playGrid', playGrid[2][3])
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
                        values={playGrid[row][col].value}
                        dimension={WIDTHHEIGTH}/>
                    );
                }

                elements.push(<Row
                    key={row}
                    id={cellID}>
                        {columns}
                    </Row>);
            }
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