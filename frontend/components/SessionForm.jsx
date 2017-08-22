import React from 'react';

class SessionForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleChange(field) {
    if (field === "username") {
      return (e) => this.setState({username: e.target.value});
    } else if (field === "password") {
      return (e) => this.setState({password: e.target.value});
    }
  }

  render() {
    return (
      <div>
        { this.props.errors.length > 0 &&
          <label>Errors
            <ul>
              { this.props.errors.map( (err, idx) => {
                return (
                  <li key={idx}>{ err }</li> 
                );
              }) }
            </ul>
          </label>
        }
        <form type="submit" onSubmit={this.handleSubmit}>
          <label>Username
            <input type="text" onChange={this.handleChange("username")} name="user[username]" value={this.state.username} />
          </label>
          <label>Password
            <input type="text" onChange={this.handleChange("password")} name="user[password]" value={this.state.password} />
          </label>
          <button>{ this.props.formType }</button>
        </form>
      </div>
    );
  }
}

export default SessionForm;
