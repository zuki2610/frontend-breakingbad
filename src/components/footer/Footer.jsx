import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo_simplified.png'

export default function Footer() {
  return (
    <footer className='d-flex justify-content-center py-3 bg-dark text-white'>
      <Link className='me-2' to='/'>
        <img src={logo} alt='Breaking Bad' width='25' height='25' />
      </Link>
      <span>© 2022</span>
    </footer>
  )
}
