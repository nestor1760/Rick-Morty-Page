import React from 'react'

const FilterBTN = ({name, items, index, setPageNumber, task}) => {

  return (
    <div>
      <style jsx>
      {`
        .x:checked + label{
          background-color: #0b5ed7;
          color: white;
        }
        input[type="radio"]{
          display: none;
        }
      `}
      </style>
      <div className="form-check">
        <input 
          onClick={() => {
            setPageNumber(1);
            task(items)
          }}
          className="form-check-input x" 
          type="radio" 
          style={{display: 'none'}}
          name={name} 
          id={`${items}-${index}`} 
        />
        <label 
          className="btn btn-outline-primary" 
          htmlFor={`${items}-${index}`}
        >
          {items}
        </label>
      </div>
    </div>
  )
}

export default FilterBTN;
