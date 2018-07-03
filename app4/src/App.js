import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    }
    this.getCars = this.getCars.bind(this)
  }

  getCars() {
    axios.get('https://joes-autos.herokuapp.com/api/vehicles')
    .then(res => {
      this.setState({
        cars: res.data
      })
    })
  }

  render() {
    let finalCars = this.state.cars.map((obj, i) => {
      return (
        <div key={i}>
          <h3>id: {obj.id}</h3>
          <h3>color: {obj.color}</h3>
          <h3>make: {obj.make}</h3>
          <h3>model: {obj.model}</h3>
          <h3>price: {obj.price}</h3>
          <h3>year: {obj.year}</h3>
        </div>
      )
    })
    return (
      <div className="App">
        <button onClick={this.getCars}>Get cars</button>
        {finalCars}
      </div>
    );
  }
}

export default App;
