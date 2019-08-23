import React from 'react'
//import EditEmployee from '../EditEmployee'
import { Grid, Header, Card } from 'semantic-ui-react'


const PurchasedData = (props) => {
  console.log(props, ' props in dataList')
  

  const purchaseList = props.orders.map((dataset, i) => {
    return (
      <div>
      <Card key={i}>
        <Card.Content header={dataset.product_id.name} />
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
      
      </div>
    )
  })
  return (
    <div>
      <Header as='h3' textAlign='center'>Purchased Data Sets</Header>
      <Grid columns={3} padded>
        {purchaseList}
      </Grid>
    </div>
    )
}

export default PurchasedData

//button data-product={i} onClick={props.showModal.bind(null, dataset.id)}>Purchase</button>