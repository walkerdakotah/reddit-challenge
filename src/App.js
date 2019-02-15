import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import logo from './logo.svg';
import './App.css';

import styled from 'styled-components';
import { showMessage, clearMessage } from './actions';

class App extends Component {
  render() {
    console.log('get store', store.getState());

    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <ButtonGroup>
              <Button
                onClick={() => store.dispatch(showMessage())}
                type="button"
              >
                show message
              </Button>
              <Button
                onClick={() => store.dispatch(clearMessage())}
                type="button"
              >
                clear message
              </Button>
              <Button
                onClick={() => console.log(store.getState())}
                type="button"
              >
                get state
              </Button>
            </ButtonGroup>
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;

const Button = styled.button`
  background: #fff;
  color: #333;
  padding: 0.5rem 1rem;
  margin: 1rem;
`;

const ButtonGroup = styled.div`
  display: flex;
`;
