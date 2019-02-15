import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getRedditApi, sortByNewest, sortByTrending } from './actions';

import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import RedditPost from './RedditPost';

// import Message from './Message';

class App extends Component {
  componentDidMount() {
    // getRedditApi();
  }
  render() {
    const {
      message,
      subreddit,
      posts,
      getRedditApi,
      sortByNewest,
      sortByTrending,
    } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <ButtonGroup>
            <Button onClick={() => getRedditApi()} type="button">
              get some reddit stuff
            </Button>
          </ButtonGroup>
        </header>
        <img src={logo} className="App-logo" alt="logo" />
        <ButtonGroup>
          {' '}
          <Button onClick={() => sortByNewest()} type="button">
            get newest
          </Button>
          <Button onClick={() => sortByTrending()} type="button">
            get trending
          </Button>
        </ButtonGroup>
        <div>
          <h1>Currently Viewing:{subreddit && `  r/${subreddit}`}</h1>
          {posts && (
            <PostList>
              {posts.map(post => {
                let singlePost = post.data;

                return <RedditPost key={singlePost.id} post={singlePost} />;
              })}
            </PostList>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  message: state.message,
  subreddit: state.subreddit,
  posts: state.posts,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ sortByNewest, sortByTrending, getRedditApi }, dispatch);

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

const PostList = styled.ul`
  text-align: left;
  list-style: none;
`;
