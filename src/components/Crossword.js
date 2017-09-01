import React, {Component} from 'react';
import {Button} from 'semantic-ui-react'

class Crossword extends Component{

  constructor(){
    super()

    this.state={
      box1: '',
      box2: '',
      box3: '',
      box4: '',
      box5: '',
      box13: '',
      box21: '',
      box29: '',
      box35: '',
      box36: '',
      box37: '',
      box43: '',
      box51: '',
      box59: '',
      box67: '',
      box68: '',
      box69: '',
      box70: '',
      box71: '',
      box79: '',
      box85: '',
      box86: '',
      box87: '',
      box93: '',
      box101: '',
      box109: '',
      box113: '',
      box114: '',
      box115: '',
      box116: '',
      box117: '',
      box118: '',
      box119: '',
      box120: ''
    }
  }

  handleChange = (event) =>{
    let currentInput = event.target.id
    let value = event.target.value

    this.setState({
      [currentInput]: value
    })
  }

  combineLetters = () =>{
    let one_across = this.state.box1 + this.state.box2 + this.state.box3 + this.state.box4 + this.state.box5
    let two_down = this.state.box5 + this.state.box13 + this.state.box21 + this.state.box29 + this.state.box37
    let three_across = this.state.box35 + this.state.box36 + this.state.box37
    let three_down = this.state.box35 + this.state.box43 + this.state.box51 + this.state.box59 + this.state.box67
    let four_across = this.state.box67 + this.state.box68 + this.state.box69 + this.state.box70 + this.state.box71
    let five_down = this.state.box71 + this.state.box79 + this.state.box87
    let six_across = this.state.box85 + this.state.box86 + this.state.box87
    let six_down = this.state.box85 + this.state.box93 + this.state.box101+this.state.box109+this.state.box117
    let seven_across = this.state.box113+this.state.box114+this.state.box115+this.state.box116+this.state.box117+this.state.box118+this.state.box119+this.state.box120

    let submittedAnswers = [
      one_across,
      two_down,
      three_across,
      three_down,
      four_across,
      five_down,
      six_across,
      six_down,
      seven_across
    ]

    this.checkAnswers(submittedAnswers)
  }

  checkAnswers = (answers) => {
    let key = this.props.crosswordData.map(data => data.answer.toUpperCase())
    let submittedAnswers = answers.map(answer => answer.toUpperCase())

    for (let i = 0; i < key.length; i++) {
      if (key[i] !== submittedAnswers[i]) {
        alert('you lose!! hahaha!')
        return
      }
    }
    alert('you win.')
    return
  }

  handleSubmit = (event) =>{
    event.preventDefault();
    let subAns = this.combineLetters()
  }

  resetState() {
    this.setState({
      box1: '',
      box2: '',
      box3: '',
      box4: '',
      box5: '',
      box13: '',
      box21: '',
      box29: '',
      box35: '',
      box36: '',
      box37: '',
      box43: '',
      box51: '',
      box59: '',
      box67: '',
      box68: '',
      box69: '',
      box70: '',
      box71: '',
      box79: '',
      box85: '',
      box86: '',
      box87: '',
      box93: '',
      box101: '',
      box109: '',
      box113: '',
      box114: '',
      box115: '',
      box116: '',
      box117: '',
      box118: '',
      box119: '',
      box120: ''
    })
    this.props.resetGen()
  }

  render(){
    console.log(this.props.crosswordData)

    this.props.generateBool ? this.resetState() : null
  return(
    <div>
      <form onSubmit={this.handleSubmit}>
        <Button color='green' type='submit'>Submit Crossword</Button>

    <div id="wrapper">

      <div className="empty numbered" id="1"><input type="text" id="box1" className="textbox" maxLength="1" onChange={this.handleChange} value={this.state.box1} /><p className="letters" id="p-1" /></div>
      <div className="empty" id="2"><input type="text" id="box2" className="textbox" maxLength="1" onChange={this.handleChange} value={this.state.box2}/><p className="letters" id="p-2"/></div>
      <div className="empty" id="3"><input type="text" id="box3" className="textbox" maxLength="1" onChange={this.handleChange} value={this.state.box3}/><p className="letters" id="p-3"/></div>
      <div className="empty" id="4"><input type="text" id="box4" className="textbox" maxLength="1" onChange={this.handleChange} value={this.state.box4}/><p className="letters" id="p-4"/></div>
      <div className="empty numbered" id="5"><input type="text" id="box5" className="textbox" maxLength="1" onChange={this.handleChange} value={this.state.box5}/><p className="letters" id="p-5"/></div>
      <div className="filled" id="6"></div>
      <div className="filled" id="7"></div>
      <div className="filled" id="8"></div>

      <div className="filled" id="9"></div>
      <div className="filled" id="10"></div>
      <div className="filled" id="11"></div>
      <div className="filled" id="12"></div>
      <div className="empty" id="13"><input type="text" id="box13" className="textbox" maxLength="1" onChange={this.handleChange} value={this.state.box13} /><p className="letters" id="p-13"/></div>
      <div className="filled" id="14"></div>
      <div className="filled" id="15"></div>
      <div className="filled" id="16"></div>

      <div className="filled" id="17"></div>
      <div className="filled" id="18"></div>
      <div className="filled" id="19"></div>
      <div className="filled" id="20"></div>
      <div className="empty" id="21"><input type="text" id="box21" className="textbox" maxLength="1" onChange={this.handleChange} value={this.state.box21} /><p className="letters" id="p-21" /></div>
      <div className="filled" id="22"></div>
      <div className="filled" id="23"></div>
      <div className="filled" id="24"></div>

      <div className="filled" id="25"></div>
      <div className="filled" id="26"></div>
      <div className="filled" id="27"></div>
      <div className="filled" id="28"></div>
      <div className="empty" id="29"><input type="text" id="box29" className="textbox" maxLength="1" onChange={this.handleChange} value={this.state.box29} /><p className="letters" id="p-29" /></div>
      <div className="filled" id="30"></div>
      <div className="filled" id="31"></div>
      <div className="filled" id="32"></div>

      <div className="filled" id="33"></div>
      <div className="filled" id="34"></div>
      <div className="empty numbered" id="35"><input type="text" id="box35" className="textbox" maxLength="1" onChange={this.handleChange} value={this.state.box35} /><p className="letters" id="p-35" /></div>
      <div className="empty" id="36"><input type="text" id="box36" className="textbox" maxLength="1" onChange={this.handleChange} value={this.state.box36} /><p className="letters" id="p-36" /></div>
      <div className="empty" id="37"><input type="text" id="box37" className="textbox" maxLength="1" onChange={this.handleChange} value={this.state.box37} /><p className="letters" id="p-37" /></div>
      <div className="filled" id="38"></div>
      <div className="filled" id="39"></div>
      <div className="filled" id="40"></div>

      <div className="filled" id="41"></div>
      <div className="filled" id="42"></div>
      <div className="empty" id="43"><input type="text" id="box43" className="textbox" maxLength="1" onChange={this.handleChange} value={this.state.box43} /><p className="letters" id="p-43" /></div>
      <div className="filled" id="44"></div>
      <div className="filled" id="45"></div>
      <div className="filled" id="46"></div>
      <div className="filled" id="47"></div>
      <div className="filled" id="48"></div>

      <div className="filled" id="49"></div>
      <div className="filled" id="50"></div>
      <div className="empty" id="51"><input type="text" id="box51" className="textbox" maxLength="1" onChange={this.handleChange} value={this.state.box51} /><p className="letters" id="p-51" /></div>
      <div className="filled" id="52"></div>
      <div className="filled" id="53"></div>
      <div className="filled" id="54"></div>
      <div className="filled" id="55"></div>
      <div className="filled" id="56"></div>

      <div className="filled" id="57"></div>
      <div className="filled" id="58"></div>
      <div className="empty" id="59"><input type="text" id="box59" className="textbox" maxLength="1" onChange={this.handleChange} value={this.state.box59} /><p className="letters" id="p-59" /></div>
      <div className="filled" id="60"></div>
      <div className="filled" id="61"></div>
      <div className="filled" id="62"></div>
      <div className="filled" id="63"></div>
      <div className="filled" id="64"></div>

      <div className="filled" id="65"></div>
      <div className="filled" id="66"></div>
      <div className="empty numbered" id="67"><input type="text" id="box67" className="textbox" maxLength="1" onChange={this.handleChange} value={this.state.box67} /><p className="letters" id="p-67" /></div>
      <div className="empty" id="68"><input type="text" id="box68" className="textbox" maxLength="1" onChange={this.handleChange} value={this.state.box68} /><p className="letters" id="p-68" /></div>
      <div className="empty" id="69"><input type="text" id="box69" className="textbox" maxLength="1" onChange={this.handleChange} value={this.state.box69} /><p className="letters" id="p-69" /></div>
      <div className="empty" id="70"><input type="text" id="box70" className="textbox" maxLength="1" onChange={this.handleChange} value={this.state.box70} /><p className="letters" id="p-70" /></div>
      <div className="empty numbered" id="71"><input type="text" id="box71" className="textbox" maxLength="1" onChange={this.handleChange} value={this.state.box71} /><p className="letters" id="p-71" /></div>
      <div className="filled" id="72"></div>

      <div className="filled" id="73"></div>
      <div className="filled" id="74"></div>
      <div className="filled" id="75"></div>
      <div className="filled" id="76"></div>
      <div className="filled" id="77"></div>
      <div className="filled" id="78"></div>
      <div className="empty" id="79"><input type="text" id="box79" className="textbox" maxLength="1" onChange={this.handleChange} value={this.state.box79} /><p className="letters" id="p-79" /></div>
      <div className="filled" id="80"></div>

      <div className="filled" id="81"></div>
      <div className="filled" id="82"></div>
      <div className="filled" id="83"></div>
      <div className="filled" id="84"></div>
      <div className="empty numbered" id="85"><input type="text" id="box85" className="textbox" maxLength="1" onChange={this.handleChange} value={this.state.box85} /><p className="letters" id="p-85" /></div>
      <div className="empty" id="86"><input type="text" id="box86" className="textbox" maxLength="1" onChange={this.handleChange} value={this.state.box86} /><p className="letters" id="p-86" /></div>
      <div className="empty" id="87"><input type="text" id="box87" className="textbox" maxLength="1" onChange={this.handleChange} value={this.state.box87} /><p className="letters" id="p-87" /></div>
      <div className="filled" id="88"></div>

      <div className="filled" id="89"></div>
      <div className="filled" id="90"></div>
      <div className="filled" id="91"></div>
      <div className="filled" id="92"></div>
      <div className="empty" id="93"><input type="text" id="box93" className="textbox" maxLength="1" onChange={this.handleChange} value={this.state.box93} /><p className="letters" id="p-93" /></div>
      <div className="filled" id="94"></div>
      <div className="filled" id="95"></div>
      <div className="filled" id="96"></div>

      <div className="filled" id="97"></div>
      <div className="filled" id="98"></div>
      <div className="filled" id="99"></div>
      <div className="filled" id="100"></div>
      <div className="empty" id="101"><input type="text" id="box101" className="textbox" maxLength="1" onChange={this.handleChange} value={this.state.box101} /><p className="letters" id="p-101" /></div>
      <div className="filled" id="102"></div>
      <div className="filled" id="103"></div>
      <div className="filled" id="104"></div>

      <div className="filled" id="105"></div>
      <div className="filled" id="106"></div>
      <div className="filled" id="107"></div>
      <div className="filled" id="108"></div>
      <div className="empty" id="109"><input type="text" id="box109" className="textbox" maxLength="1" onChange={this.handleChange} value={this.state.box109} /><p className="letters" id="p-109" /></div>
      <div className="filled" id="110"></div>
      <div className="filled" id="111"></div>
      <div className="filled" id="112"></div>

      <div className="empty numbered" id="113"><input type="text" id="box113" className="textbox" maxLength="1" onChange={this.handleChange} value={this.state.box113} /><p className="letters" id="p-113" /></div>
      <div className="empty" id="114"><input type="text" id="box114" className="textbox" maxLength="1" onChange={this.handleChange} value={this.state.box114} /><p className="letters" id="p-114" /></div>
      <div className="empty" id="115"><input type="text" id="box115" className="textbox" maxLength="1" onChange={this.handleChange} value={this.state.box115} /><p className="letters" id="p-115" /></div>
      <div className="empty" id="116"><input type="text" id="box116" className="textbox" maxLength="1" onChange={this.handleChange} value={this.state.box116} /><p className="letters" id="p-116" /></div>
      <div className="empty" id="117"><input type="text" id="box117" className="textbox" maxLength="1" onChange={this.handleChange} value={this.state.box117} /><p className="letters" id="p-117" /></div>
      <div className="empty" id="118"><input type="text" id="box118" className="textbox" maxLength="1" onChange={this.handleChange} value={this.state.box118} /><p className="letters" id="p-118" /></div>
      <div className="empty" id="119"><input type="text" id="box119" className="textbox" maxLength="1" onChange={this.handleChange} value={this.state.box119} /><p className="letters" id="p-119" /></div>
      <div className="empty" id="120"><input type="text" id="box120" className="textbox" maxLength="1" onChange={this.handleChange} value={this.state.box120} /><p className="letters" id="p-120" /></div>
    </div>

</form>
</div>

  )}
}

export default Crossword
