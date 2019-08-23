import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DataList from '../DataList'
import Purchase from '../Purchase'


class MainContainer extends Component {
  constructor(){
    super();
    this.state = {
      datasets: [],
      showPurchaseModal: false, 
      chosenDataSetIndex: null
    }
  }

  componentDidMount() {
    // console.log(URL);
    this.getDataSets()
  }

  showModal = (dataSet) => {
    console.log(dataSet, ' dataSetID in show Modal')
    this.setState({
      chosenDataSetIndex: dataSet,
      showPurchaseModal: !this.state.showPurchaseModal
    })
  }

  getDataSets = async () => {

    try {
      const responseGetDataSets = await fetch('http://localhost:8000/data/datalist', {
        credentials: 'include',
        method: 'GET'
      });

      //console.log(responseGetDataSets, ' responseGetDataSets')

      if(responseGetDataSets.status !== 200){
        throw Error('404 from server');
      }

      const dataResponse = await responseGetDataSets.json();
      //console.log(dataResponse, ' dataResponse')

      this.setState({
        datasets: [...dataResponse.data]
      })


    } catch(err){
      console.error(err, ' getDataSets error');
      return err
    }
  }

  render(){
<<<<<<< HEAD
    // console.log(this.state.datasets[0].name, '<--state in render');
=======
    console.log(this.state, '<--state in render');
    console.log(this.props.userInfo.id, "HERE IS THE ID INSIDE MAIN CONTAINER")
>>>>>>> 2df4b04ca0ffdc1817746d2a07813905d71a74e6
    return (
      <div>
        {
          this.state.showPurchaseModal
          ? 
          <Purchase datasets={this.state.datasets} id={this.props.userInfo.id}/> 
          : 
          <DataList datasets={this.state.datasets} showPurchaseModal={this.state.showPurchaseModal} showModal={this.showModal}/>
        }
      </div>
    )
  }
}

export default MainContainer