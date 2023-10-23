import React from 'react'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Episodes from './pages/Episodes';
import Location from './pages/Location';
import Charakters from './pages/Charakters';
import CardItem from './components/cards/CardItem';

function App () {
  return (
    <Router>
      <div className='App'>
        <Navbar />
      </div>

      <Routes>
        <Route path='/' element={<Charakters />}/>
        <Route path='/:id' element={<CardItem />}/>
        
        <Route path='/episodes' element={<Episodes />}/>
        <Route path='/episodes/:id' element={<CardItem />}/>

        <Route path='/location' element={<Location />}/>
        <Route path='/location/:id' element={<CardItem />}/>
      </Routes>
    </Router>
  )
}

export default App;
