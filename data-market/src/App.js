import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './Login';
import Register from './Register'

const My404 = () =>{
  return (
    <div>
      You are lost
    </div>
  )
}

class App extends Component {
  constructor(){
    super();
    this.state = {
      full_name: '',
      email: '',
      loggedIn: false
    }
  }
 
  register = async (data) => {

     try {

      const registerResponse = await fetch('http://localhost:8000/user/register', {
        method: 'POST',
        credentials: 'include', 
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json' 
        }
      })

      const parsedResponse = await registerResponse.json();

    } catch (err) {
      console.log(err)
    }
  }

  render(){
      return (
        <main>
          <Switch>
            <Route exact path="/" render={(props) => <Login {...props} logIn={this.logIn} />} />
            <Route exact path="/register" render={(props) => <Register {...props} register={this.register} /> } />
            <Route component={My404} />
          </Switch>
        </main>
    );
  }
}

export default App;