

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Image, Message, Card, Icon} from 'semantic-ui-react';
//import Header from '../Header'

class Profile extends Component {
  constructor(){
    super();
  }
  render(){

    return (
      <Grid columns={2} padded style={{ height: '100vh'}}>

        <div class="ui borderless left vertical menu">
          <a href='' class="item">
            LOGO
          </a>
          <a href='/data' class="item">
            <i class="grid layout icon"></i> Browse Data
          </a>
          <a href='/sample'class="item">
            Sample Data
          </a>
          <a href='/user/:id' class="item">
            Profile
          </a>
          <a href='/'>
          <div class="item">
            <div class="ui button">Log-Out</div>
          </div>
          </a>
        </div>
        Username: {this.props.userInfo.full_name} <Link to='/user/:id'>Edit</Link> <br/><br/>
        Purchased Data Sets <br/>


        Data Sets Being Sold <br/>
      </Grid>
      )
  }
}
export default Profile;