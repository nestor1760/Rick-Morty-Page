import React, { useEffect, useState } from 'react'
import Card from '../components/cards/Card'
import InputGroup from '../components/filters/Category/InputGroup';

const Episodes = () => {
  const [id, setId] = useState(1);
  const [results, setResults] = useState([])
  const [fetchEpisodes, setFetchEpisodes] = useState([]);
  const {air_date, name } = fetchEpisodes;

  let api = `https://rickandmortyapi.com/api/episode/${id}`

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [api])

  async function fetchData() {
    try {
      const responce = await fetch(api)
      const data = await responce.json()
      setFetchEpisodes(data)

      let characterPromises = data.characters.map((characterUrl) => {
        return fetch(characterUrl).then((res) => res.json());
      });
  
      Promise.all(characterPromises).then((charactersData) => {
        setResults(charactersData)})
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className='container'>
      <div className='row mb-4'>
        <h1 className='text-center my-3'> 
          Episode : <span className='text-white'>{name==='' ? 'Unknown' : name}</span>
        </h1>
        <h5 className='text-center'>Air Date <span className='text-white'>{air_date==='' ? 'Unknown' : air_date}</span></h5>
      </div>
      <div className='row'>
        <div className='col-lg-3 clo-12'>
          <h4 className='text-center text-white mb-4'>
            Pick episodes
          </h4>
          <InputGroup setId={setId} name="Episode" total={51}/>
        </div>
        <div className='col-lg-8 col-12'>
          <div className='row'>
            <Card page='/episodes/' results={results}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Episodes;
