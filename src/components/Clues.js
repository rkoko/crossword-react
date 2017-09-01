import React from 'react'


const Clues = (props) => {
  return(
    <div>
      <div className="ui equal width grid clue-containter" id="clues">
      <div className="column center-align">
        <div className="clue-divs">
          <h2>Across</h2>
          <ul className="answer-text" id="across">
            {props.across.map((clue) => <li>{clue.num + '. ' + clue.clue} <br/> <br/></li>)}
          </ul>
        </div>
      </div>

      <div className="column center-align">
        <div className="clue-divs">
          <h2>Down</h2>
          <ul className="answer-text" id="down">
            {props.down.map((clue) =>  <li>{clue.num + '. ' + clue.clue} <br/> <br/> </li>)}
          </ul>
        </div>
      </div>
    </div>
    </div>
  )
}


export default Clues
