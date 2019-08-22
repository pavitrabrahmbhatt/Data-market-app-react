import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DataList from '../DataList'



class MainContainer extends Component {
  constructor(){
    super();
    this.state = {
      datasets: []
    }
  }

  componentDidMount() {
    // console.log(URL);
    this.getDataSets()
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
    console.log(this.state, '<--state in render');
    return (
      <div>
        <DataList datasets={this.state.datasets}/>
      </div>
      )
  }
}

export default MainContainer