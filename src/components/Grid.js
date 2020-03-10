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
                id={cellID}
                cols={cols}>
                    {columns}
                </Row>);
        }

        return (
            <React.Fragment>
                { elements }
            </React.Fragment>
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
  display: flex;
  width: ${(props) => `${props.cols * WIDTHHEIGTH}px`};
`;