import React from 'react'

export default function CharacterDetails (props) {
  const status = props.status ? `status: ${props.status}` : null
  const species = props.species ? `species: ${props.species}`: null

  return (
    <div>
      <h3>{props.name}</h3>
      <h4>{status}</h4>
      <h4>{species}</h4>
      <img src={props.image} alt='' />
    </div>
  )
}
