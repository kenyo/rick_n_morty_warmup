import React from "react";

export const CharList = (props) => {

  // console.log(props);

  let list = props.character ?  props.character.map((char)=>{
    return(
      <>
        <option key={char.id} value={char.name}>
            {char.name}
        </option>
      </>
    )
  }) : "";

  return(
    <>
      <select onChange={props.handleChange} name="selected" value={props.selected}>
        <option disabled> -Select Character - </option>
        {list}
      </select>

      

    </>
  )
}
