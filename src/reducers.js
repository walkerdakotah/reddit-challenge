import {
  SHOW_MESSAGE,
  CLEAR_MESSAGE,
  REDDIT_API_REQUEST,
  SORT_BY_NEWEST,
  SORT_BY_TRENDING,
  SORT_BY_TOP,
  SORT_BY_BEST,
} from './actions';

const initialState = {
  message: '',
  subreddit: null,
  posts: [],
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
    case REDDIT_API_REQUEST:
      return {
        ...state,
        subreddit: action.subreddit,
        posts: action.posts,
      };
    case SORT_BY_NEWEST:
      return {
        ...state,
        posts: action.posts,
      };
    case SORT_BY_TRENDING:
      return {
        ...state,
        posts: action.posts,
      };
    case SORT_BY_TOP:
      return {
        ...state,
        posts: action.posts,
      };
    case SORT_BY_BEST:
      return {
        ...state,
        posts: action.sortedPosts,
      };
    default:
      return state;
  }
}
