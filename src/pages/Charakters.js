import { useEffect, useState } from "react"
import Card from "../components/cards/Card"
import Filters from "../components/filters/Filters"
import Pagination from "../components/pagination/Pagination"
import Search from "../components/search/Search"

const Charakters = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const [fetchedData, setFetchedData] = useState([])
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('')
  const [gender, setGender] = useState('')
  const [species, setSpecies] = useState('')
  const {results} = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

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
    <div className="App">  
      <h1 className="text-center text-dark my-4">Charakters</h1>

      <Search search={search} setSearch={setSearch} setPageNumber={setPageNumber}/>

      <div className="container">
        <div className="row">
          <Filters 
            setStatus={setStatus} 
            setGender={setGender} 
            setSpecies={setSpecies}
            setPageNumber={setPageNumber}
          />
          <div className="col-lg-8 col-12">
            <div className="row">
              <Card page='/' results={results}/>
            </div>
          </div>
        </div>
      </div>

      <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber}/>
    </div>
  );
}

export default Charakters;
