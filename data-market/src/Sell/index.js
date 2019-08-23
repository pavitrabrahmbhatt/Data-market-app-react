import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment, Label } from 'semantic-ui-react';
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
      console.log(data.status, "HERE IS THE DATA FROM THE RESPONSE")
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
      <Grid textAlign='center' verticalAlign='middle' style={{ height: '100vh'}}>
        <Grid.Column style={{maxWidth: 450}}>
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