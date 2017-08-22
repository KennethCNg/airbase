import React from 'react';

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
        <form>
          <input type="text" onChange={ this.handleChange('username') }/>
          <input type="password" onChange={ this.handleChange('password') }/>
        </form>
      </div>
    );
  }
  
}