import React, {Component} from 'react'
import {Button} from 'semantic-ui-react'


class Dashboard extends Component{
  render(){
    return(
      <Button primary onClick={this.props.handleGenerate}>Generate Crossword</Button>
    )
  }
}

export default Dashboard
