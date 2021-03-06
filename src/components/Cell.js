import React from 'react';
import styled from 'styled-components';

const Cell = props => {
    const {
        dimension, 
        flipField,
        value,
        row, 
        col,
        isFlipped,
        matched,
    } = props;

    const updateGrid = () => {
        if (!isFlipped) {
            let flippedElement = {
                row,
                col,
                value,
                flip: !isFlipped
            };
            
            flipField(flippedElement)
        }
    }

    return (
        <CellBox
            className={(isFlipped) ? 'flipped' : 'unflipped'}
            dimension={dimension}
            matched={matched}
            onClick={updateGrid}
        >
            <NumberBox>{value}</NumberBox>
        </CellBox>
    );
}

export default Cell;

const CellBox = styled.div`
    width: ${(props) => props.dimension - 4}px;
    height: ${(props) => props.dimension - 4}px;
    display: inline-block;
    border: 1px solid gray;
    border-radius: 10px;
    margin: 2px;
    transition: all 0.3s linear;
    transform-style: preserve-3d;
    transform: rotateY(180deg);
    background-color: ${(props) => (props.matched) ? 'grey' : 'white' };

    &.flipped {
        transform: rotateY(0deg);
    }

    &.unflipped {
        transform: rotateY(180deg);
    }
`;

const NumberBox = styled.div`
    position: relative;
    height: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    font-size: 15px;
    backface-visibility:hidden;
    cursor: pointer;
`;