import React from 'react';
import '../../App.css'
import {NavLink, Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <style jsx>
      {`
        .customBack{
          background-color: rgba(255, 255, 255, 0);;
        }
      `}
    </style>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
            <Link 
              to='/'
              className="fs-1 text-black mavbar-brand text-decoration-none fw-bold"
            >
              Rick & Morty <span className="text-primary">Page
              </span>
            </Link>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNavAltMarkup" 
            aria-controls="navbarNavAltMarkup" 
            aria-expanded="false" 
            aria-label="Toggle navigation">

            <style jsx>
              {`
                button[aria-expanded="false"] > .close {
                  display: none;
                }
                button[aria-expanded="true"] > .open {
                  display: none;
                }
              `}
            </style>

            <i className='fas fa-bars open fw-bold text-dark'></i>
            <i className='fas fa-times close fw-bold text-dark'></i>
          </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav fs-4">
            <NavLink 
              activeClassName="active" 
              to='/'
              className="nav-link text-black" 
            >
              Charakters
            </NavLink>
            <NavLink 
              to='/episodes'
              className="nav-link text-black"
            >
              Episodes
            </NavLink>
            <NavLink 
              to='location'
              className="nav-link text-black fs-4"
            >
              Location
            </NavLink>
            
          </div>
        </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
