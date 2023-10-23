import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.scss';

const Card = ({ results, page }) => {
  let display;

  if(results) {
      display = results.map(person => {
        const {id, name, image, location, status} = person
        return (
        <Link 
          style={{textDecoration: 'none'}}
          to={`${page}${id}`}
          key={id} className='col-lg-4 col-md-6 col-12 mb-4 position-relative'
        >
          <div className={`${styles.cards} d-flex justify-content-center flex-column`}>
            <img src={image} alt={name} className={`${styles.img} img-fluid`}/>
            <div style={{padding: '10px'}} className='content'>
              <div className='fs-4 fw-bold mb-4'>{name}</div>
              <div className=''>
                <div className='fs-6'>Last location</div>
                <div className='fs-5'>{location.name}</div>
              </div>
            </div>
          </div>
          {(status === 'Dead')
            ?
              <div className={`${styles.badge} position-absolute badge bg-danger`}>{status}</div>
            : (status === 'Alive')
              ?
                <div className={`${styles.badge} position-absolute badge bg-success`}>{status}</div>
              :
                <div className={`${styles.badge} position-absolute badge bg-secondary`}>{status}</div>
          }
          
        </Link>)
      })
  } else {
    display = <div>No Charakters Found :/</div>
  }

  return <>{display}</>
}

export default Card
