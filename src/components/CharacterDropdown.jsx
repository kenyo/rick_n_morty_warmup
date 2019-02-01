import React from 'react'

 const CharacterDropdown = (props) => {
  const characterOptions = props.characters.map((x, i) =>
    <option key={i} value={i}>{x.name}</option>
  )

  return (
    <div>
      <select onChange={props.onChange}>
        <option />
        { characterOptions }
      </select>
    </div>
  )
}

export default CharacterDropdown
