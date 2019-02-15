import { createStore, applyMiddleware } from 'redux';
import redditApp from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const store = createStore(
  redditApp,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
