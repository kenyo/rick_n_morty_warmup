import React, { Component } from 'react'
import axios from 'axios'
import Header from './components/Header'
import CharacterDropdown from './components/CharacterDropdown'
import CharacterDetails from './components/CharacterDetails'
import './App.css'

const rickMortyApi = 'https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      characters: [],
      selectedCharacterIndex: null,
    }
  }

  componentDidMount() {
    axios.get(rickMortyApi)
      .then(({data}) => this.setState({ characters: data.results }))
  }

  handleSelection = ({target}) => {
    const selectedCharacterIndex = target.value
    this.setState({ selectedCharacterIndex })
  }


  render() {
    const { characters, selectedCharacterIndex } = this.state
    const selectedCharacter = characters[selectedCharacterIndex] === undefined
      ? { name: '', status: '', species: '', image: '' }
      : characters[selectedCharacterIndex]

    return (
      <>
        <Header />
        <CharacterDropdown characters={this.state.characters} onChange={this.handleSelection} />

        <CharacterDetails
          name={selectedCharacter.name}
          status={selectedCharacter.status}
          species={selectedCharacter.species}
          image={selectedCharacter.image} />
      </>
    )
  }
}

export default App
