import React from 'react'
import { Button, Form } from 'semantic-ui-react'

class EditProfile extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      full_name: '',
      email: '',
      password: '',
      organization_name: '',
      job_title: ''
    }
  }
  componentDidMount() {
    
      console.log(this.props.userInfo);
    this.setState({
      full_name: this.props.userInfo.full_name,
      email: this.props.userInfo.email,
      password: this.props.userInfo.password,
      organization_name: this.props.userInfo.organization_name,
      job_title: this.props.userInfo.job_title
    })
    console.log(this.state, "THIS is STATE inside edit profile");
  }

  handleSubmit= async (e) => {

    e.preventDefault()

    try{
      const editRequest = await fetch(`${process.env.REACT_APP_API_URL}/user/${this.props.userInfo.id}/account`,{       
        method: 'PUT',
            credentials: 'include',
            body: JSON.stringify(this.state),
            headers: {
              'Content-Type': 'application/json'
            }
          })

      if(editRequest.status !== 200){
            throw Error('editRequest not working')
          }

        console.log(editRequest,'<--editrequest');

        const editProfileResponse = await editRequest.json()
        console.log(editProfileResponse,'<--editDataResponse');

        this.props.updateProfile(editProfileResponse.data)
      
    }catch(err){
      console.log(err,'<--error editing data set in database')
      return err 
    }
  }

  handleChange =(e) => {
    this.setState({
      [e.currentTarget.name] : e.currentTarget.value
    })
  }

  render(props){
    return(
      <div>
        <h5>Edit Profile:</h5>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group >
          <Form.Field>
            Name:<input type='text' value={this.state.full_name}  name='full_name' onChange={this.handleChange}/>
          </Form.Field>
          <Form.Field>
            Email:<input type='text' value={this.state.email} name='email' onChange={this.handleChange}/>
          </Form.Field>
          <Form.Field>
            Password: <input type='text' value={this.state.password}  name='password' onChange={this.handleChange}/>
          </Form.Field>
          <Form.Field>
            Organization Name: <input type='text' value={this.state.organization_name} name='organization_name' onChange={this.handleChange}/>
          </Form.Field>
          <Form.Field>
            Job Title: <input type='text' value={this.state.job_title} name='job_title' onChange={this.handleChange}/>
          </Form.Field>
          </Form.Group>
          <Button>submit</Button> 
        </Form>
        <Button onClick={this.props.closeModal}>Close</Button>
      </div>
      )
   
  }
}

export default EditProfile