import React from 'react'
//import EditEmployee from '../EditEmployee'
import { Grid, Header, Card } from 'semantic-ui-react'


const SoldData = (props) => {
  console.log(props, ' props in dataList')
  

  const soldList = props.soldData.map((dataset, i) => {
    return (
      <Grid.Column>
      <Card key={i}>
        <Card.Content header={dataset.name} />
        <Card.Content>
        Description: {dataset.description}<br/>
        Industry: {dataset.industry}<br/>
        Posted: {dataset.created_at.toLocaleString()}<br/>
        Territory: {dataset.territory}
        </Card.Content>
        <Card.Content extra>
          <button>DOWNLOAD</button>
        </Card.Content>
      </Card>
      </Grid.Column>
    )
  })
  return (
    <div>
      <Header as='h3' textAlign='center'>Sold Data Sets</Header>
      <Grid columns={3} padded>
        {soldList}
      </Grid>
    </div>
    )
}

export default SoldData