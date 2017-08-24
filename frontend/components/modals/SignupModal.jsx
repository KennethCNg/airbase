import React from 'react';
import * as _ from 'lodash';
import FA from 'react-fontawesome';
import ModalErrors from '../alerts/ModalErrors';

const initialState = {
  email: '',
  password: '',
  firstname: '',
  lastname: '',
};

// TODO: change this to login modal entirely, and make SignupModal a separate thing.
class SignupModal extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.clickLogin = this.clickLogin.bind(this);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const user = _.merge({}, this.state);
    // check if fields are empty here.
    this.props.handleSubmit(user);
  }
  
  handleChange(fieldName) {
    if (fieldName === 'email') {
      return e => this.setState({ email: e.target.value });
    } else if (fieldName === 'password') {
      return e => this.setState({ password: e.target.value });
    } else if (fieldName === 'firstname') {
      return e => this.setState({ firstname: e.target.value });
    } else if (fieldName === 'lastname') {
      return e => this.setState({ lastname: e.target.value });
    }
  }
  
  handleCloseModal(e) {
    if (e.currentTarget === e.target) {  
      e.stopPropagation();
      this.props.toggleSignupModal();
    }
  }
  
  clickLogin(e) {
    e.preventDefault();
    this.props.toggleLoginModal();
  }
  
  render() {
    if (this.props.display) {
      return (
        <div onClick={ this.handleCloseModal } className='modal-wrapper'>
          <div id='signup-modal' className='modal'>
            <div id='modal-close'>
              {/* TODO:
                Temporary. Loaded in application.html.erb.
                Find a better way to load assets. */}
              <button>
                <img onClick={ this.handleCloseModal } src={ window.staticImages.x } />
              </button>
            </div>
            {/* <div className='signup-modal-g-fb-links'>
              Sign up with Facebook or Google
            </div> */}
            {/* <div className='divider-wrapper'>
              <span className='divider-fill'></span>
              <span className='divider-content'>
                or
              </span>
              <span className='divider-fill'></span>
            </div> */}
            <div className='title-wrapper'>
              <span className="title modal-title">{ this.props.titleText }</span>
            </div>
            { this.props.errors.length > 0 &&
              <ModalErrors errors={ this.props.errors } />
            }
            <div>
              <form onSubmit={ this.handleSubmit }>
                <div className='input-wrapper'>
                  <div className='input-inner-wrapper'>
                    <input type="email"
                      placeholder='Email Address'
                      onChange={ this.handleChange('email') }/>
                  </div>
                  <div className='input-inner-icon'>
                    <FA name='envelope-o' size='2x' />
                  </div>
                </div>
                <div className='input-wrapper'>
                  <div className='input-inner-wrapper'>
                    <input type="text" 
                      placeholder='First name'
                      onChange={ this.handleChange('firstname') }/>
                  </div>
                  <div className='input-inner-icon'>
                    <FA name='user-o' size='2x' />
                  </div>
                </div>
                <div className='input-wrapper'>
                  <div className='input-inner-wrapper'>
                    <input type="text" 
                      placeholder='Last name'
                      onChange={ this.handleChange('lastname') }/>
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
                  <span>Already have an account? </span>
                  <a href="" onClick={ this.clickLogin }>Log in</a>
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

export default SignupModal;