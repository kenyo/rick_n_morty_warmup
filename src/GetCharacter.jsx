import React, { Component } from 'react';
import axios from "axios";
import { CharList } from "./CharList";

class GetCharacter extends Component{
  constructor(props){
    super(props);
    this.state = {
      character: [],
      selected: 0
    }; //closing for state
  };// closing for constructor



  getCharacters = () => {

    let url = "https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/"
    axios.get(url)
         .then(res=>{
           this.setState({
             character: res.data.results
           })
           console.log(this.state.character)
       })
  };

  componentDidMount(){
    this.getCharacters()

  }

  handleChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  render() {
    console.log(this.state)
    return(

      <div>
      Get Character
      <CharList character={this.state.character}
                handleChange={this.handleChange}
                selected={this.state.selected}/>
      </div>


    )
  }
};//closing for class

export default GetCharacter
