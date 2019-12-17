import React, {Component} from 'react';
import Button from 'react-bootstrap/Button'

class Misson extends Component{
	constructor(){
		super()
		this.state = {
			red: true
		}
	}

    changeColor(){
    	this.state.red? this.setState({isClicked: this.state.red = false}) : this.setState({isClicked: this.state.red = true});
    }

    render(){
    	let btn_class = this.state.red? "danger" : "success";

	   return (
		  <Button className = 'text-wrap text-capitalize m-1' variant= {btn_class} onClick={this.changeColor.bind(this)}>
		    {this.props.misson}
		  </Button>	  
	  );
    }
}

export default Misson;