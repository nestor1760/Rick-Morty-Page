import React from 'react'

const InputGroup = ({total, name, setId}) => {

  return (
    <div className="input-group mb-3">
      <select 
        onChange={e => setId(e.target.value)}
        className="form-select" 
        id={name}
      >
        <option value='1' selected>Choose...</option>
        {[...Array(total).keys()].map((episode) => {
          return (
            <option key={episode} value={episode + 1}>{name} - {episode + 1}</option>
          )
        })}
  
      </select>
    </div>
  )
}

export default InputGroup;
