import React from 'react';

class Grid extends React.Component {
    createGrid = () => {
        const {width, height} = this.props;

        return (
            <div>
                {width} - {height}
            </div>
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