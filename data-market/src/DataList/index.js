import React from 'react'
//import EditEmployee from '../EditEmployee'
import { Grid, Header, Card, Button } from 'semantic-ui-react'


const DataSets = (props) => {
  

  const dataList = props.datasets.map((dataset, i) => {
    return (
      <div key={i}>
        <Card>
          <Card.Content header={dataset.name} style={{height: '50px'}} />
          <Card.Content style={{height: '150px'}}>
          Description: {dataset.description}<br/>
          Industry: {dataset.industry}<br/>
          Posted: {dataset.created_at.toLocaleString()}<br/>
          Territory: {dataset.territory}
          </Card.Content>
          <Card.Content extra>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div>
            <b>{dataset.price}</b>
            </div>
            <div>
             <Button floated='right' data-product={i} onClick={props.showModal.bind(null, dataset.id)}>Purchase</Button>
          </div>
          </div>
          </Card.Content>
        </Card>
       
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

