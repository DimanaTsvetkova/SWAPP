import React, { Component } from 'react';

import '../styles/login.scss';

class LoginForm extends Component {
  state = { email: '', password: '' };

  setCreditentials = e => {
    let { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.login({ variables: { email: this.state.email, password: this.state.password } });

  };
  render() {
    return (
      <div className="main-bg">
        <div className="container">
          <h1 className="logo">SWAPP</h1>
          {
            this.props.error ? <h4 className="err" style={{ opacity: 1 }}>Invalid creditentials</h4> : <h4 className="err" style={{ opacity: 0 }}>Invalid creditentials</h4>

          }
          <form onSubmit={this.handleSubmit}>
            <label className="err"></label>
            <input className="input-field" name="email" type="email" value={this.state.email} onChange={this.setCreditentials} />
            <input className="input-field" name="password" type="password" value={this.state.password} onChange={this.setCreditentials} />

            <button className="btn">Login</button>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm;
