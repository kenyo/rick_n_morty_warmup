import React, { Component } from 'react'
import axios from 'axios'
import Header from './components/Header'
import CharacterDropdown from './components/CharacterDropdown'
import './App.css'

const rickMortyApi = 'https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/'



class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      characters: []
    }
  }

  componentDidMount() {
    axios.get(rickMortyApi)
      .then(({data}) => this.setState({ characters: data.results }))
  }

  render() {
    return (
      <>
        <Header />
        <CharacterDropdown characters={this.state.characters} />
      </>
    )
  }
}

export default App
