

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Image, Message, Card, Icon} from 'semantic-ui-react';
import { Menu } from 'semantic-ui-react'
//import Header from '../Header'

class Profile extends Component {
  constructor(){
    super();
  }

  render(){
    console.log("HERE IS THE PROFILE PAGE")
    console.log(this.props.userInfo.full_name, "HERE IS THE USERS FULL NAME")
    return (
      <Grid columns={2} padded style={{ height: '100vh'}}>
        <Menu pointing secondary vertical>
            <Menu.Item as={ Link } to="">LOGO</Menu.Item>
            <Menu.Item as={ Link } to="/data/" >Browse Data</Menu.Item>
            <Menu.Item as={ Link } to="/sample">Sample Data</Menu.Item>
            <Menu.Item as={ Link } to="/user/:id">Profile</Menu.Item>
            <Menu.Item as={ Link } to="/data/sell">Sell Data</Menu.Item>
            <Menu.Item as={ Link } to="/">LogOut</Menu.Item>
            </Menu>
        Username: {this.props.userInfo.full_name} <Link to='/user/:id'>Edit</Link> <br/><br/>
        Purchased Data Sets <br/>


        Data Sets Being Sold <br/>
      </Grid>
      )
  }
}
export default Profile;