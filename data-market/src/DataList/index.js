import React from 'react'
import './DataList.css'
//import EditEmployee from '../EditEmployee'
import { Grid, Header, Card, Button } from 'semantic-ui-react'


const DataSets = (props) => {
  

  const dataList = props.datasets.map((dataset, i) => {
    return (
      <div key={i}>
        <Card  style={{backgroundColor: '#f3f3f3', margin: '20px', width: '315px'}}>
          <Card.Content style={{height: '50px', backgroundColor: '#26547C'}}>
          <Header style={{backgroundColor: '#26547C'}}>{dataset.name}</Header>
          </Card.Content> 
          <Card.Content style={{height: '150px', backgroundColor: '#DDDDDD'}}>
          Description: {dataset.description}<br/>
          Industry: {dataset.industry}<br/>
          Posted: {dataset.created_at.toLocaleString()}<br/>
          Territory: {dataset.territory}
          </Card.Content>
          <Card.Content extra>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div>
            <h2><b>{dataset.price}</b></h2>
            </div>
            <div>
             <Button basic color='black' floated='right' data-product={i} onClick={props.showModal.bind(null, dataset.id)}>Purchase</Button>
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

