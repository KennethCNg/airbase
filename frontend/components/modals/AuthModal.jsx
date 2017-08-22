import React from 'react';
import * as _ from 'lodash';

// TODO: change this to login modal entirely, and make SignupModal a separate thing.
class AuthModal extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const user = _.merge({}, this.state);
    this.props.handleSubmit(user);
  }
  
  handleChange(fieldName) {
    if (fieldName === 'username') {
      return e => this.setState({ username: e.target.value });
    } else if (fieldName === 'password') {
      return e => this.setState({ password: e.target.value });
    }
  }
  
  render() {
    return (
      <div id='auth-modal' className='contentBox'>
        <form onSubmit={ this.handleSubmit }>
          <input type="text" onChange={ this.handleChange('username') }/>
          <input type="password" onChange={ this.handleChange('password') }/>
          <button type="submit">{ this.props.buttonText }</button>
        </form>
      </div>
    );
  }
  
}

export default AuthModal;