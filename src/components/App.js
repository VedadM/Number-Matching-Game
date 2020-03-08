import React from 'react';
import StartModal from  './StartModal';
import Grid from './Grid';

class App extends React.Component {
  state = {
    validParameters: false,
    width: 0,
    height: 0,
  }

  getValidParameters = (isValid, w, h) => {
    this.setState({
      validParameters: isValid,
      width: w,
      height: h,
    });
  }

  createGrid = () => {
    const {width, height}  = this.state;
    
    return (
      <div>
        <Grid width={width} height={height} />
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
