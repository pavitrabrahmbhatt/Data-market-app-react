import React from 'react'
//import EditEmployee from '../EditEmployee'
import { Grid, Header, Card } from 'semantic-ui-react'


const IndustryView = (props) => {
  console.log(props.datasets, "HERE IS Datasets IN INDUSTRY VIEW")
  const sortedSets = props.datasets.slice().sort((a, b) => {
    if (a.industry < b.industry) {
      return -1
    }
    if (a.industry > b.industry) {
      return 1
    }

    return 0
  })
  console.log(sortedSets, "HERE IS THE SORTED SET")
  const dataList = sortedSets.map((dataset, i) => {
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



export default IndustryView