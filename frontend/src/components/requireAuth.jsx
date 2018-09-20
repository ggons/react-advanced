import React, { Component } from 'react';
import { connect } from 'react-redux';

const requireAuth = (ChildComponent) => {
  class ComposeComponent extends Component {
    componentDidMount() {
      this.shouldNavigateAway();
    }
  
    componentDidUpdate() {
      this.shouldNavigateAway();
    }
  
    shouldNavigateAway() {
      if (!this.props.auth) {
        this.props.history.push('/');
      }
    }

    render() { 
      return <ChildComponent {...this.props} />;
    }
  }

  return connect(
    state => ({
      auth: state.auth
    })
  )(ComposeComponent);
}
 
export default requireAuth;