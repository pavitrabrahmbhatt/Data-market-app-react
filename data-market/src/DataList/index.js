import React from 'react'
//import EditEmployee from '../EditEmployee'
import { Grid, Header } from 'semantic-ui-react'


const DataSets = (props) => {
  console.log(props, ' props in dataList')

  const dataList = props.datasets.map((dataset) => {
    return (
      <Grid.Column key={dataset._id}>
        <span><b>Title</b>: {dataset.name}</span><br/>
        <span><b>Price</b>: {dataset.price}</span><br/>
        <span><b>Industry</b>: {dataset.industry}</span><br/>
        <span><b>Description</b>: {dataset.description}</span><br/>
        <span><b>Territory</b>: {dataset.territory}</span><br/>
      </Grid.Column>
      )
  })
  return (
    <div>
      <Header as='h3' textAlign='center'>Marketplace Feed</Header>
      <Grid columns={3} padded>
        {dataList}
      </Grid>
    </div>
    )
}

export default DataSets