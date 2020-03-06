import React from 'react';
import ReactDOM from 'react-dom';
import {
    Button,
    Segment,
} from 'semantic-ui-react';

class Modal extends React.Component  {
    setFields = () => {
        console.log("?????");
    }

    render() {
        return ReactDOM.createPortal(
            <Segment size="small">
              <Button onClick={this.setFields}>Set It</Button>
            </Segment>,
            document.querySelector('#modal')
        );
    }

  };
  
  export default Modal;