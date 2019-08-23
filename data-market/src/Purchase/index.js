import React from 'react'
//import DataSet from '../DataSet'

class Purchase extends React.Component {
  constructor(){
    super()

  }
  orderDataSet = async (e) => {
    e.preventDefault();

    try {
      const createOrderResponse = await fetch(`http://localhost:8000/order/${this.props.datasets[0].id}`, {
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

    // const createEmployee = await createEmployeeResponse.json();
    // console.log(createEmployee, ' createEmployeeResponse');

    // this.setState({
    //   employees: [...this.state.employees, createEmployee.data]
    // })

    } catch (err) {
      console.error(err, ' createOrder');
      return err
    }
  }
  render(){
<<<<<<< HEAD
    // console.log(this.props, "YOOOO");
=======
    console.log("this.props in Purchase")
    console.log(this.props.datasets[0])
    console.log(this.props.id, "HERE IS THE ID INSIDE THE PURCHASE CONTAINER")
>>>>>>> 2df4b04ca0ffdc1817746d2a07813905d71a74e6
    return(
      <div>
        <h5>PURCHASE PAGE</h5>
        <div>Title: {this.props.datasets[0].name} 
             Industry: {this.props.datasets[0].name}
             <button onClick={this.orderDataSet}>Order</button>
        </div>
      </div>
    )
  }
}


export default Purchase