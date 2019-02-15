// constants
export const SHOW_MESSAGE = 'SHOW_MESSAGE';
export const CLEAR_MESSAGE = 'CLEAR_MESSAGE';
export const REDDIT_API_REQUEST = 'REDDIT_API_REQUEST';
export const SORT_BY_NEWEST = 'SORT_BY_NEWEST';
export const SORT_BY_TRENDING = 'SORT_BY_TRENDING';

// action creators
export function showMessage() {
  return { type: SHOW_MESSAGE, message: 'Redux is up and going!' };
}

export function clearMessage() {
  return { type: CLEAR_MESSAGE, message: '' };
}

export function getRedditApi() {
  return async function(dispatch) {
    const res = await fetch(`https://www.reddit.com/r/copywriting.json`);
    const data = await res.json();

    // todo - action to catch request errors
    dispatch({
      type: REDDIT_API_REQUEST,
      subreddit: data.data.children[0].data.subreddit,
      posts: data.data.children,
    });
  };
}

export function sortByNewest() {
  return async function(dispatch) {
    const res = await fetch(
      `https://www.reddit.com/r/copywriting/search.json?q=new`
    );
    const data = await res.json();

    // todo - action to catch request errors
    dispatch({
      type: SORT_BY_NEWEST,
      posts: data.data.children,
    });
  };
}
export function sortByTrending() {
  return async function(dispatch) {
    const res = await fetch(
      `https://www.reddit.com/r/copywriting/search.json?q=hot`
    );
    const data = await res.json();

    // todo - action to catch request errors
    dispatch({
      type: SORT_BY_TRENDING,
      posts: data.data.children,
    });
  };
}
