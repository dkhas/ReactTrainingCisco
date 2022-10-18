import React from 'react'

export default function Filter({filterEvent}) {
    return (
        <div><input type="text" 
        onChange={(evt) => filterEvent(evt.target.value)}
        placeholder='search by name' /></div>
      )
}
