import React from 'react'
import { Button, Form } from 'semantic-ui-react'

class EditData extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      price: 0,
      industry: '',
      description: '',
      territory: '',
      source: ''
    }
  }
  componentDidMount() {
    this.setState({
      name: this.props.data.name,
      price: this.props.data.price,
      industry: this.props.data.industry,
      description: this.props.data.description,
      territory: this.props.data.territory,
      source: this.props.data.source
    })
  }

  handleSubmit= async (e) => {

    e.preventDefault()

    try{
      const editRequest = await fetch(`http://localhost:8000/data/${this.props.dataToEditId}`,{       
        method: 'PUT',
            credentials: 'include',
            body: JSON.stringify(this.state),
            headers: {
              'Content-Type': 'application/json'
            }
          })

      if(editRequest.status !== 200){
            throw Error('editResquest not working')
          }

        console.log(editRequest,'<--editrequest');

        const editDataResponse = await editRequest.json()
      console.log(editDataResponse,'<--editDataResponse');

      this.props.updateDataSet(editDataResponse.data)
      
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
        <h5>Edit Data Set:</h5>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group >
          <Form.Field>
            Title:<input type='text' value={this.state.name}  name='name' onChange={this.handleChange}/>
          </Form.Field>
          <Form.Field>
            Price:<input type='number' value={this.state.price} name='price' onChange={this.handleChange}/>
          </Form.Field>
          <Form.Field>
            Industry: <input type='text' value={this.state.industry}  name='industry' onChange={this.handleChange}/>
          </Form.Field>
          <Form.Field>
            Description: <input type='text' value={this.state.description} name='description' onChange={this.handleChange}/>
          </Form.Field>
          <Form.Field>
            Territory: <input type='text' value={this.state.territory} name='territory' onChange={this.handleChange}/>
          </Form.Field>
          <Form.Field>
            Source: <input type='text' value={this.state.source} name='source' onChange={this.handleChange}/>
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