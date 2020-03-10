import React from 'react';
import styled from 'styled-components';

const Cell = props => {
    console.log(props);
    return (
        <CellBox dimension={props.dimension}>
            Cell
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
`;