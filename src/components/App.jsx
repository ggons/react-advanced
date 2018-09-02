import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import * as actions from 'actions';

class App extends Component {
  renderButton() {
    if (this.props.auth)
      return <button onClick={() => this.props.changeAuth(false)}>Sign Out</button>
    else 
      return <button onClick={() => this.props.changeAuth(true)}>Sign In</button>
  }

  render() { 
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/post">Post A Commit</Link></li>
          <li>{ this.renderButton() }</li>
        </ul>
        <Route path="/post" component={CommentBox} />
        <Route path="/" exact component={CommentList} />
      </div>
    )
  }
}
 
export default connect(
  state => ({
    auth: state.auth.isLoggedIn
  }),
  actions
)(App);