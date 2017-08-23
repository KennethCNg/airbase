import React from 'react';
import * as _ from 'lodash';
import FA from 'react-fontawesome';

// TODO: change this to login modal entirely, and make SignupModal a separate thing.
class LoginModal extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
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
  
  handleCloseModal(e) {
    e.stopPropagation();
    this.props.toggleModal();
  }
  
  render() {
    if (this.props.display) {
      return (
        <div onClick={ this.handleCloseModal } className='modal-wrapper'>
          <div id='login-modal' className='modal'>
            <div id='modal-close'>
              {/* TODO:
                Temporary. Loaded in root.html.erb.
                Find a better way to load assets. */}
              <button onClick={ this.handleCloseModal } >
                <img src={ window.staticImages.x } />
              </button>
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
                    <input type="password"
                      placeholder='Password'
                      onChange={ this.handleChange('password') }/>
                  </div>
                  <div className='input-inner-icon'>
                    <FA name='lock' size='2x' />
                  </div>
                </div>
                <div className='button-wrapper'>
                  <button className='modal-button submit-button' type="submit">{ this.props.buttonText }</button>
                </div>
                <div id='forgot-password'>
                  <span>Forgot Password?</span>
                </div>
                <div className='divider-wrapper'>
                  <span className='divider-fill'></span>
                  <span className='divider-content'>
                    or continue with
                  </span>
                  <span className='divider-fill'></span>
                </div>
                <div className='omniauth-wrapper'>
                  <div className='omniauth-button-wrapper'>
                    <button className='modal-button omniauth-button' type="submit">
                      <img src={ window.staticImages.modal_fb } />Facebook
                    </button>
                  </div>
                  <div className='omniauth-button-wrapper'>
                    <button className='modal-button omniauth-button' type="submit">
                      <img src={ window.staticImages.modal_g } />Google
                    </button>
                  </div>
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
    } else {
      return (
        <div></div>
      );
    }
  }
  
}

export default LoginModal;