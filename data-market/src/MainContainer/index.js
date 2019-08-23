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

  showModal = (id) => {
    console.log(id, "here is the dataset")
    
    const productIndex = this.state.datasets.findIndex((product) => {
      if (product.id == id) {
        return true
      }
      else return false
    })

    this.setState({
      chosenDataSetIndex: productIndex,
      showPurchaseModal: !this.state.showPurchaseModal
    })
  }

  updateFeed = () => {
    console.log("UPDATE FEED IS WORKING")
    const newDataSets = this.state.datasets
    newDataSets.splice(this.state.chosenDataSetIndex, 1)
    this.setState({
      datasets: newDataSets,
      showPurchaseModal: !this.state.showPurchaseModal
    })
  }

  getDataSets = async () => {

    try {
      const responseGetDataSets = await fetch('http://localhost:8000/data/datalist', {
        credentials: 'include',
        method: 'GET'
      });

      console.log(responseGetDataSets, ' responseGetDataSets')

      if(responseGetDataSets.status !== 200){
        throw Error('404 from server');
      }

      const dataResponse = await responseGetDataSets.json();
      console.log(dataResponse, ' dataResponse')

      this.setState({
        datasets: [...dataResponse.data]
      })


    } catch(err){
      console.error(err, ' getDataSets error');
      return err
    }
  }

  render(){
    
    return (
      <div>
        {
          this.state.showPurchaseModal
          ? 
          <Purchase updateFeed={this.updateFeed} index={this.state.chosenDataSetIndex} datasets={this.state.datasets} id={this.props.userInfo.id} /> 
          : 
          <DataList datasets={this.state.datasets} showPurchaseModal={this.state.showPurchaseModal} showModal={this.showModal}/>
        }
      </div>
    )
  }
}

export default MainContainer