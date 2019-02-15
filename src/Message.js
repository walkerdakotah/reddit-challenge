import React from 'react';
import { connect } from 'react-redux';

function Message(text) {
  return <p>{text}</p>;
}

const mapStateToProps = state => ({
  text: state.text,
});

export default connect(mapStateToProps)(Message);
