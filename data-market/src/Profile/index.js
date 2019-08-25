

import React, { Component } from 'react';
import './Profile.css'
import { Link } from 'react-router-dom';
import PurchasedData from '../PurchasedData'
import { Button, Form, Grid, Image, Message, Card, Icon, Header, Divider} from 'semantic-ui-react';
import { Menu, Container } from 'semantic-ui-react'
import SoldData from '../SoldData'
import EditData from '../EditData'

//import Header from '../Header'

class Profile extends Component {
  constructor(){
    super();
    this.state = {
      purchasedData: [],
      soldData: [],
      showEditModal: false,
      dataToEditId: '',
      name: '',
      price: 0,
      industry: '',
      description: '',
      territory: '',
      source: ''
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
        purchasedData: [...dataResponse.all_orders],
        soldData: [...dataResponse.all_products]
      })


    } catch(err){
      console.error(err, ' getDataSets error');
      return err
    }
  }
  updateDataSet = (dataSetEdited) => {
    const dataSetEditedArray = this.state.soldData.map(dataSet => {
      if (dataSet.id === dataSetEdited.id) {
        dataSet = dataSetEdited
      }
      return dataSet
    })
    this.setState({
      soldData: dataSetEditedArray,
      showEditModal: !this.state.showEditModal
    })
  }
  closeModal = () => {
    this.setState({
      dataToEditId: '',
      showEditModal: !this.state.showEditModal
    })
  }
  showModal = (dataSet) => {
    console.log(dataSet, "HERE IS THE DATASET SELECTED FOR EDIT")
    this.setState({
      dataToEditId: dataSet.id,
      name: dataSet.name,
      price: dataSet.price,
      industry: dataSet.industry,
      description: dataSet.description,
      territory: dataSet.territory,
      source: dataSet.source,
      showEditModal: !this.state.showEditModal
    })
  }
  deleteDataSet = async (dataSetId) => {
    console.log(dataSetId, " id of data set to delete")

    try {
      const removeDataSet = await fetch(`http://localhost:8000/data/${dataSetId}`, {
        method: 'Delete',
        credentials: 'include'
      })

      if (removeDataSet.status !== 200) {
        throw Error('delete request not working')
      }
      const removeDataSetJson = await removeDataSet.json()
      console.log(removeDataSetJson)

      this.setState({
        soldData: this.state.soldData.filter((dataset) => dataset.id !== dataSetId)
      })
    } catch (err) {
      console.log(err)
      return err
    }
  }

  render(){
    return (
      <div>
      <Grid columns={2}>
      
      <Menu pointing secondary vertical>
            <Menu.Item as={ Link } to="">LOGO</Menu.Item>
            <Menu.Item as={ Link } to="/data/" >Browse Data</Menu.Item>
            <Menu.Item as={ Link } to="/sample">Sample Data</Menu.Item>
            <Menu.Item as={ Link } to="/user/:id">Profile</Menu.Item>
            <Menu.Item as={ Link } to="/data/sell">Sell Data</Menu.Item>
            <Menu.Item as={ Link } to="/">LogOut</Menu.Item>
            </Menu>
      
      <Grid.Column>
      {this.props.userInfo.full_name} <br/> 
          <Link to='/user/:id'>Edit</Link>
        <Grid.Row>
       <PurchasedData orders={this.state.purchasedData}/> <br/>
        </Grid.Row>
        <Grid.Row>
        
        {this.state.showEditModal ? <EditData data={this.state} updateDataSet={this.updateDataSet} dataToEditId={this.state.dataToEditId} closeModal={this.closeModal}/> : <SoldData showModal={this.showModal} soldData={this.state.soldData} deleteDataSet={this.deleteDataSet}/>}
        </Grid.Row>
        </Grid.Column>
      </Grid>
      </div>
      
      )
  }
}
export default Profile;


