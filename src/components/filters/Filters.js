import React from 'react';
import Gender from './Category/Gender';
import Species from './Category/Species';
import Status from './Category/Status';

const Filters = ({setStatus, setSpecies, setGender, setPageNumber}) => {

  const clearFilters = () => {
    setGender('');
    setStatus('');
    setPageNumber(1);
    setSpecies('');
    window.location.reload(false)
  }

  return (
    <div className='col-lg-3 col-12 mb-5'>
        <div className='text-center fw-bold fs-4 mb-2'>Filter</div>
        <div 
          onClick={clearFilters}
          style={{cursor: 'pointer'}} 
          className='text-center text-decoration-underline mb-3'
        >
          Clear filters
        </div>

        <div className="accordion" id="accordionExample">
          <Status setStatus={setStatus} setPageNumber={setPageNumber}/>
          <Species setSpecies={setSpecies} setPageNumber={setPageNumber}/>
          <Gender setGender={setGender} setPageNumber={setPageNumber}/>
        </div>
    </div>
  )
}

export default Filters;
