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
    getWords().then((json) => this.setState({nextCrossword: json}))
  }

  handleGenerate = () => {
    let currentCrossword = this.state.nextCrossword
    this.setState({ currentCrossword }, this.structureClues)
    getWords()
    .then((json) => this.setState({ nextCrossword: json }))
  }


  structureClues = () => {
    let clues = this.state.currentCrossword.map((data) => data.clue)
    let across = clues.filter((clue, i) => i % 2 === 0)
    let down = clues.filter((clue, i) => i % 2 === 1)

    let acrossNumbers = [{num: '1'}, {num: '3'}, {num: '4'}, {num: '6'}, {num: '7'}]
    let downNumbers = [{num: '2'}, {num: '3'}, {num: '5'}, {num: '6'}]

    let acrossWithNumbers = []
    let downWithNumbers = []

    for (let i=0; i<across.length; i++){
      let clue = across[i]
      let num = acrossNumbers[i]
      let numClue = Object.assign({}, {clue: clue}, num)
      acrossWithNumbers.push(numClue)
    }

    for (let i=0; i<down.length; i++){
      let clue = down[i]
      let num = downNumbers[i]
      let numClue = Object.assign({}, {clue: clue}, num)
      downWithNumbers.push(numClue)
    }

    this.setState({
      acrossClues: acrossWithNumbers,
      downClues: downWithNumbers
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Dashboard handleGenerate={this.handleGenerate}/>
        <Crossword crosswordData={this.state.currentCrossword}/>
        {this.state.acrossClues.length > 0 && this.state.downClues.length > 0 ? <Clues across={this.state.acrossClues} down={this.state.downClues}/> : null}

      </div>
    );
  }
}

export default App;
