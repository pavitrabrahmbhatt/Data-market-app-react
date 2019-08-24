import React from 'react'
import { Button, Form } from 'semantic-ui-react'

class EditData extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      price: '',
      industry: '',
      description: '',
      territory: '',
      source: ''
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
        <h5>Edit Data Set:</h5>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group >
          <Form.Field>
            Title:<input type='text'  name='name' onChange={this.handleChange}/>
          </Form.Field>
          <Form.Field>
            Price:<input type='text'  name='position' onChange={this.handleChange}/>
          </Form.Field>
          <Form.Field>
            Industry: <input type='text'  name='department' onChange={this.handleChange}/>
          </Form.Field>
          <Form.Field>
            Description: <input type='text' name='annualSalary' onChange={this.handleChange}/>
          </Form.Field>
          <Form.Field>
            Territory: <input type='text'  name='birthDate' onChange={this.handleChange}/>
          </Form.Field>
          </Form.Group>
          <Button>submit</Button> 
        </Form>
        <Button onClick={this.props.closeModal}>Close</Button>
      </div>
      )
   
  }
}

export default EditData