
import React, { Component } from 'react';
import './App.css';
import Mycars from './components/Mycars'

class App extends Component {
  state ={
    titre :"mon catalogue voiture"
  }
  changeTitle = (e) => {
    this.setState({
      titre:'Mon nouveau titre'
    })
  }

  changeViaParam = (param) => {
    this.setState({
      titre: param
    })
  }

  changeViaBind = (param) => {
    this.setState({
      titre: param
    })
  }
  changeViaInput = (e) => {
    this.setState({
      titre: e.target.value})

  }

  render() {
    return (
      <div className="App">
        <Mycars title= {this.state.titre}/>

        <button onClick={this.changeTitle} style={ { margin: '0 5px'}}>Changer le nom en dur</button>
        <button onClick={() => this.changeViaParam('titre via param')} style={ { margin: '0 5px'}}>Changer le nom en dur</button>
        <button onClick={this.changeViaBind.bind(this,'coucou')}style={ { margin: '0 5px'}}>Changer le nom en dur</button>
        <input type='text'onChange={this.changeViaInput} value={this.state.titre}/>
      </div> 
    );
  };
}

export default App;
