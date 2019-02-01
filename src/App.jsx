import React, { Component } from 'react'
import axios from 'axios'
import Header from './Header'
import './App.css'

const rickMortyApi = 'https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/'

const CharacterDropdown = (props) => {
  const characterOptions = props.characters.map((x, i) => <option key={i} value={x.name}>{x.name}</option>)

  return (
    <div>
      <select>
        { characterOptions }
      </select>
    </div>
  )
}





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
