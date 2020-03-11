import React from 'react';
import styled from 'styled-components';

const Cell = props => {
    return (
        <CellBox dimension={props.dimension}>
            <NumberBox>{props.values}</NumberBox>
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

const NumberBox = styled.div`
    position: relative;
    height: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    font-size: 15px;
`;