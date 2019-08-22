import React, { Component } from 'react';

class Login extends Component {
  constructor(){
    super();

    this.state = {
      email: '',
      password: ''
    }
  }
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }
  handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const loginResponse = await fetch('http://localhost:9000/auth', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const parsedResponse = await loginResponse.json();

      if(parsedResponse.data === 'login successful'){
       
        this.props.history.push('/dogs')
      }


    } catch (err) {

    }
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        Email:
        <input type='text' name='email' onChange={this.handleChange}/>
        Password:
        <input type='password' name='password' onChange={this.handleChange}/>
        <button type='sumbit'>Login</button>
      </form>
      )
  }
}

export default Login;







