import React, { useEffect, useState } from 'react'
import Card from '../components/cards/Card'
import InputGroup from '../components/filters/Category/InputGroup';

const Location = () => {
  const [id, setId] = useState(1);
  const [results, setResults] = useState([])
  const [fetchEpisodes, setFetchEpisodes] = useState([]);
  const {name, type, dimension} = fetchEpisodes;

  let api = `https://rickandmortyapi.com/api/location/${id}`

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [api])

  async function fetchData() {
    try {
      const responce = await fetch(api)
      const data = await responce.json()
      setFetchEpisodes(data)

      let episodesPromises = data.residents.map(async (locationUrl) => {
        return fetch(locationUrl).then((res) => res.json());
      });
  
      Promise.all(episodesPromises).then((locationData) => {
        setResults(locationData)})
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className='container'>
      <div className='row mb-4 fw-bold'>
        <h1 className='text-center text-dark my-3'> 
          Location : <span className='text-white'>{name==='' ? 'Unknown' : name}</span>
        </h1>
        <h5 className='text-center text-dark'>Dimension: <span className='text-white'>{dimension==='' ? 'Unknown' : dimension}</span></h5>
        <h6 className='text-center text-dark'>Type: <span className='text-white'>{type==='' ? 'Unknown' : type}</span></h6>
      </div>
      <div className='row'>
        <div className='col-lg-3 col-12'>
          <h4 className='text-center text-white mb-4'>
            Pick location
          </h4>
          <InputGroup setId={setId} name="Location" total={126}/>
        </div>
        <div className='col-lg-8 col-12'>
          <div className='row'>
            <Card page='/location/' results={results}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Location;
