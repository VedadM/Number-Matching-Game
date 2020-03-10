import React from 'react';
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

  createGrid = () => {
    const { rows, cols }  = this.state;
    
    return (
      <div>
        <Grid rows={rows} cols={cols} />
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
