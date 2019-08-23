import React from 'react'
//import EditEmployee from '../EditEmployee'
import { Grid, Header, Card } from 'semantic-ui-react'


const DataSets = (props) => {
  

  const dataList = props.datasets.map((dataset, i) => {
    return (
      <div key={i}>
        <Card>
          <Card.Content header={dataset.name} />
          <Card.Content>
          Description: {dataset.description}<br/>
          Industry: {dataset.industry}<br/>
          Posted: {dataset.created_at.toLocaleString()}<br/>
          Territory: {dataset.territory}
          </Card.Content>
          <Card.Content extra>
            <b>{dataset.price}</b>
          </Card.Content>
        </Card>
        <button data-product={i} onClick={props.showModal.bind(null, dataset.id)}>Purchase</button>
      </div>
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


// <Grid.Column key={dataset._id}>
//   <span><b>Title</b>: {dataset.name}</span><br/>
//   <span><b>Price</b>: {dataset.price}</span><br/>
//   <span><b>Industry</b>: {dataset.industry}</span><br/>
//   <span><b>Description</b>: {dataset.description}</span><br/>
//   <span><b>Territory</b>: {dataset.territory}</span><br/>
// </Grid.Column>