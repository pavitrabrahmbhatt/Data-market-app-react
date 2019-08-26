
import React, { Component } from 'react'
import { Grid, Header, Card } from 'semantic-ui-react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class SampleData extends Component {
   constructor() {
      super() //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
         students: [
            { id: 'Month', name: '6/1/2018', age: '6/3/2018', email: '6/7/2018' },
            { id: 'ZipCode', name: '60532', age: '60198', email: '10984' },
            { id: 'Average Listing Price', name: '$275K', age: '$175K', email: '$3.9M' },
            { id: 'Days on Market', name: '111', age: '25', email: '79' }
         ]
      }
   }

   renderTableData() {
      return this.state.students.map((student, index) => {
         const { id, name, age, email } = student //destructuring
         return (
            <tr key={id}>
               <td>{id}</td>
               <td>{name}</td>
               <td>{age}</td>
               <td>{email}</td>
            </tr>
         )
      })
   }

   render() {
      return (
      	<Grid columns={2} padded style={{ height: '100vh'}}>
         <Menu pointing secondary vertical>
            <Menu.Item as={ Link } to="">LOGO</Menu.Item>
            <Menu.Item as={ Link } to="/data/" >Browse Data</Menu.Item>
            <Menu.Item as={ Link } to="/sample">Sample Data</Menu.Item>
            <Menu.Item as={ Link } to="/user/:id">Profile</Menu.Item>
            <Menu.Item as={ Link } to="/data/sell">Sell Data</Menu.Item>
            <Menu.Item as={ Link } to="/">LogOut</Menu.Item>
            </Menu>
  	



    
      
    
    
            <h1 id='title'>U.S. Real Estate Inventory</h1>
            <table id='students'>
               <tbody>
                  {this.renderTableData()}
               </tbody>
            </table>
         
      </Grid>
      )
}
}

export default SampleData //exporting a component ma