import React from 'react';
import * as _ from 'lodash';
import FA from 'react-fontawesome';

// TODO: change this to login modal entirely, and make SignupModal a separate thing.
class SignupModal extends React.Component {
  
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
      
      <div className='modal-wrapper'>
        <div id='signup-modal' className='modal'>
          <div id='modal-close'>
            {/* TODO:
              Temporary. Loaded in application.html.erb.
              Find a better way to load assets. */}
            <img src={ window.staticImages.x } />
          </div>
          <div className='signup-modal-g-fb-links'>
            Sign up with Facebook or Google
          </div>
          <div className='divider-wrapper'>
            <span className='divider-fill'></span>
            <span className='divider-content'>
              or
            </span>
            <span className='divider-fill'></span>
          </div>
          <div className='title-wrapper'>
            <span className="title modal-title">{ this.props.titleText }</span>
          </div>
          <div>
            <form onSubmit={ this.handleSubmit }>
              <div className='input-wrapper'>
                <div className='input-inner-wrapper'>
                  <input type="text"
                    placeholder='Email Address'
                    onChange={ this.handleChange('username') }/>
                </div>
                <div className='input-inner-icon'>
                  <FA name='envelope-o' size='2x' />
                </div>
              </div>
              <div className='input-wrapper'>
                <div className='input-inner-wrapper'>
                  <input type="text" 
                    placeholder='First name'
                    onChange={ this.handleChange('f_name') }/>
                </div>
                <div className='input-inner-icon'>
                  <FA name='user-o' size='2x' />
                </div>
              </div>
              <div className='input-wrapper'>
                <div className='input-inner-wrapper'>
                  <input type="text" 
                    placeholder='Last name'
                    onChange={ this.handleChange('l_name') }/>
                </div>
                <div className='input-inner-icon'>
                  {/* <FA name='' size='2x' /> */}
                </div>
              </div>
              <div className='input-wrapper'>
                <div className='input-inner-wrapper'>
                  <input type="password"
                    placeholder='Create a Password'
                    onChange={ this.handleChange('password') }/>
                </div>
                <div className='input-inner-icon'>
                  <FA name='lock' size='2x' />
                </div>
              </div>
              {/* <div>
                <span>Birthday</span>
              </div>
              <div>
                <select>
                  <option disabled value>Month</option>
                </select>
                <select>
                  <option disabled value>Day</option>
                </select>
                <select>
                  <option disabled value>Year</option>
                </select>
              </div> */}
              <div className='button-wrapper'>
                <button className='modal-button submit-button' type="submit">{ this.props.buttonText }</button>
              </div>
              <div className='divider-wrapper' id='footer-divider'>
                <span className='divider-fill'></span>
              </div>
              <div id='login-signup'>
                <span>Don't have an account? </span>
                Sign Up
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
  
}

export default SignupModal;