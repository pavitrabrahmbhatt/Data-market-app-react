import React from 'react'
//import EditEmployee from '../EditEmployee'
import { Grid, Header, Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom';


const PurchasedData = (props) => {
  console.log(props, ' props in dataList')
  

  const purchaseList = props.orders.map((dataset, i) => {
    return (
      <Grid.Column>
      <Card key={i}>
        <Card.Content header={dataset.product_id.name} />
        <Card.Content>
        Description: {dataset.product_id.description}<br/>
        Industry: {dataset.product_id.industry}<br/>
        Posted: {dataset.created_at.toLocaleString()}<br/>
        Territory: {dataset.product_id.territory}
        </Card.Content>
        <Card.Content extra>
          <Link to='https://docs.google.com/spreadsheets/d/19VpWW9cddV-z6RK48U31JDtsnARb3an5dv6q9EDBFpA/edit#gid=0'>DOWNLOAD</Link>
        </Card.Content>
      </Card>
      </Grid.Column>
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