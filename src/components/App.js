import React from 'react';
import StartModal from  './StartModal';

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

  render() {
    let { validParameters, width, height } = this.state;

    let showModal = (!validParameters) ? <StartModal getValidParameters={this.getValidParameters} /> : null;

    return (
      <div>
        dsdsd
        {showModal}
        dsdsdsd
      </div>
    );
  }

}

export default App;
