import React, { Component } from 'react';
import Crossword from './components/Crossword'
import Clues from './components/Clues'
import Dashboard from './components/Dashboard'
import {getWords} from './apiAdapter'
import './App.css';

class App extends Component {

  constructor(){
    super()

    this.state = {
      currentCrossword: [],
      nextCrossword: [],
      acrossClues: [],
      downClues: []

    }
  }


  componentDidMount(){
    getWords()
    .then((json) => this.setState({nextCrossword: json}, this.structureClues))
  }

  handleGenerate = () => {
    let currentCrossword = this.state.nextCrossword
    getWords()
    .then((json) => this.setState({nextCrossword: json, currentCrossword: currentCrossword}, this.structureClues))

  }

  structureClues = () => {
    let clues = this.state.nextCrossword.map((data) => data.clue)
    let across = clues.filter((clue, i) => i % 2 === 0)
    let down = clues.filter((clue, i) => i % 2 === 1)
    this.setState({
      acrossClues: across,
      downClues: down
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Dashboard handleGenerate={this.handleGenerate}/>
        <Crossword />
        {this.state.acrossClues.length > 0 && this.state.downClues.length > 0 ? <Clues across={this.state.acrossClues} down={this.state.downClues}/> : null}

      </div>
    );
  }
}

export default App;
