

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PurchasedData from '../PurchasedData'
import { Button, Form, Grid, Image, Message, Card, Icon} from 'semantic-ui-react';
//import Header from '../Header'

class Profile extends Component {
  constructor(){
    super();
    this.state = {
      purchasedData: []
    }
  }
  componentDidMount() {
    console.log(this.props.userInfo.id, "HERE IS THE USER ID WHEN PROFILE MOUNTS")
    this.getPurchasedData()
  }

  getPurchasedData = async () => {
    console.log("PURCHASED DATA FUNCTION CALLED")
    try {
      const responseGetPurchasedData = await fetch(`http://localhost:8000/user/${this.props.userInfo.id}`, {
        credentials: 'include',
        method: 'GET'
      });


      // if(responseGetDataSets.status !== 200){
      //   throw Error('404 from server');
      // }

      const dataResponse = await responseGetPurchasedData.json();
      //console.log(dataResponse, ' dataResponse')
      console.log(dataResponse)
      this.setState({
        purchasedData: [...dataResponse.all_orders]
      })


    } catch(err){
      console.error(err, ' getDataSets error');
      return err
    }
  }

  render(){
    return (
      <div>
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

      <div>
      <Grid columns={2} padded style={{ height: '100vh'}}>
        
        <Grid.Column>
        Username: {this.props.userInfo.full_name} <Link to='/user/:id'>Edit</Link> <br/><br/>
        <PurchasedData orders={this.state.purchasedData}/> <br/>

        Data Sets Being Sold <br/>
        </Grid.Column>
      </Grid>
      </div>
      </div>
      )
  }
}
export default Profile;

//PurchasedData orders={this.state.purchasedData.all_orders}/> <br/>
