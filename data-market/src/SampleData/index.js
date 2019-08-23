
import React, { Component } from 'react'
import { Grid, Header, Card } from 'semantic-ui-react'

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
         <div>
         <div>
  	<div class="ui borderless left vertical menu">
          <a href='' class="item">
            LOGO
          </a>
          <a href='/data' class="item">
            <i class="grid layout icon"></i> Browse Data
          </a>
          <a href='/sample' class="item">
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



    
      
    
    </div>
            <h1 id='title'>U.S. Real Estate Inventory</h1>
            <table id='students'>
               <tbody>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>
      </Grid>
      )
}
}

export default SampleData //exporting a component ma