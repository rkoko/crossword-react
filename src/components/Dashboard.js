import React, {Component} from 'react'
import {Button} from 'semantic-ui-react'


class Dashboard extends Component{
  render(){
    return(
      <div>
        {this.props.nextCrossword.length > 0 ? <Button primary onClick={this.props.handleGenerate}>Generate Crossword</Button> : null}
      </div>


    )
  }
}

export default Dashboard
