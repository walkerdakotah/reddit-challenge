import { createStore } from 'redux';
import redditApp from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(redditApp, composeWithDevTools());

export default store;
