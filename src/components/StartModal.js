import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import {
    Button,
    Input,
    Message,
} from 'semantic-ui-react';

class Modal extends React.Component  {
    state = {
        rows: 0,
        cols: 0,
        errorMessage: '',
    }

    setFields = () => {
        const {
            rows,
            cols,
        } = this.state;

        if (rows > 20 || cols > 20 ) {
            this.setState({
                errorMessage: 'Less or equal to 20, cause it is gonna chug if is is over'
            });
            return;
        }

        if (rows === 0 || cols === 0  || cols === null || rows === null) {
            this.setState({
                errorMessage: 'It is empty for the love of god, how can you match anything there'
            });
            return;
        }

        if (rows % 2 === 1 && cols % 2 === 1) {
            this.setState({
                errorMessage: 'Both fields being odd number will produce one extra field and we dont want that cause... well you know'
            });
            return;
        }

        this.props.getValidParameters(true, rows, cols);
    }

    handleInput = (e, stateElement) => {
        this.setState({
            [stateElement]: parseInt(e.target.value)
        });
    }

    clearField = (stateElement) => {
        this.setState({
            [stateElement]: '',
            errorMessage: '',
        })
    }

    render() {
        const { errorMessage } = this.state;

        return ReactDOM.createPortal(
            <Overlay>
                <OverLayWindow>
                    <InnerBorder>
                        {!errorMessage ? ''
                            : (<Message negative>
                                {errorMessage}
                            </Message>)
                        }
                        <InputLabel>Enter number of rows:</InputLabel>
                        <FullWidthInput 
                            placeholder="Enter Width"
                            onChange={(e) => { this.handleInput(e, 'rows') }}
                            onFocus={() => {this.clearField('rows')}}
                            value={(Number.isInteger(this.state.rows) && this.state.rows > 0) ? this.state.rows : ''}
                        />
                        <InputLabel>Enter number of columns:</InputLabel>
                        <FullWidthInput 
                            placeholder="Enter Height"
                            onChange={(e) => { this.handleInput(e, 'cols') }}
                            onFocus={() => {this.clearField('cols')}}
                            value={(Number.isInteger(this.state.cols) && this.state.cols > 0) ? this.state.cols : ""}
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
    max-height: 360px;
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