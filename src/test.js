import React from 'react';

export const Selected = ({list_characters}) => {
    // const { list_characters } = this.props;
    let list = list_characters.map((char, i) => {
        return (
            <>
                <option  key={i} value={char.name}>
                    {char.name}
                </option>
            </>
        )
    });
    return(
            <>
                <select>
                    <option selected value='selectValue' key='0'> </option>
                    {list}
                </select>
            </>
)}
