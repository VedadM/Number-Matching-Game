import React from 'react';
import styled from 'styled-components';

import StartModal from  './StartModal';
import Grid from './Grid';

class App extends React.Component {
  state = {
    validParameters: false,
    rows: 0,
    cols: 0,
  }

  getValidParameters = (isValid, rows, cols) => {
    this.setState({
      validParameters: isValid,
      rows,
      cols,
    });
  }

  resetGame = () => {
    this.setState({
      validParameters: false,
      rows: 0,
      cols: 0,
    }); 
  }

  createGrid = () => {
    const { rows, cols }  = this.state;
    
    return (
      <div>
        <GameHeader>
          Vedad's Matching Game
        </GameHeader>
        <Grid
          rows={rows}
          cols={cols}
          resetGame={this.resetGame}
        />
      </div>
    );
  }

  render() {
    let { validParameters } = this.state;

    // Keeping Grid and Modal variables separate so not to create confusion
    let showModal = (!validParameters) ? <StartModal getValidParameters={this.getValidParameters} /> : null;
    let grid = (validParameters)  ? this.createGrid() : null;

    return (
      <div>
        {showModal}
        {grid}
      </div>
    );
  }

}

export default App;

const GameHeader = styled.div`
  text-align: center;
  font-size: 25px;
  display: flex;
  margin: 15px 15px;
  justify-content: center;
`;
