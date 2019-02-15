import React from 'react';
import styled from 'styled-components';

function RedditPost({ post }) {
  return (
    <PostItem>
      <User>posted by u/{post.author}</User>
      <h2>{post.title}</h2>
      <ItemFlex>
        <Stat>Score: {post.score}</Stat>
        <Stat>Upvotes: {post.ups}</Stat>
        <Stat>Downvotes: {post.downs}</Stat>
      </ItemFlex>
    </PostItem>
  );
}

export default RedditPost;

const PostItem = styled.li`
  margin: 1rem 0;
`;

const User = styled.p`
  font-size: 1rem;
`;

const ItemFlex = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 4rem;
`;

const Stat = styled.div`
  margin-right: 1rem;
`;
