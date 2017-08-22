import React from 'react';
import * as _ from 'lodash';
import FA from 'react-fontawesome';

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
      <div className='modal-container'>
        <div id='login-modal' className='contentBox'>
          <div>
            <span className="title modal-title">{ this.props.titleText }</span>
          </div>
          <div>
            <form onSubmit={ this.handleSubmit }>
              <div className='input-container'>
                <div className='input-inner-container'>
                  <input type="text" onChange={ this.handleChange('username') }/>
                </div>
                <div className='input-inner-icon'>
                  <FA name='envelope-o' size='2x' />
                </div>
              </div>
              <div className='input-container'>
                <div className='input-inner-container'>
                  <input type="password" onChange={ this.handleChange('password') }/>
                </div>
                <div className='input-inner-icon'>
                  <FA name='lock' size='2x' />
                </div>
              </div>
              <div className='button-container'>
                <button className='submit-button' type="submit">{ this.props.buttonText }</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
  
}

export default AuthModal;