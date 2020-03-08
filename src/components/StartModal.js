import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import {
    Button,
    Input,
} from 'semantic-ui-react';

class Modal extends React.Component  {
    state = {
        width: 0,
        heigth: 0,
    }

    setFields = () => {
        const { width, heigth } = this.state;
        this.props.getValidParameters(true, width, heigth);
    }

    handleInput = (e, stateElement) => {
        this.setState({
            [stateElement]: parseInt(e.target.value)
        });
    }

    clearField = (stateElement) => {
        this.setState({
            [stateElement]: ''
        })
    }

    render() {
        return ReactDOM.createPortal(
            <Overlay>
                <OverLayWindow>
                    <InnerBorder>
                        <InputLabel>Enter grid width:</InputLabel>
                        <FullWidthInput 
                            placeholder="Enter Width"
                            onChange={(e) => { this.handleInput(e, 'width') }}
                            onFocus={() => {this.clearField('width')}}
                            value={(Number.isInteger(this.state.width) && this.state.width > 0) ? this.state.width : ''}
                        />
                        <InputLabel>Enter grid height:</InputLabel>
                        <FullWidthInput 
                            placeholder="Enter Height"
                            onChange={(e) => { this.handleInput(e, 'heigth') }}
                            onFocus={() => {this.clearField('heigth')}}
                            value={(Number.isInteger(this.state.heigth) && this.state.heigth > 0) ? this.state.heigth : ""}
                        />
                        <FullButton 
                            onClick={this.setFields}
                        >Set It
                        </FullButton>
                    </InnerBorder>
                </OverLayWindow>
            </Overlay>,
            document.querySelector('#modal')
        );
    }
};
  
export default Modal;

const Overlay = styled.div`
    max-height: 100%;
    display: flex;
    position: absolute;
    height: 100%;
    width: 100%;
    opacity: 0.5;
    background-color: black;
    align-items: center;
    justify-content: center;
    top: 0;
`;

const OverLayWindow = styled.div`
    max-height: 300px;
    height: 100%;
    background-color: white;
    max-width: 500px;
    width: 100%;
    border-radius: 10px;
    padding: 30px;
`;

const InnerBorder = styled.div`
    border: 1px solid grey;
    border-radius: 10px;
    padding: 20px;
    height: 100%;
`;

const FullWidthInput = styled(Input)`
    width: 100%;
    margin-bottom: 10px;
`;

const InputLabel = styled.div`
    padding: 5px 0;
`;

const FullButton = styled(Button)`
    width: 100%;
`;