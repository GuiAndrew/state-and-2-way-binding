import React, { Component } from 'react';
import './App.css';
import UserOutput from './components/UserOutput/UserOutput';
import UserInput from './components/UserInput/UserInput';

class App extends Component {
  state = {
    texts: [
      { first: "This is the first task!" },
      { second: "Thanks for the visit!" },
      { userName: "Freezer" }
    ]
  }

  clickNameHandler = (newUserName) => {
    this.setState({ 
      texts: [
        { first: "Later!" },
        { second: "Soon!" },
        { userName: newUserName }
      ] 
    });
  }

  inputNameChangeHandler = (event) => {
    this.setState({ 
      texts: [
        { first: "Later!" },
        { second: "Soon!" },
        { userName: event.target.value }
      ] 
    });
  }

  render() {
    return (
        <div className="App">          
          <UserOutput first={ this.state.texts[0].first } />
          <UserOutput second={ this.state.texts[2].userName } click={ this.clickNameHandler.bind(this, 'Lilit') } >
            {this.state.texts[1].second}
          </UserOutput>
          <UserInput changed={ this.inputNameChangeHandler } userName={this.state.texts[2].userName} />
        </div>
      );
    }
}

export default App;
