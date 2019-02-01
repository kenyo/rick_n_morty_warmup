import React from 'react'

 const CharacterDropdown = (props) => {
  const characterOptions = props.characters.map((x, i) =>
    <option key={i} value={x.name}>{x.name}</option>
  )

  return (
    <div>
      <select>
        { characterOptions }
      </select>
    </div>
  )
}

export default CharacterDropdown
