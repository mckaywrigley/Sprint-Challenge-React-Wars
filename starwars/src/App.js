import React, { Component } from 'react';
import './App.css';
import CharacterList from './components/CharacterList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      data: {}
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ 
          starwarsChars: data.results,
          data: data
        });
      })
      .catch(err => {
        throw new Error(err);
      });

      
  };


  render() {
    console.log(this.state);
    return (
      <div className="App">
      <button
        onClick={() => 
          this.state.data.previous === null
          ? alert('no previous page')
          : this.getCharacters(this.state.data.previous)
        }
      >
        Previous
      </button>
        <CharacterList 
          characters={this.state.starwarsChars}
        />
        <button
        onClick={() => this.getCharacters(this.state.data.next)}
      >
        Next
      </button>
      </div>
    );
  }
}

export default App;

