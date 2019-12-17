import React , { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Greeting from './Components/Greeting/Greeting';
import MissonsList from './Components/MissonsList/MissonsList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { myMissons } from './Components/MissonsList/myMissons';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

class App extends Component {
    constructor(props) {
    super(props);
    this.state = {
      myMissonsList: myMissons,
      addedMisson: '',
      selectedTimeUnit: "daily"
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = (event) => {
    this.setState({addedMisson: event.target.value});
  }

  handleSelectChange = (event) => {
    this.setState({selectedTimeUnit: event.target.value});
  }

  handleSubmit = (event) => {
    switch(this.state.selectedTimeUnit) {
      case "daily" : {
        myMissons.daily.push(this.state.addedMisson)
        this.setState({myMissonsList: myMissons});
        event.preventDefault();
        break;
      }
      case "weekly" : {
        myMissons.weekly.push(this.state.addedMisson)
        this.setState({myMissonsList: myMissons});
        event.preventDefault();
        break;
      }
      case "monthly" : {
        myMissons.monthly.push(this.state.addedMisson)
        this.setState({myMissonsList: myMissons});
        event.preventDefault();
        break;
      }
      case "annualy" : {
        myMissons.annualy.push(this.state.addedMisson)
        this.setState({myMissonsList: myMissons});
        event.preventDefault();
        break;
      }
      case "lifetime" : {
        myMissons.lifetime.push(this.state.addedMisson)
        this.setState({myMissonsList: myMissons});
        event.preventDefault();
        break;
      }
      default : {
        window.alart('error')

      }
    }
  }


  render(){
    return (
      <div className="App">
        <Navigation  />
        <Greeting />
        <form onSubmit={this.handleSubmit}>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>
                {'add mission: '}
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl aria-describedby="basic-addon3"  value={this.state.addedMisson} onChange={this.handleInputChange}/>
              <select value={this.state.selectedTimeUnit} onChange={this.handleSelectChange} className="custom-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                <option selected value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="annualy">Annualy</option>
                <option value="lifetime">Lifetime</option>
              </select>
              <div className="input-group-append">
                <button type="submit" className="btn btn-secondary">add</button>
              </div>
          </InputGroup>
        </form>
        <MissonsList myMissons={this.state.myMissonsList} />
      </div>
    );
  }
}

export default App;
