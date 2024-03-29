import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Register extends Component {
  constructor(){
    super();

    this.state = {
      full_name: '',
      email: '',
      password: '',
      organization_name: '',
      job_title: ''
    }

  }

  handleChange = (e) => {
      this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const register = this.props.register(this.state);

    register.then((data) => {
      console.log(data, "HERE IS THE DATA IN THE REGISTER COMPONENET")
      if(data.status.message === 'Success'){
        this.props.history.push('/data/')
      } else {
        console.log(data)
      }
    }).catch((err) => {
      console.log(err)
    })

  }

  render(){
    return (
      <Grid textAlign='center' verticalAlign='middle' style={{ height: '100vh'}}>
        <Grid.Column style={{maxWidth: 450}}>
          <Header as='h2' textAlign='center'>
            Register
          </Header>
          <Form onSubmit={this.handleSubmit}>
              <Segment stacked>
              Name:
              <Form.Input placeholder='Name' type='text' name='full_name' onChange={this.handleChange}/>
              Email:
              <Form.Input placeholder='Email' type='text' name='email' onChange={this.handleChange}/>
              Password:
              <Form.Input placeholder='Password' type='password' name='password' onChange={this.handleChange}/>
              Organization Name:
              <Form.Input placeholder='Organization Name' type='text' name='organization_name' onChange={this.handleChange}/>
              Job Title:
              <Form.Input placeholder='Job Title' type='text' name='job_title' onChange={this.handleChange}/>

              <a href='/'>
              <Button fluid size='large' type='sumbit'>Register</Button>
              </a>
              <Message>
                Already a member? <Link to='/'>Login</Link>
              </Message>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
      )
  }
}

export default Register;