import React from 'react'
import { Link } from 'react-router-dom'
//import DataSet from '../DataSet'


class Purchase extends React.Component {
  constructor(props){
    super(props)

  }
  orderDataSet = async (e) => {
    e.preventDefault();

    try {
      const createOrderResponse = await fetch(`http://localhost:8000/order/${this.props.datasets[this.props.index].id}`, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    console.log(createOrderResponse, 'createOrder fetch')

    if(createOrderResponse.status !== 200) {
      throw Error('Resource not found')
    }

    this.props.updateFeed()


    } catch (err) {
      console.error(err, ' createOrder');
      return err
    }



  }
  render(){
    
    return(
      <div>
        <h5>PURCHASE PAGE</h5>
        <div>Title: {this.props.datasets[this.props.index].name} 
             Industry: {this.props.datasets[this.props.index].industry}
             <button onClick={this.orderDataSet}>Order</button>
        </div>
      

      <div>
        <Link to='/data/'>Feed</Link>
      </div>
      </div>
    )
  }
}


export default Purchase