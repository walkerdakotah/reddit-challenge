import React, { Component } from 'react';

import { connect } from 'react-redux';
import { showMessage, clearMessage } from './actions';

import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { bindActionCreators } from '../../../Library/Caches/typescript/3.3/node_modules/redux';

// import Message from './Message';

class App extends Component {
  render() {
    const { message, showMessage, clearMessage } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{message}</p>
          <ButtonGroup>
            <Button onClick={() => showMessage()} type="button">
              show message
            </Button>
            <Button onClick={() => clearMessage()} type="button">
              clear message
            </Button>
          </ButtonGroup>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  message: state.message,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ showMessage, clearMessage }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

const Button = styled.button`
  background: #fff;
  color: #333;
  padding: 0.5rem 1rem;
  margin: 1rem;
`;

const ButtonGroup = styled.div`
  display: flex;
`;
