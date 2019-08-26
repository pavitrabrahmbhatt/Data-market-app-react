import React from 'react'
//import EditEmployee from '../EditEmployee'
import { Grid, Header, Card } from 'semantic-ui-react'


const DataSet = () => {
  console.log(this.props.datasets.datasets[0].name)
  //product = props
  return (
    <div>
      <Header as='h3' textAlign='center'>Marketplace Feed</Header>
      <Grid columns={3} padded>
       
      </Grid>
    </div>
    )
}

export default DataSet

