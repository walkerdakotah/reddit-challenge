// constants
export const SHOW_MESSAGE = 'SHOW_MESSAGE';
export const CLEAR_MESSAGE = 'CLEAR_MESSAGE';
export const REDDIT_API_REQUEST = 'REDDIT_API_REQUEST';
export const SORT_BY_NEWEST = 'SORT_BY_NEWEST';
export const SORT_BY_TRENDING = 'SORT_BY_TRENDING';
export const SORT_BY_TOP = 'SORT_BY_TOP';
export const SORT_BY_BEST = 'SORT_BY_BEST';

const subreddit = 'politics';
// action creators
export function showMessage() {
  return { type: SHOW_MESSAGE, message: 'Redux is up and going!' };
}

export function clearMessage() {
  return { type: CLEAR_MESSAGE, message: '' };
}

export function getRedditApi() {
  return async function(dispatch) {
    const res = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
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
      `https://www.reddit.com/r/${subreddit}/search.json?q=new`
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
      `https://www.reddit.com/r/${subreddit}/search.json?q=hot`
    );
    const data = await res.json();

    // todo - action to catch request errors
    dispatch({
      type: SORT_BY_TRENDING,
      posts: data.data.children,
    });
  };
}
export function sortByTop() {
  return async function(dispatch) {
    const res = await fetch(`https://www.reddit.com/r/${subreddit}/top`);
    const data = await res.json();

    // todo - action to catch request errors
    dispatch({
      type: SORT_BY_TOP,
      posts: data.data.children,
    });
  };
}
export function sortByBest(posts) {
  return async function(dispatch) {
    const sortedPosts = posts.sort((a, b) => a.data.ups - b.data.ups);
    dispatch({
      type: SORT_BY_BEST,
      posts: sortedPosts,
    });
  };
}
