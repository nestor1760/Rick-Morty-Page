import React, {useState, useEffect} from 'react';

const Pagination = ({pageNumber, setPageNumber}) => {
  const [width, setWidth] = useState(window.innerWidth)

  const widthUpdate = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', widthUpdate)
    return () => window.removeEventListener('resize', widthUpdate)
  }, [])


  const nextBtn = (e) => {
    e.preventDefault()
    setPageNumber(pageNumber + 1)
  }

  const prevBtn = (e) => {
    e.preventDefault()
    setPageNumber(pageNumber - 1)
  }

  const lastPage = (e) => {
    e.preventDefault()
    setPageNumber(42)
  }

  const firstPage = (e) => {
    e.preventDefault()
    setPageNumber(1)
  }

  return ( 
    <>
    <style jsx>
      {`
        @media (max-width: 411px) {
          .firstPage, 
          .lastPage{
            display: none
          }
          .paginationBlock {
            font-size: 20px;
          }
        }
      ` }
    </style>
      <div className='paginationBlock container d-flex justify-content-center gap-4 pb-4 mt-4'>
        <button onClick={firstPage} className='btn btn-primary firstPage'>First Page</button>
        {
          (pageNumber <= 1)
            ?
              <button disabled className='btn btn-primary'>...</button>
            :
              <button onClick={prevBtn} className='btn btn-primary'>Prev</button>
        }
        <h4 className='fs-2'>{pageNumber}</h4>
        {
          (pageNumber < 42)
            ?
              <button onClick={nextBtn} className='btn btn-primary'>Next</button>
            :
              <button  disabled className='btn btn-primary'>...</button>
        }
        <button onClick={lastPage} className='btn btn-primary lastPage'>Last Page</button>
      </div>
    </>
  )
}

export default Pagination
