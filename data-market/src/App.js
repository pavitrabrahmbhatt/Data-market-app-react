import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './Login';
import Purchase from './Purchase'
import MainContainer from './MainContainer'
import Register from './Register'
import Profile from './Profile'

import SampleData from './SampleData'

import Sell from './Sell'



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
      password: '',
      email: '',
      full_name: '',
      id: 0,
      loggedIn: false,
      loading: true
    }
  }
  logIn = async (loginInfo) => {
    try {

      const loginResponse = await fetch('http://localhost:8000/user/login', {
        method: 'POST',
        credentials: 'include',// on every request we have to send the cookie
        body: JSON.stringify(loginInfo),
        headers: {
          'Content-Type': 'application/json'
        }
      })


      const parsedResponse = await loginResponse.json();
      console.log(parsedResponse.data.id, "THIS IS THE PARSED RESPONSE")


      this.setState(() => {
        return {
          ...parsedResponse.data,
          loading: false
        }
      })


      return parsedResponse

    } catch (err) {
      console.log(err);
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
  sellData = async (data) => {

     try {

      const sellResponse = await fetch('http://localhost:8000/data/sell', {
        method: 'POST',
        credentials: 'include', 
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json' 
        }
      })

      const parsedResponse = await sellResponse.json();

      console.log("here is parsedRespoinse in sellData in App.js")
      console.log(parsedResponse)

      this.setState(() => {
        return {
          ...parsedResponse.data,
          loading: false
        }
      })
      return parsedResponse

    } catch (err) {
      console.log(err)
    }
  }

  render(){
      return (
        <main>
          <Switch>
            <Route exact path="/" render={(props) => <Login {...props} logIn={this.logIn} />} />
            <Route exact path="/data/sell" render={(props) => <Sell {...props} userInfo={this.state} sellData={this.sellData} /> } />
            <Route exact path='/data/' render={(props) => <MainContainer {...props} userInfo={this.state} /> } />
            <Route exact path='/data/:id' render={(props) => <Purchase {...props} userInfo={this.state} /> } />
            <Route exact path="/register" render={(props) => <Register {...props} register={this.register} /> } />
            <Route exact path="/user/:id" render={(props) => <Profile {...props} userInfo={this.state}/> } />
            <Route exact path="/sample" render={(props) => <SampleData {...props} userInfo={this.state}/> } />
            <Route component={My404} />
          </Switch>
        </main>


    )



  }
}


export default App