import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const CardItem = () => {
  const [fetchedData, setFetchedData] = useState([])
  const navigate = useNavigate()
  
  const {id} = useParams()
  const {name, gender, location, origin, image, status, species} = fetchedData

  const api = `https://rickandmortyapi.com/api/character/${id}`

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [api])

  async function fetchData() {
    try {
      const responce = await fetch(api)
      const data = await responce.json()
      setFetchedData(data)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div>
      <div className='container text-white d-flex justify-content-center my-4'>
        <div className='d-flex flex-column gap-3'>
          <h1 className='text-center'>{name}</h1>
          <img src={image} alt='img-fluid'/>

          {(status === 'Dead')
            ?
              <div className='badge bg-danger fs-5'>{status}</div>
            : (status === 'Alive')
              ?
                <div className='badge bg-success fs-5'>{status}</div>
              :
                <div className='badge bg-secondary fs-5'>{status}</div>
          }

          <div className='content'>
            <div className=''>
              <p><span className='fw-bold'>Gender: </span>{gender}</p>
              <p><span className='fw-bold'>Location: </span>{location?.name}</p>
              <p><span className='fw-bold'>Origin: </span>{origin?.name}</p>
              <p><span className='fw-bold'>Species: </span>{species}</p>
            </div>
          </div>

          <button onClick={() => navigate(-1)} className='btn btn-primary fw-bold'>Go back</button>
        </div>
      </div>
    </div>
  )
}

export default CardItem;
