import { SHOW_MESSAGE, CLEAR_MESSAGE } from './actions';

const initialState = {
  text: '',
};

export default function redditApp(state = initialState, action) {
  switch (action.type) {
    case SHOW_MESSAGE:
      return {
        ...state,
        text: action.text,
      };
    case CLEAR_MESSAGE:
      return {
        ...state,
        text: action.text,
      };
    default:
      return state;
  }
}
