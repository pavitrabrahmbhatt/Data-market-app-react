import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DataList from '../DataList'
import Purchase from '../Purchase'
import IndustryView from '../IndustryView'
import { Menu } from 'semantic-ui-react'
import { Button, Form, Grid, Image, Message, Card, Icon} from 'semantic-ui-react';

class MainContainer extends Component {
  constructor(){
    super();
    this.state = {
      datasets: [],
      showPurchaseModal: false,
      showListModal: true, 
      chosenDataSetIndex: null
    }
  }

  componentDidMount() {
    console.log(this.props.userInfo.id, "HERE IS THE USER ID WHEN MAIN CONTAINER MOUNTS")
    this.getDataSets()
  }

  showModal = (id) => {
    console.log(id, "here is the dataset")
    
    const productIndex = this.state.datasets.findIndex((product) => {
      if (product.id == id) {
        return true
      }
      else return false
    })

    this.setState({
      chosenDataSetIndex: productIndex,
      showPurchaseModal: !this.state.showPurchaseModal
    })
  }
  showList = () => {
    console.log("SHOW MODAL IS BEING CLICKED")
    this.setState({
      showListModal: !this.state.showListModal
    })
  }

  updateFeed = () => {
    
    const newDataSets = this.state.datasets
    newDataSets.splice(this.state.chosenDataSetIndex, 1)
    this.setState({
      datasets: newDataSets,
      showPurchaseModal: !this.state.showPurchaseModal
    })
  }

  getDataSets = async () => {

    try {
      const responseGetDataSets = await fetch('http://localhost:8000/data/', {
        credentials: 'include',
        method: 'GET'
      });

      console.log(responseGetDataSets, ' responseGetDataSets')

      if(responseGetDataSets.status === 401) {
        console.log("you are not allowed to do that");
        /// tell  user in some meaninngulf waay that they're not authorized
      }

      const dataResponse = await responseGetDataSets.json();
      console.log(dataResponse)      

      this.setState({
        datasets: [...dataResponse.data]
      })


    } catch(err){
      console.error("here is the error we got when trying to getDataSets");
      console.error(err);
      return err
    }
  }

  render(){

    let innerModal; 
    
    if (!this.state.showListModal) {
      innerModal =  <IndustryView datasets={this.state.datasets} showPurchaseModal={this.state.showPurchaseModal} showModal={this.showModal}/>
    } else if (this.state.showListModal) {
      innerModal = <DataList datasets={this.state.datasets} showPurchaseModal={this.state.showPurchaseModal} showModal={this.showModal}/>
    }
    console.log(innerModal)

    return (
     
       <Grid columns={2} padded style={{ height: '100vh'}}>
        <Menu pointing secondary vertical>
            <Menu.Item as={ Link } to="">LOGO</Menu.Item>
            <Menu.Item as={ Link } to="/data/" >Browse Data</Menu.Item>
            <button onClick={this.showList}>View As List</button>
            <Menu.Item as={ Link } to="/sample">Sample Data</Menu.Item>
            <Menu.Item as={ Link } to="/user/:id">Profile</Menu.Item>
            <Menu.Item as={ Link } to="/data/sell">Sell Data</Menu.Item>
            <Menu.Item as={ Link } to="/">LogOut</Menu.Item>
            </Menu>
            
        {
          this.state.showPurchaseModal
          ? 
          <Purchase updateFeed={this.updateFeed} index={this.state.chosenDataSetIndex} datasets={this.state.datasets} id={this.props.userInfo.id} /> 
          : 
          innerModal
        }
     </Grid>
    )
  }
}

export default MainContainer