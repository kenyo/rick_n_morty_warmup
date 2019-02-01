import React, { Component } from 'react'
import Header from './Header'
import './App.css'


const CharacterDropdown = (props) => (
  <div>
    <select>
      <option value="volvo">placeholder</option>

    </select>
  </div>
)

class App extends Component {



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
