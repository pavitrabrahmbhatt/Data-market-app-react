

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Message, Card, Icon} from 'semantic-ui-react';


class Profile extends Component {
  constructor(props){
    super(props);
  }
  render(){
    console.log("HERE IS THE PROFILE PAGE")
    console.log(this.props.userInfo.full_name, "HERE IS THE USERS FULL NAME")
    return (
      <Grid columns={2} padded style={{ height: '100vh'}}>
        
              Username: {this.props.userInfo.full_name} <Link to='/user/:id'>Edit</Link> <br/><br/>
              Purchased Data Sets <br/>


              Data Sets Being Sold <br/>
      </Grid>
      )
  }
}
export default Profile;