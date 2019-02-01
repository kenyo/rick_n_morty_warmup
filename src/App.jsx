import React, { Component } from 'react'
import axios from 'axios'
import Header from './Header'
import './App.css'

const rickMortyApi = 'https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/'

const CharacterDropdown = (props) => (
  <div>
    <select>
      <option value="volvo">placeholder</option>

    </select>
  </div>
)

class App extends Component {

  componentDidMount() {
    axios.get(rickMortyApi)
      .then(({data}) => this.setState({ characters: data.results }))
  }


  render() {
    return (
      <>
        <Header />
        <CharacterDropdown />
      </>
    )
  }
}

export default App
