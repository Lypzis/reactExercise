import React, { Component } from 'react';
import './App.css';

import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = {
    size: 0,
    text: '',
    array: []
  }

  textChangeHandler = (event) => {
    let inputFieldLength;
    let textOutput;

    inputFieldLength = event.target.value.length;
    textOutput = event.target.value;

    this.setState({
      size: inputFieldLength,
      text: textOutput
    });
  }

  textSizeChecker = () => {
    if (this.state.size <= 5) {
      return this.length = 'Text too short!';
    } else {
      return this.length = 'Text long enough!';
    }
  }

  charactersArray = () => {
    let characterArray = null;

    characterArray = this.state.text.slice();
    this.setState({
      array: characterArray.split('')
    });
  }

  render() {
    let lengthTemplate = null,
      textSize = null,
      characterTemplate = null;

    if (this.state.size > 0) {
      textSize = this.textSizeChecker();

      lengthTemplate = (
        <ValidationComponent
          size={this.state.size}
          sizeCheck={textSize} />
      );

      characterTemplate = (
        this.state.array.forEach((e) => {
            return (
              <CharComponent
                character={e}
              />
            );
        })
      );

    }

    return (
      <div className="App">
        <ol>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>

        <input type='text' onChange={(event) => this.textChangeHandler(event)} />
        {lengthTemplate}
        <br />
        {characterTemplate}

        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      </div>
    );
  }
}

export default App;
