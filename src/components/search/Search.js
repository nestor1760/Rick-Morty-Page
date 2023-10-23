import React from 'react';
import styles from './Search.module.scss'

const Search = ({search, setSearch, setPageNumber}) => {

  return (
    <form className='d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5 mt-3'>
      <input 
        value={search}
        onChange={e => {
          setPageNumber(1)
          setSearch(e.target.value)
        }}
        placeholder='Search for Charakters' 
        type='text' 
        className={styles.input}
      />
      <button onClick={e => e.preventDefault()} className={`${styles.btn} btn btn-primary fs-5`}>Search</button>
    </form>
  )
}

export default Search;
