import React, { Component } from 'react';
import './App.css';

import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = {
    size: 0,
    text: ''
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
  };

  textSizeChecker = () => {
    if (this.state.size <= 5) {
      return this.length = 'Text too short!';
    } else {
      return this.length = 'Text long enough!';
    }
  };

  characterSplit = () => this.state.text.split('');

  characterDeleteHandler = (index) => {
    let list = [...this.state.text];
    
    list.splice(index, 1);

    list = list.join('');

    this.setState({
      text: list
    })
  };
  
  render() {
    let lengthTemplate = null,
      textSize = null,
      list = null;

    if (this.state.size > 0) {
      textSize = this.textSizeChecker();

      lengthTemplate = (
        <ValidationComponent
          size={this.state.size}
          sizeCheck={textSize} />
      );

      list = (
        <div>
          {/*not ideal key, always remember*/}
          {this.characterSplit().map((e, index) => {
           return <CharComponent 
              character={e}
              key={index} 
              click={this.characterDeleteHandler.bind(this, index)}/>
            })}
        </div>
      );
      
    }

    return (
      <div className="App">
        <ol>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>

        <input type='text' onChange={(event) => this.textChangeHandler(event)} />
        {lengthTemplate}
        <br />
        {list}

        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      </div>
    );
  }
}

export default App;
