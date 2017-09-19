import React from 'react';


class LoginForm extends React.Component {
  constructor(props) {
    super();

    this.state = {
      username: '',
      password: ''
  };

}

  //   this.handleChangeUser = this.handleChangeUser.bind(this)
  //   this.handleChangePassword = this.handleChangePassword.bind(this)
  //   this.handleSubmit = this.handleSubmit.bind(this)

  // }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const username = this.state.username
    const password = this.state.password
    if(username !== "" && password !== "") {
      this.props.onSubmit({username, password})
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
