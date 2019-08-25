import React from 'react'
//import EditEmployee from '../EditEmployee'
import { Grid, Header, Card } from 'semantic-ui-react'


const SoldData = (props) => {
  console.log(props, ' props in dataList')
  

  const soldList = props.soldData.map((dataset, i) => {
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
          <button onClick={props.showModal.bind(null, dataset)}>Edit</button><br/>
          <button onClick={props.deleteDataSet.bind(null, dataset.id)}>Remove</button>
        </Card.Content>
      </Card>
      
      </div>
    )
  })
  return (
    <div>
      <Header as='h3' textAlign='center'>Sold Data Sets</Header>
      <Grid rows={3} padded>
        {soldList}
      </Grid>
    </div>
    )
}

export default SoldData