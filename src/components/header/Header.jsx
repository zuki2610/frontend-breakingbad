import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.svg'

export default function Header() {
  return (
    <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
      <div className='container'>
        <Link className='navbar-brand' to='/'>
          <img src={logo} alt='Breaking Bad' width='150' height='89' />
        </Link>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link className='nav-link' aria-current='page' to='/'>Home</Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link' to='/personajes'>Personajes</Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link' to='/episodios'>Episodios</Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link' to='/citas'>Citas</Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link' to='/muertes'>Muertes</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
