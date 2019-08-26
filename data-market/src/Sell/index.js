import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment, Label } from 'semantic-ui-react';

import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class Sell extends Component {
  constructor(){
    super();

    this.state = {
      name: '',
      price: '',
      user_id: '',
      industry: '',
      description: '',
      territory: '',
      source: ''
    }
    
  }
  componentDidMount() {
    this.setId()
  }

  setId = () => {
    this.setState({
      user_id: this.props.userInfo.id
    })
  }

  handleChange = (e) => {
      this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const sell = this.props.sellData(this.state);
    
    sell.then((data) => {

      if(data.status.message === 'Success'){
        this.props.history.push('/data/')

      } else {
        console.log(data, this.props)
      }
    }).catch((err) => {
      console.log(err)
    })
  }

  render(){
    console.log(this.state.user_id, "HERE IS USER ID ON THE SELL PAGE")
    return (
      
      <Grid columns={4} padded style={{ height: '100vh'}}>  

        <Menu pointing secondary vertical>
            <Menu.Item as={ Link } to="">LOGO</Menu.Item>
            <Menu.Item as={ Link } to="/data/" >Browse Data</Menu.Item>
            <Menu.Item as={ Link } to="/sample">Sample Data</Menu.Item>
            <Menu.Item as={ Link } to="/user/:id">Profile</Menu.Item>
            <Menu.Item as={ Link } to="/data/sell">Sell Data</Menu.Item>
            <Menu.Item as={ Link } to="/">LogOut</Menu.Item>
            </Menu>
        <Grid.Column>
        </Grid.Column>
        
        <Grid.Column style={{maxWidth: 400}}>
          <Header as='h2' textAlign='center'>
            Sell A Data Set
          </Header>
          <Form onSubmit={this.handleSubmit}>
              <Segment stacked>
              Title:
              <Form.Input  type='text' name='name' onChange={this.handleChange}/>
              Selling Price:
              <Form.Input  type='text' name='price' onChange={this.handleChange}/>
              Industry:
              <Form.Input  type='text' name='industry' onChange={this.handleChange}/>
              Description:
              <Form.Input  type='text' name='description' onChange={this.handleChange}/>
              Territory:
              <Form.Input  type='text' name='territory' onChange={this.handleChange}/>
              Link to File:
              <Form.Input  type='text' name='source' onChange={this.handleChange}/>
              <Button fluid size='large' type='sumbit'>Submit</Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
      )
  }
}

export default Sell;