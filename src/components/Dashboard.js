import React, {Component} from 'react'
import {Button} from 'semantic-ui-react'


class Dashboard extends Component{
  render(){
    return(
      <div>
        <Button primary onClick={this.props.handleGenerate}>Generate Crossword</Button>
      </div>


    )
  }
}

export default Dashboard
