import { SHOW_MESSAGE, CLEAR_MESSAGE } from './actions';

const initialState = {
  message: '',
};

export default function redditApp(state = initialState, action) {
  switch (action.type) {
    case SHOW_MESSAGE:
      return {
        ...state,
        message: action.message,
      };
    case CLEAR_MESSAGE:
      return {
        ...state,
        message: action.message,
      };
    default:
      return state;
  }
}
