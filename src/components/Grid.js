import styled from 'styled-components';

import React from 'react';
import Cell from './Cell';
import ScoreBoard from './ScoreBoard';

const WIDTHHEIGTH = 50;

class Grid extends React.Component {
    state = {
        playGrid: null,
        clickedElements: [],
        matches: 0,
        clicks: 0,
    }

    componentDidMount() {
        const { rows, cols } = this.props;

        let numbers;
        let pairs = (rows * cols) / 2;
        let numberArray = [];
    
        // Create pair first
        for (let i = 0; i < 2; i++) {
            numbers = new Set();
            while (numbers.size < pairs) numbers.add(Math.floor(Math.random() * pairs));
    
            numberArray.push(...numbers)
        }

        let playGrid = [];
        let counter = 0;
        for (let tempRow = 0; tempRow < rows; tempRow++) {
            let tempColumns = [];

            for (let tempCol = 0; tempCol < cols; tempCol++) {
                tempColumns.push({
                    value: numberArray[counter],
                    isFlipped: false,
                });
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
                        value={playGrid[row][col].value}
                        isFlipped={playGrid[row][col].isFlipped}
                        flipField={this.flipField}
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
    
    flipField = (el) => {
        let { playGrid, clickedElements } = this.state;
        const { rows } =  this.props;

        this.setState({
            playGrid: [...playGrid, (el.flip) ? 
                playGrid[el.row][el.col].isFlipped = true : 
                playGrid[el.row][el.col].isFlipped = false, 
                playGrid[el.row][el.col].value = el.value].slice(0, rows),
            clickedElements: [...clickedElements, el],
        }, () => this.checkValues());
    }

    checkValues = () => {
        const { rows } = this.props;
        const {
            clickedElements, 
            playGrid,
            matches,
            clicks,
        } = this.state;

        if (clickedElements.length === 3) {
            if (clickedElements[0].value !== clickedElements[1].value) {
                this.setState({
                    playGrid: [...playGrid,
                        playGrid[clickedElements[0].row][clickedElements[0].col].isFlipped = false,
                        playGrid[clickedElements[1].row][clickedElements[1].col].isFlipped = false].slice(0, rows),
                    clickedElements: [...clickedElements.slice(2)],
                }, () => { 
                    this.setState({ clicks: clicks + 1 }) 
                });
            } else {
                this.setState({
                    clickedElements: [...clickedElements.slice(2)], 
                }, () => { 
                    this.setState({
                        matches: matches + 1,
                        clicks: clicks + 1,
                    })
                });
            }
        }
    }

    render() {
        let grid = this.createGrid();
        const { resetGame } = this.props;
        const { clicks, matches } = this.state;

        return (
            <React.Fragment>
                {grid}
                <ScoreBoard 
                    clicks={clicks}
                    matches={matches}
                />
                <ResetBox onClick={resetGame}>
                    Reset Game
                </ResetBox>
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

const ResetBox = styled.div`
    text-align: center;
`;