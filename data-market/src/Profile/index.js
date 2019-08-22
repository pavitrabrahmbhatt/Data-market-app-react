

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Message, Card, Icon} from 'semantic-ui-react';


class Profile extends Component {
  constructor(){
    super();

    this.state = {
     email: '',
     full_name: ''
    }
  }
  render(){

    return (
      <Grid columns={2} padded style={{ height: '100vh'}}>
        <Grid.Row>
          
          <Grid.Column width={15}>
            <Header as='h2' textAlign='center'>
              Username: {this.props.userInfo.full_name} <Link to='/user/:id'>Edit</Link> <br/><br/>
              Purchased Data Sets <br/>


              Data Sets Being Sold <br/>
              
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      )
  }
}
export default Profile;